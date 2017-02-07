﻿using System.Net.Http;
using System.Security.Authentication;
using System.Xml.Linq;
using AspNet.Security.CAS.Security;

namespace AspNet.Security.CAS.Validation
{
    // see https://github.com/apereo/cas/blob/master/cas-server-documentation/protocol/CAS-Protocol-Specification.md#25-servicevalidate-cas-20
    public class CasV2TicketValidator : CasTicketValidator
    {
        protected static XNamespace Namespace = "http://www.yale.edu/tp/cas";
        protected static XName Attributes = Namespace + "attributes";
        protected static XName AuthenticationSuccess = Namespace + "authenticationSuccess";
        protected static XName AuthenticationFailure = Namespace + "authenticationFailure";
        protected static XName User = Namespace + "user";
        protected const string Code = "code";

        public CasV2TicketValidator(CasOptions options, HttpClient httpClient = null) : base(options, httpClient)
        {
            ValidateUrlSuffix = "serviceValidate";
        }

        protected override ICasPrincipal BuildPrincipal(string responseBody)
        {
            var doc = XElement.Parse(responseBody);
            /* On ticket validation failure:
            <cas:serviceResponse xmlns:cas="http://www.yale.edu/tp/cas">
             <cas:authenticationFailure code="INVALID_TICKET">
                Ticket ST-1856339-aA5Yuvrxzpv8Tau1cYQ7 not recognized
              </cas:authenticationFailure>
            </cas:serviceResponse>
            */
            var failureElement = doc.Element(AuthenticationFailure);
            if (null != failureElement)
            {
                throw new AuthenticationException(failureElement.Value);
            }
            /* On ticket validation success:
            <cas:serviceResponse xmlns:cas="http://www.yale.edu/tp/cas">
                <cas:authenticationSuccess>
                <cas:user>username</cas:user>
                <cas:proxyGrantingTicket>PGTIOU-84678-8a9d...</cas:proxyGrantingTicket>
                </cas:authenticationSuccess>
            </cas:serviceResponse>
            */
            var principalName = doc.Element(AuthenticationSuccess).Element(User)?.Value;
            var assertion = new Assertion(principalName);
            return new CasPrincipal(assertion, options.SignInAsAuthenticationType);
        }
    }
}
