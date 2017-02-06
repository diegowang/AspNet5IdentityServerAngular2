using System.Net.Http;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Http.Authentication;

namespace AspNet.Security.CAS
{
    interface ICasTicketValidator
    {
        Task<AuthenticateResult> ValidateTicket(HttpContext context, HttpClient httpClient,
            AuthenticationProperties properties, string ticket, string service);
    }
}
