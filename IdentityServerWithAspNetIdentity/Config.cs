using System.Collections.Generic;
using IdentityServer4;
using IdentityServer4.Models;

namespace IdentityServerWithAspNetIdentity
{
    public class Config
    {
        public static string HOST_URL = "https://localhost:29970";

        public static IEnumerable<IdentityResource> GetIdentityResources()
        {
            return new List<IdentityResource>
            {
                new IdentityResources.OpenId(),
                new IdentityResources.Profile(),
                new IdentityResources.Email(),
                new IdentityResource("dataeventrecordsscope",new []{ "role", "admin", "user", "dataEventRecords", "dataEventRecords.admin" , "dataEventRecords.user" } ),
            };
        }

        public static IEnumerable<ApiResource> GetApiResources()
        {
            return new List<ApiResource>
            {
                new ApiResource("dataEventRecords")
                {
                    ApiSecrets =
                    {
                        new Secret("dataEventRecordsSecret".Sha256())
                    },
                    Scopes =
                    {
                        new Scope
                        {
                            Name = "dataeventrecordsscope",
                            DisplayName = "Scope for the dataEventRecords ApiResource"
                        }
                    },
                    UserClaims = { "role", "admin", "user", "dataEventRecords", "dataEventRecords.admin", "dataEventRecords.user" }
                }
            };
        }

        // clients want to access resources (aka scopes)
        public static IEnumerable<Client> GetClients()
        {
            // client credentials client
            return new List<Client>
            {
                new Client
                {
                    ClientName = "singleapp",
                    ClientId = "singleapp",
                    AccessTokenType = AccessTokenType.Reference,
                    //AccessTokenLifetime = 600, // 10 minutes, default 60 minutes
                    AllowedGrantTypes = GrantTypes.Implicit,
                    RequireConsent = false,
                    AllowAccessTokensViaBrowser = true,
                    RedirectUris = new List<string>
                    {
                         HOST_URL

                    },
                    PostLogoutRedirectUris = new List<string>
                    {
                         HOST_URL
                    },
                    AllowedCorsOrigins = new List<string>
                    {
                         HOST_URL
                    },
                    AllowedScopes = new List<string>
                    {
                        "openid",
                        "dataEventRecords",
                        "dataeventrecordsscope",
                        "securedFiles",
                        "securedfilesscope",
                        "role"
                    }
                }
            };
            //return new List<Client>
            //{
            //    new Client
            //    {
            //        ClientId = "client",
            //        AllowedGrantTypes = GrantTypes.ClientCredentials,

            //        ClientSecrets =
            //        {
            //            new Secret("secret".Sha256())
            //        },
            //        AllowedScopes = { "api1" }
            //    },

            //    // resource owner password grant client
            //    new Client
            //    {
            //        ClientId = "ro.client",
            //        AllowedGrantTypes = GrantTypes.ResourceOwnerPassword,

            //        ClientSecrets =
            //        {
            //            new Secret("secret".Sha256())
            //        },
            //        AllowedScopes = { "api1" }
            //    },

            //    // OpenID Connect hybrid flow and client credentials client (MVC)
            //    new Client
            //    {
            //        ClientId = "mvc",
            //        ClientName = "MVC Client",
            //        AllowedGrantTypes = GrantTypes.HybridAndClientCredentials,

            //        RequireConsent = true,

            //        ClientSecrets =
            //        {
            //            new Secret("secret".Sha256())
            //        },

            //        RedirectUris = { "http://localhost:29970/signin-oidc" },
            //        PostLogoutRedirectUris = { "http://localhost:29970" },

            //        AllowedScopes =
            //        {
            //            IdentityServerConstants.StandardScopes.OpenId,
            //            IdentityServerConstants.StandardScopes.Profile,
            //            "api1"
            //        },
            //        AllowOfflineAccess = true
            //    }
            //};
        }
    }
}
