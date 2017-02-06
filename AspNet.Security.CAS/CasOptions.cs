using System;
using AspNet.Security.CAS.Events;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Http.Authentication;

namespace AspNet.Security.CAS
{
    /// <summary>
    /// Options for the <see cref="CasMiddleware"/>.
    /// </summary>
    public class CasOptions : RemoteAuthenticationOptions
    {
        public const string Scheme = "CAS";
        public CasOptions()
        {
            AuthenticationScheme = Scheme;
            DisplayName = AuthenticationScheme;
            CallbackPath = new PathString("/signin-cas");
            BackchannelTimeout = TimeSpan.FromSeconds(60);
            Events = new CasEvents();
        }

        /// <summary>
        /// Gets or sets the type used to secure data handled by the middleware.
        /// </summary>
        public ISecureDataFormat<AuthenticationProperties> StateDataFormat { get; set; }

        /// <summary>
        /// Get or sets the text that the user can display on a sign in user interface.
        /// </summary>
        public string Caption { get; set; }

        /// <summary>
        /// Gets or sets the name of another authentication middleware which will be responsible for actually issuing a user <see cref="System.Security.Claims.ClaimsIdentity"/>.
        /// </summary>
        public string SignInAsAuthenticationType { get; set; }

        /// <summary>
        /// The base url of the CAS server
        /// </summary>
        /// <example>https://cas.example.com/cas</example>
        public string CasServerUrlBase { get; set; }

        /// <summary>
        /// If set, and using the CAS 2 payload, the ticket validator will set the NameClaimType to
        /// the specified CAS attribute rather than using the default Name claim
        /// </summary>
        public string NameClaimType { get; set; }

        /// <summary>
        /// If set, and using the CAS 2 payload, the ticket validator use the specified CAS attribute as
        /// the NameIdentifier claim, which is used to associate external logins
        /// </summary>
        public string NameIdentifierAttribute { get; set; }

        /// <summary>
        ///
        /// </summary>
        public ICasTicketValidator TicketValidator { get; set; }

    }
}
