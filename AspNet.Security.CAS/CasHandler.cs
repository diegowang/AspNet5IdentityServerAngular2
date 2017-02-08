using System;
using System.Net.Http;
using System.Security.Claims;
using System.Threading.Tasks;
using AspNet.Security.CAS.Cookies;
using AspNet.Security.CAS.Events;
using AspNet.Security.CAS.Security;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Http.Authentication;
using Microsoft.AspNetCore.Http.Features.Authentication;
using Microsoft.Extensions.Logging;

namespace AspNet.Security.CAS
{
    public class CasHandler : RemoteAuthenticationHandler<CasOptions>
    {
        private readonly HttpClient _httpClient;

        public CasHandler(HttpClient httpClient)
        {
            _httpClient = httpClient;
        }

        protected override async Task<bool> HandleUnauthorizedAsync(ChallengeContext context)
        {
            if (context == null)
            {
                throw new ArgumentNullException(nameof(context));
            }

            var properties = new AuthenticationProperties(context.Properties);
            if (string.IsNullOrEmpty(properties.RedirectUri))
            {
                properties.RedirectUri = CurrentUri;
            }

            // OAuth2 10.12 CSRF
            GenerateCorrelationId(properties);
            var state = Options.StateDataFormat.Protect(properties);
            var service = BuildRedirectUri($"{Options.CallbackPath}?state={Uri.EscapeDataString(state)}");

            var authorizationEndpoint = $"{Options.CasServerUrlBase}/login?service={Uri.EscapeDataString(service)}";

            var redirectContext = new CasRedirectToAuthorizationEndpointContext(
                Context, Options,
                properties, authorizationEndpoint);

            await Options.Events.RedirectToAuthorizationEndpoint(redirectContext);

            return true;
        }

        protected override async Task<AuthenticateResult> HandleRemoteAuthenticateAsync()
        {
            var query = Request.Query;
            var state = query["state"];

            var properties = Options.StateDataFormat.Unprotect(state);
            if (properties == null)
            {
                return AuthenticateResult.Fail("The state was missing or invalid.");
            }

            // CSRF
            if (!ValidateCorrelationId(properties))
            {
                return AuthenticateResult.Fail("Correlation failed.");
            }

            var ticket = query["ticket"];
            if (string.IsNullOrEmpty(ticket))
            {
                return AuthenticateResult.Fail("Missing CAS ticket.");
            }

            var service = BuildRedirectUri($"{Options.CallbackPath}?state={Uri.EscapeDataString(state)}");
            ICasPrincipal principal = null;
            try
            {
                principal = await Options.TicketValidator.ValidateAsync(ticket, service, Context.RequestAborted);
            }
            catch (Exception e)
            {
                Logger.LogWarning(e.Message, e);
                return AuthenticateResult.Fail("There was a problem validating ticket.");
            }
            if (principal == null)
            {
                return AuthenticateResult.Fail("Missing Validate Principal.");
            }
            if (Options.UseTicketStore)
            {
                properties.SetServiceTicket(ticket);
            }
            var ticketContext = new CasCreatingTicketContext(Context, Options)
            {
                Principal = principal as ClaimsPrincipal ?? new ClaimsPrincipal(principal),
                Properties = properties
            };
            await Options.Events.CreatingTicket(ticketContext);
            return AuthenticateResult.Success(new AuthenticationTicket(
                        ticketContext.Principal,
                        ticketContext.Properties,
                        Options.AuthenticationScheme));
        }
    }
}
