using System.Net.Http;
using AspNet.Security.CAS.Security;

namespace AspNet.Security.CAS.Validation
{
    public class CasV1TicketValidator : CasTicketValidator
    {
        // see https://github.com/apereo/cas/blob/master/cas-server-documentation/protocol/CAS-Protocol-Specification.md#24-validate-cas-10
        public CasV1TicketValidator(CasOptions options, HttpClient httpClient = null) : base(options, httpClient)
        {
            ValidateUrlSuffix = "validate";
        }

        protected override ICasPrincipal BuildPrincipal(string responseBody)
        {
            var responseParts = responseBody.Split('\n');
            if (responseParts.Length >= 2 && responseParts[0] == "yes")
            {
                var assertion = new Assertion(responseParts[1]);
                return new CasPrincipal(assertion, options.SignInAsAuthenticationType);
            }
            return null;
        }
    }
}
