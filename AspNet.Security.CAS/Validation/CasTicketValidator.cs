﻿using System;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using AspNet.Security.CAS.Security;

namespace AspNet.Security.CAS.Validation
{
    public abstract class CasTicketValidator : ICasTicketValidator
    {
        protected string validateUrl;
        protected HttpClient httpClient;
        protected CasOptions options;

        public CasTicketValidator(CasOptions options, HttpClient httpClient = null)
        {
            if (options == null) throw new ArgumentNullException(nameof(options));
            this.options = options;
            this.httpClient = httpClient ?? new HttpClient();
        }

        protected string ValidateUrlSuffix { get; set; }

        public virtual async Task<ICasPrincipal> ValidateAsync(string ticket, string service, CancellationToken cancellationToken)
        {
            if (string.IsNullOrEmpty(ticket)) throw new ArgumentNullException(nameof(ticket));
            if (string.IsNullOrEmpty(service)) throw new ArgumentNullException(nameof(service));
            var baseUri = new Uri(options.CasServerUrlBase + (options.CasServerUrlBase.EndsWith("/") ? string.Empty : "/"));
            var validateUri = new Uri(baseUri, ValidateUrlSuffix);
            // unescape first to prevent double escape
            var escapedService = Uri.EscapeDataString(Uri.UnescapeDataString(service));
            var escapedTicket = Uri.EscapeDataString(ticket);
            var validateUrl = $"{validateUri.AbsoluteUri}?service={escapedService}&ticket={ticket}";
            var response = await httpClient.GetAsync(validateUrl, cancellationToken).ConfigureAwait(false);
            response.EnsureSuccessStatusCode();
            var responseBody = await response.Content.ReadAsStringAsync().ConfigureAwait(false);
            return BuildPrincipal(responseBody);
        }

        protected abstract ICasPrincipal BuildPrincipal(string responseBody);
    }
}
