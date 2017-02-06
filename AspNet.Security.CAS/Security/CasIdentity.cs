using System.Security.Claims;

namespace AspNet.Security.CAS.Security
{
    public class CasIdentity : ClaimsIdentity
    {
        public CasIdentity(Assertion assertion, string authenticationType) : base(authenticationType)
        {
            Assertion = assertion;
            if (assertion != null)
            {
                AddClaim(new Claim(ClaimTypes.NameIdentifier, assertion.PrincipalName));
            }
        }

        public Assertion Assertion { get; protected set; }
    }
}
