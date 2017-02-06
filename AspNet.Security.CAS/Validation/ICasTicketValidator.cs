using System.Threading;
using System.Threading.Tasks;

namespace AspNet.Security.CAS
{
    public interface ICasTicketValidator
    {
        //Old version:
        //Task<AuthenticateResult> ValidateTicket(HttpContext context, HttpClient httpClient,
        //    AuthenticationProperties properties, string ticket, string service);


        /// <summary>
        /// Validate ticket to get principal
        /// </summary>
        /// <param name="ticket"></param>
        /// <param name="service"></param>
        /// <param name="cancellationToken"></param>
        /// <returns></returns>
        /// <exception cref="System.Security.Authentication.AuthenticationException"></exception>
        /// <exception cref="System.Net.Http.HttpRequestException"></exception>
        /// <exception cref="System.UriFormatException"></exception>
        Task<ICasPrincipal> ValidateAsync(string ticket, string service, CancellationToken cancellationToken);
    }
}
