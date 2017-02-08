using System;
using System.Collections.Generic;
using AspNet.Security.CAS.Security;

namespace AspNet.Security.CAS.Cookies
{
    public class ServiceTicket
    {
        public ServiceTicket(string ticketId, Assertion assertion, IEnumerable<ClaimWrapper> claims, string authenticationType)
        {
            if (string.IsNullOrWhiteSpace(ticketId)) throw new ArgumentNullException(nameof(ticketId));
            if (string.IsNullOrWhiteSpace(authenticationType)) throw new ArgumentNullException(nameof(authenticationType));
            if (assertion == null) throw new ArgumentNullException(nameof(assertion));
            TicketId = ticketId;
            Assertion = assertion;
            Claims = claims;
            AuthenticationType = authenticationType;
        }

        public string TicketId { get; }

        public string AuthenticationType { get; }

        public Assertion Assertion { get; }

        public IEnumerable<ClaimWrapper> Claims { get; }
    }
}
