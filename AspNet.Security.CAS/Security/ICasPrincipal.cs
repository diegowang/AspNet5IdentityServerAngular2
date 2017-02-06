using System.Security.Principal;

namespace AspNet.Security.CAS.Security
{
    public interface ICasPrincipal: IPrincipal
    {
        Assertion Assertion { get; }
    }
}
