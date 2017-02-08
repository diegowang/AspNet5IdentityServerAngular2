﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.Extensions.Options;

namespace AspNet.Security.CAS
{
    /// <summary>
    /// Extension methods to add CAS authentication capabilities to an HTTP application pipeline.
    /// </summary>
    public static class CasAppBuilderExtensions
    {
        /// <summary>
        /// Adds the <see cref="CasMiddleware"/> middleware to the specified <see cref="IApplicationBuilder"/>, which enables Cas authentication capabilities.
        /// </summary>
        /// <param name="app">The <see cref="IApplicationBuilder"/> to add the middleware to.</param>
        /// <returns>A reference to this instance after the operation has completed.</returns>
        public static IApplicationBuilder UseCasAuthentication(this IApplicationBuilder app)
        {
            if (app == null)
            {
                throw new ArgumentNullException(nameof(app));
            }

            return app.UseMiddleware<CasMiddleware>();
        }

        /// <summary>
        /// Adds the <see cref="CasMiddleware"/> middleware to the specified <see cref="IApplicationBuilder"/>, which enables Cas authentication capabilities.
        /// </summary>
        /// <param name="app">The <see cref="IApplicationBuilder"/> to add the middleware to.</param>
        /// <param name="options">A <see cref="CasOptions"/> that specifies options for the middleware.</param>
        /// <returns>A reference to this instance after the operation has completed.</returns>
        public static IApplicationBuilder UseCasAuthentication(this IApplicationBuilder app, CasOptions options)
        {
            if (app == null)
            {
                throw new ArgumentNullException(nameof(app));
            }

            if (options == null)
            {
                throw new ArgumentNullException(nameof(options));
            }

            return app.UseMiddleware<CasMiddleware>(Options.Create(options));
        }

        public static IApplicationBuilder UseCasAuthentication(this IApplicationBuilder app, Action<CasOptions> configureOptions)
        {
            if (app == null) throw new ArgumentNullException(nameof(app));
            var options = new CasOptions();
            configureOptions.Invoke(options);
            return app.UseCasAuthentication(options);
        }

    }
}
