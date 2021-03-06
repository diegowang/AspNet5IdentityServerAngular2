"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var import0 = require('@angular/core/src/linker/ng_module_factory');
var import1 = require('../../../angular2App/app/app.module');
var import2 = require('@angular/common/src/common_module');
var import3 = require('@angular/core/src/application_module');
var import4 = require('@angular/platform-browser/src/browser');
var import5 = require('@angular/forms/src/directives');
var import6 = require('@angular/forms/src/form_providers');
var import7 = require('@angular/router/src/router_module');
var import8 = require('@angular/http/src/http_module');
var import9 = require('@angular/common/src/localization');
var import10 = require('@angular/core/src/application_init');
var import11 = require('@angular/core/src/testability/testability');
var import12 = require('@angular/core/src/application_ref');
var import13 = require('@angular/core/src/linker/compiler');
var import14 = require('@angular/platform-browser/src/dom/events/hammer_gestures');
var import15 = require('@angular/platform-browser/src/dom/events/event_manager');
var import16 = require('@angular/platform-browser/src/dom/shared_styles_host');
var import17 = require('@angular/platform-browser/src/dom/dom_renderer');
var import18 = require('@angular/platform-browser/src/security/dom_sanitization_service');
var import19 = require('@angular/core/src/animation/animation_queue');
var import20 = require('@angular/core/src/linker/view_utils');
var import21 = require('@angular/platform-browser/src/browser/title');
var import22 = require('@angular/forms/src/directives/radio_control_value_accessor');
var import23 = require('@angular/http/src/backends/browser_xhr');
var import24 = require('@angular/http/src/base_response_options');
var import25 = require('@angular/http/src/backends/xhr_backend');
var import26 = require('@angular/http/src/base_request_options');
var import27 = require('@angular/http/src/backends/browser_jsonp');
var import28 = require('@angular/http/src/backends/jsonp_backend');
var import29 = require('@angular/common/src/location/location');
var import30 = require('@angular/router/src/url_tree');
var import31 = require('@angular/router/src/router_outlet_map');
var import32 = require('@angular/core/src/linker/system_js_ng_module_factory_loader');
var import33 = require('@angular/router/src/router_preloader');
var import34 = require('../../../angular2App/app/app.constants');
var import35 = require('../../../angular2App/app/services/SecurityService');
var import36 = require('../../../angular2App/app/dataeventrecords/DataEventRecordsService');
var import37 = require('../../../angular2App/app/user-management/UserManagementService');
var import38 = require('../../../angular2App/app/guards/hasAdminRoleAuthenticationGuard');
var import39 = require('../../../angular2App/app/guards/hasAdminRoleCanLoadGuard');
var import41 = require('./home/home.component.ngfactory');
var import42 = require('./user-management/user-management.component.ngfactory');
var import43 = require('./forbidden/forbidden.component.ngfactory');
var import44 = require('./unauthorized/unauthorized.component.ngfactory');
var import45 = require('./dataeventrecords/dataeventrecords-list.component.ngfactory');
var import46 = require('./dataeventrecords/dataeventrecords-create.component.ngfactory');
var import47 = require('./dataeventrecords/dataeventrecords-edit.component.ngfactory');
var import48 = require('./app.component.ngfactory');
var import49 = require('@angular/core/src/i18n/tokens');
var import50 = require('@angular/core/src/application_tokens');
var import51 = require('@angular/platform-browser/src/dom/events/dom_events');
var import52 = require('@angular/platform-browser/src/dom/events/key_events');
var import53 = require('@angular/core/src/zone/ng_zone');
var import54 = require('@angular/platform-browser/src/dom/debug/ng_probe');
var import55 = require('@angular/common/src/location/platform_location');
var import56 = require('@angular/common/src/location/location_strategy');
var import57 = require('../../../angular2App/app/home/home.component');
var import58 = require('../../../angular2App/app/user-management/user-management.component');
var import59 = require('../../../angular2App/app/forbidden/forbidden.component');
var import60 = require('../../../angular2App/app/unauthorized/unauthorized.component');
var import61 = require('../../../angular2App/app/dataeventrecords/dataeventrecords-list.component');
var import62 = require('../../../angular2App/app/dataeventrecords/dataeventrecords-create.component');
var import63 = require('../../../angular2App/app/dataeventrecords/dataeventrecords-edit.component');
var import64 = require('@angular/router/src/url_handling_strategy');
var import65 = require('@angular/router/src/route_reuse_strategy');
var import66 = require('@angular/router/src/router');
var import67 = require('@angular/core/src/console');
var import68 = require('@angular/core/src/error_handler');
var import69 = require('@angular/platform-browser/src/dom/dom_tokens');
var import70 = require('@angular/platform-browser/src/dom/animation_driver');
var import71 = require('@angular/core/src/render/api');
var import72 = require('@angular/core/src/security');
var import73 = require('@angular/core/src/change_detection/differs/iterable_differs');
var import74 = require('@angular/core/src/change_detection/differs/keyvalue_differs');
var import75 = require('@angular/http/src/interfaces');
var import76 = require('@angular/http/src/http');
var import77 = require('@angular/core/src/linker/ng_module_factory_loader');
var import78 = require('@angular/router/src/router_config_loader');
var import79 = require('@angular/router/src/router_state');
var AppModuleInjector = (function (_super) {
    __extends(AppModuleInjector, _super);
    function AppModuleInjector(parent) {
        _super.call(this, parent, [
            import41.HomeComponentNgFactory,
            import42.UserManagementComponentNgFactory,
            import43.ForbiddenComponentNgFactory,
            import44.UnauthorizedComponentNgFactory,
            import45.DataEventRecordsListComponentNgFactory,
            import46.DataEventRecordsCreateComponentNgFactory,
            import47.DataEventRecordsEditComponentNgFactory,
            import48.AppComponentNgFactory
        ], [import48.AppComponentNgFactory]);
    }
    Object.defineProperty(AppModuleInjector.prototype, "_LOCALE_ID_10", {
        get: function () {
            if ((this.__LOCALE_ID_10 == null)) {
                (this.__LOCALE_ID_10 = import3._localeFactory(this.parent.get(import49.LOCALE_ID, null)));
            }
            return this.__LOCALE_ID_10;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_NgLocalization_11", {
        get: function () {
            if ((this.__NgLocalization_11 == null)) {
                (this.__NgLocalization_11 = new import9.NgLocaleLocalization(this._LOCALE_ID_10));
            }
            return this.__NgLocalization_11;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_ApplicationRef_16", {
        get: function () {
            if ((this.__ApplicationRef_16 == null)) {
                (this.__ApplicationRef_16 = this._ApplicationRef__15);
            }
            return this.__ApplicationRef_16;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_Compiler_17", {
        get: function () {
            if ((this.__Compiler_17 == null)) {
                (this.__Compiler_17 = new import13.Compiler());
            }
            return this.__Compiler_17;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_APP_ID_18", {
        get: function () {
            if ((this.__APP_ID_18 == null)) {
                (this.__APP_ID_18 = import50._appIdRandomProviderFactory());
            }
            return this.__APP_ID_18;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_DOCUMENT_19", {
        get: function () {
            if ((this.__DOCUMENT_19 == null)) {
                (this.__DOCUMENT_19 = import4._document());
            }
            return this.__DOCUMENT_19;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_HAMMER_GESTURE_CONFIG_20", {
        get: function () {
            if ((this.__HAMMER_GESTURE_CONFIG_20 == null)) {
                (this.__HAMMER_GESTURE_CONFIG_20 = new import14.HammerGestureConfig());
            }
            return this.__HAMMER_GESTURE_CONFIG_20;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_EVENT_MANAGER_PLUGINS_21", {
        get: function () {
            if ((this.__EVENT_MANAGER_PLUGINS_21 == null)) {
                (this.__EVENT_MANAGER_PLUGINS_21 = [
                    new import51.DomEventsPlugin(),
                    new import52.KeyEventsPlugin(),
                    new import14.HammerGesturesPlugin(this._HAMMER_GESTURE_CONFIG_20)
                ]);
            }
            return this.__EVENT_MANAGER_PLUGINS_21;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_EventManager_22", {
        get: function () {
            if ((this.__EventManager_22 == null)) {
                (this.__EventManager_22 = new import15.EventManager(this._EVENT_MANAGER_PLUGINS_21, this.parent.get(import53.NgZone)));
            }
            return this.__EventManager_22;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_DomSharedStylesHost_23", {
        get: function () {
            if ((this.__DomSharedStylesHost_23 == null)) {
                (this.__DomSharedStylesHost_23 = new import16.DomSharedStylesHost(this._DOCUMENT_19));
            }
            return this.__DomSharedStylesHost_23;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_AnimationDriver_24", {
        get: function () {
            if ((this.__AnimationDriver_24 == null)) {
                (this.__AnimationDriver_24 = import4._resolveDefaultAnimationDriver());
            }
            return this.__AnimationDriver_24;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_DomRootRenderer_25", {
        get: function () {
            if ((this.__DomRootRenderer_25 == null)) {
                (this.__DomRootRenderer_25 = new import17.DomRootRenderer_(this._DOCUMENT_19, this._EventManager_22, this._DomSharedStylesHost_23, this._AnimationDriver_24, this._APP_ID_18));
            }
            return this.__DomRootRenderer_25;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_NgProbeToken_26", {
        get: function () {
            if ((this.__NgProbeToken_26 == null)) {
                (this.__NgProbeToken_26 = [import7.routerNgProbeToken()]);
            }
            return this.__NgProbeToken_26;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_RootRenderer_27", {
        get: function () {
            if ((this.__RootRenderer_27 == null)) {
                (this.__RootRenderer_27 = import54._createConditionalRootRenderer(this._DomRootRenderer_25, this.parent.get(import54.NgProbeToken, null), this._NgProbeToken_26));
            }
            return this.__RootRenderer_27;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_DomSanitizer_28", {
        get: function () {
            if ((this.__DomSanitizer_28 == null)) {
                (this.__DomSanitizer_28 = new import18.DomSanitizerImpl());
            }
            return this.__DomSanitizer_28;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_Sanitizer_29", {
        get: function () {
            if ((this.__Sanitizer_29 == null)) {
                (this.__Sanitizer_29 = this._DomSanitizer_28);
            }
            return this.__Sanitizer_29;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_AnimationQueue_30", {
        get: function () {
            if ((this.__AnimationQueue_30 == null)) {
                (this.__AnimationQueue_30 = new import19.AnimationQueue(this.parent.get(import53.NgZone)));
            }
            return this.__AnimationQueue_30;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_ViewUtils_31", {
        get: function () {
            if ((this.__ViewUtils_31 == null)) {
                (this.__ViewUtils_31 = new import20.ViewUtils(this._RootRenderer_27, this._Sanitizer_29, this._AnimationQueue_30));
            }
            return this.__ViewUtils_31;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_IterableDiffers_32", {
        get: function () {
            if ((this.__IterableDiffers_32 == null)) {
                (this.__IterableDiffers_32 = import3._iterableDiffersFactory());
            }
            return this.__IterableDiffers_32;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_KeyValueDiffers_33", {
        get: function () {
            if ((this.__KeyValueDiffers_33 == null)) {
                (this.__KeyValueDiffers_33 = import3._keyValueDiffersFactory());
            }
            return this.__KeyValueDiffers_33;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_SharedStylesHost_34", {
        get: function () {
            if ((this.__SharedStylesHost_34 == null)) {
                (this.__SharedStylesHost_34 = this._DomSharedStylesHost_23);
            }
            return this.__SharedStylesHost_34;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_Title_35", {
        get: function () {
            if ((this.__Title_35 == null)) {
                (this.__Title_35 = new import21.Title());
            }
            return this.__Title_35;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_RadioControlRegistry_36", {
        get: function () {
            if ((this.__RadioControlRegistry_36 == null)) {
                (this.__RadioControlRegistry_36 = new import22.RadioControlRegistry());
            }
            return this.__RadioControlRegistry_36;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_BrowserXhr_37", {
        get: function () {
            if ((this.__BrowserXhr_37 == null)) {
                (this.__BrowserXhr_37 = new import23.BrowserXhr());
            }
            return this.__BrowserXhr_37;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_ResponseOptions_38", {
        get: function () {
            if ((this.__ResponseOptions_38 == null)) {
                (this.__ResponseOptions_38 = new import24.BaseResponseOptions());
            }
            return this.__ResponseOptions_38;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_XSRFStrategy_39", {
        get: function () {
            if ((this.__XSRFStrategy_39 == null)) {
                (this.__XSRFStrategy_39 = import8._createDefaultCookieXSRFStrategy());
            }
            return this.__XSRFStrategy_39;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_XHRBackend_40", {
        get: function () {
            if ((this.__XHRBackend_40 == null)) {
                (this.__XHRBackend_40 = new import25.XHRBackend(this._BrowserXhr_37, this._ResponseOptions_38, this._XSRFStrategy_39));
            }
            return this.__XHRBackend_40;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_RequestOptions_41", {
        get: function () {
            if ((this.__RequestOptions_41 == null)) {
                (this.__RequestOptions_41 = new import26.BaseRequestOptions());
            }
            return this.__RequestOptions_41;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_Http_42", {
        get: function () {
            if ((this.__Http_42 == null)) {
                (this.__Http_42 = import8.httpFactory(this._XHRBackend_40, this._RequestOptions_41));
            }
            return this.__Http_42;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_BrowserJsonp_43", {
        get: function () {
            if ((this.__BrowserJsonp_43 == null)) {
                (this.__BrowserJsonp_43 = new import27.BrowserJsonp());
            }
            return this.__BrowserJsonp_43;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_JSONPBackend_44", {
        get: function () {
            if ((this.__JSONPBackend_44 == null)) {
                (this.__JSONPBackend_44 = new import28.JSONPBackend_(this._BrowserJsonp_43, this._ResponseOptions_38));
            }
            return this.__JSONPBackend_44;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_Jsonp_45", {
        get: function () {
            if ((this.__Jsonp_45 == null)) {
                (this.__Jsonp_45 = import8.jsonpFactory(this._JSONPBackend_44, this._RequestOptions_41));
            }
            return this.__Jsonp_45;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_ROUTER_CONFIGURATION_46", {
        get: function () {
            if ((this.__ROUTER_CONFIGURATION_46 == null)) {
                (this.__ROUTER_CONFIGURATION_46 = {});
            }
            return this.__ROUTER_CONFIGURATION_46;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_LocationStrategy_47", {
        get: function () {
            if ((this.__LocationStrategy_47 == null)) {
                (this.__LocationStrategy_47 = import7.provideLocationStrategy(this.parent.get(import55.PlatformLocation), this.parent.get(import56.APP_BASE_HREF, null), this._ROUTER_CONFIGURATION_46));
            }
            return this.__LocationStrategy_47;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_Location_48", {
        get: function () {
            if ((this.__Location_48 == null)) {
                (this.__Location_48 = new import29.Location(this._LocationStrategy_47));
            }
            return this.__Location_48;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_UrlSerializer_49", {
        get: function () {
            if ((this.__UrlSerializer_49 == null)) {
                (this.__UrlSerializer_49 = new import30.DefaultUrlSerializer());
            }
            return this.__UrlSerializer_49;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_RouterOutletMap_50", {
        get: function () {
            if ((this.__RouterOutletMap_50 == null)) {
                (this.__RouterOutletMap_50 = new import31.RouterOutletMap());
            }
            return this.__RouterOutletMap_50;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_NgModuleFactoryLoader_51", {
        get: function () {
            if ((this.__NgModuleFactoryLoader_51 == null)) {
                (this.__NgModuleFactoryLoader_51 = new import32.SystemJsNgModuleLoader(this._Compiler_17, this.parent.get(import32.SystemJsNgModuleLoaderConfig, null)));
            }
            return this.__NgModuleFactoryLoader_51;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_ROUTES_52", {
        get: function () {
            if ((this.__ROUTES_52 == null)) {
                (this.__ROUTES_52 = [[
                        {
                            path: '',
                            component: import57.HomeComponent
                        },
                        {
                            path: 'uihome',
                            component: import57.HomeComponent
                        },
                        {
                            path: 'usermanagement',
                            component: import58.UserManagementComponent,
                            canActivate: [import38.HasAdminRoleAuthenticationGuard],
                            canLoad: [import39.HasAdminRoleCanLoadGuard]
                        },
                        {
                            path: 'Forbidden',
                            component: import59.ForbiddenComponent
                        },
                        {
                            path: 'Unauthorized',
                            component: import60.UnauthorizedComponent
                        },
                        {
                            path: 'dataeventrecords',
                            component: import61.DataEventRecordsListComponent
                        },
                        {
                            path: 'dataeventrecords/create',
                            component: import62.DataEventRecordsCreateComponent
                        },
                        {
                            path: 'dataeventrecords/edit/:id',
                            component: import63.DataEventRecordsEditComponent
                        },
                        {
                            path: 'dataeventrecords/list',
                            component: import61.DataEventRecordsListComponent
                        }
                    ]
                ]);
            }
            return this.__ROUTES_52;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_Router_53", {
        get: function () {
            if ((this.__Router_53 == null)) {
                (this.__Router_53 = import7.setupRouter(this._ApplicationRef_16, this._UrlSerializer_49, this._RouterOutletMap_50, this._Location_48, this, this._NgModuleFactoryLoader_51, this._Compiler_17, this._ROUTES_52, this._ROUTER_CONFIGURATION_46, this.parent.get(import64.UrlHandlingStrategy, null), this.parent.get(import65.RouteReuseStrategy, null)));
            }
            return this.__Router_53;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_ActivatedRoute_54", {
        get: function () {
            if ((this.__ActivatedRoute_54 == null)) {
                (this.__ActivatedRoute_54 = import7.rootRoute(this._Router_53));
            }
            return this.__ActivatedRoute_54;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_PreloadAllModules_58", {
        get: function () {
            if ((this.__PreloadAllModules_58 == null)) {
                (this.__PreloadAllModules_58 = new import33.PreloadAllModules());
            }
            return this.__PreloadAllModules_58;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_ROUTER_INITIALIZER_59", {
        get: function () {
            if ((this.__ROUTER_INITIALIZER_59 == null)) {
                (this.__ROUTER_INITIALIZER_59 = import7.initialRouterNavigation(this._Router_53, this._ApplicationRef_16, this._RouterPreloader_57, this._ROUTER_CONFIGURATION_46));
            }
            return this.__ROUTER_INITIALIZER_59;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_APP_BOOTSTRAP_LISTENER_60", {
        get: function () {
            if ((this.__APP_BOOTSTRAP_LISTENER_60 == null)) {
                (this.__APP_BOOTSTRAP_LISTENER_60 = [this._ROUTER_INITIALIZER_59]);
            }
            return this.__APP_BOOTSTRAP_LISTENER_60;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_Configuration_61", {
        get: function () {
            if ((this.__Configuration_61 == null)) {
                (this.__Configuration_61 = new import34.Configuration());
            }
            return this.__Configuration_61;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_SecurityService_62", {
        get: function () {
            if ((this.__SecurityService_62 == null)) {
                (this.__SecurityService_62 = new import35.SecurityService(this._Http_42, this._Configuration_61, this._Router_53));
            }
            return this.__SecurityService_62;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_DataEventRecordsService_63", {
        get: function () {
            if ((this.__DataEventRecordsService_63 == null)) {
                (this.__DataEventRecordsService_63 = new import36.DataEventRecordsService(this._Http_42, this._Configuration_61, this._SecurityService_62));
            }
            return this.__DataEventRecordsService_63;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_UserManagementService_64", {
        get: function () {
            if ((this.__UserManagementService_64 == null)) {
                (this.__UserManagementService_64 = new import37.UserManagementService(this._Http_42, this._Configuration_61, this._SecurityService_62));
            }
            return this.__UserManagementService_64;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_HasAdminRoleAuthenticationGuard_65", {
        get: function () {
            if ((this.__HasAdminRoleAuthenticationGuard_65 == null)) {
                (this.__HasAdminRoleAuthenticationGuard_65 = new import38.HasAdminRoleAuthenticationGuard(this._Router_53, this._SecurityService_62));
            }
            return this.__HasAdminRoleAuthenticationGuard_65;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_HasAdminRoleCanLoadGuard_66", {
        get: function () {
            if ((this.__HasAdminRoleCanLoadGuard_66 == null)) {
                (this.__HasAdminRoleCanLoadGuard_66 = new import39.HasAdminRoleCanLoadGuard(this._SecurityService_62));
            }
            return this.__HasAdminRoleCanLoadGuard_66;
        },
        enumerable: true,
        configurable: true
    });
    AppModuleInjector.prototype.createInternal = function () {
        this._CommonModule_0 = new import2.CommonModule();
        this._ApplicationModule_1 = new import3.ApplicationModule();
        this._BrowserModule_2 = new import4.BrowserModule(this.parent.get(import4.BrowserModule, null));
        this._InternalFormsSharedModule_3 = new import5.InternalFormsSharedModule();
        this._FormsModule_4 = new import6.FormsModule();
        this._ROUTER_FORROOT_GUARD_5 = import7.provideForRootGuard(this.parent.get(import66.Router, null));
        this._RouterModule_6 = new import7.RouterModule(this._ROUTER_FORROOT_GUARD_5);
        this._HttpModule_7 = new import8.HttpModule();
        this._JsonpModule_8 = new import8.JsonpModule();
        this._AppModule_9 = new import1.AppModule();
        this._ErrorHandler_12 = import4.errorHandler();
        this._ApplicationInitStatus_13 = new import10.ApplicationInitStatus(this.parent.get(import10.APP_INITIALIZER, null));
        this._Testability_14 = new import11.Testability(this.parent.get(import53.NgZone));
        this._ApplicationRef__15 = new import12.ApplicationRef_(this.parent.get(import53.NgZone), this.parent.get(import67.Console), this, this._ErrorHandler_12, this, this._ApplicationInitStatus_13, this.parent.get(import11.TestabilityRegistry, null), this._Testability_14);
        this._NoPreloading_55 = new import33.NoPreloading();
        this._PreloadingStrategy_56 = this._NoPreloading_55;
        this._RouterPreloader_57 = new import33.RouterPreloader(this._Router_53, this._NgModuleFactoryLoader_51, this._Compiler_17, this, this._PreloadingStrategy_56);
        return this._AppModule_9;
    };
    AppModuleInjector.prototype.getInternal = function (token, notFoundResult) {
        if ((token === import2.CommonModule)) {
            return this._CommonModule_0;
        }
        if ((token === import3.ApplicationModule)) {
            return this._ApplicationModule_1;
        }
        if ((token === import4.BrowserModule)) {
            return this._BrowserModule_2;
        }
        if ((token === import5.InternalFormsSharedModule)) {
            return this._InternalFormsSharedModule_3;
        }
        if ((token === import6.FormsModule)) {
            return this._FormsModule_4;
        }
        if ((token === import7.ROUTER_FORROOT_GUARD)) {
            return this._ROUTER_FORROOT_GUARD_5;
        }
        if ((token === import7.RouterModule)) {
            return this._RouterModule_6;
        }
        if ((token === import8.HttpModule)) {
            return this._HttpModule_7;
        }
        if ((token === import8.JsonpModule)) {
            return this._JsonpModule_8;
        }
        if ((token === import1.AppModule)) {
            return this._AppModule_9;
        }
        if ((token === import49.LOCALE_ID)) {
            return this._LOCALE_ID_10;
        }
        if ((token === import9.NgLocalization)) {
            return this._NgLocalization_11;
        }
        if ((token === import68.ErrorHandler)) {
            return this._ErrorHandler_12;
        }
        if ((token === import10.ApplicationInitStatus)) {
            return this._ApplicationInitStatus_13;
        }
        if ((token === import11.Testability)) {
            return this._Testability_14;
        }
        if ((token === import12.ApplicationRef_)) {
            return this._ApplicationRef__15;
        }
        if ((token === import12.ApplicationRef)) {
            return this._ApplicationRef_16;
        }
        if ((token === import13.Compiler)) {
            return this._Compiler_17;
        }
        if ((token === import50.APP_ID)) {
            return this._APP_ID_18;
        }
        if ((token === import69.DOCUMENT)) {
            return this._DOCUMENT_19;
        }
        if ((token === import14.HAMMER_GESTURE_CONFIG)) {
            return this._HAMMER_GESTURE_CONFIG_20;
        }
        if ((token === import15.EVENT_MANAGER_PLUGINS)) {
            return this._EVENT_MANAGER_PLUGINS_21;
        }
        if ((token === import15.EventManager)) {
            return this._EventManager_22;
        }
        if ((token === import16.DomSharedStylesHost)) {
            return this._DomSharedStylesHost_23;
        }
        if ((token === import70.AnimationDriver)) {
            return this._AnimationDriver_24;
        }
        if ((token === import17.DomRootRenderer)) {
            return this._DomRootRenderer_25;
        }
        if ((token === import12.NgProbeToken)) {
            return this._NgProbeToken_26;
        }
        if ((token === import71.RootRenderer)) {
            return this._RootRenderer_27;
        }
        if ((token === import18.DomSanitizer)) {
            return this._DomSanitizer_28;
        }
        if ((token === import72.Sanitizer)) {
            return this._Sanitizer_29;
        }
        if ((token === import19.AnimationQueue)) {
            return this._AnimationQueue_30;
        }
        if ((token === import20.ViewUtils)) {
            return this._ViewUtils_31;
        }
        if ((token === import73.IterableDiffers)) {
            return this._IterableDiffers_32;
        }
        if ((token === import74.KeyValueDiffers)) {
            return this._KeyValueDiffers_33;
        }
        if ((token === import16.SharedStylesHost)) {
            return this._SharedStylesHost_34;
        }
        if ((token === import21.Title)) {
            return this._Title_35;
        }
        if ((token === import22.RadioControlRegistry)) {
            return this._RadioControlRegistry_36;
        }
        if ((token === import23.BrowserXhr)) {
            return this._BrowserXhr_37;
        }
        if ((token === import24.ResponseOptions)) {
            return this._ResponseOptions_38;
        }
        if ((token === import75.XSRFStrategy)) {
            return this._XSRFStrategy_39;
        }
        if ((token === import25.XHRBackend)) {
            return this._XHRBackend_40;
        }
        if ((token === import26.RequestOptions)) {
            return this._RequestOptions_41;
        }
        if ((token === import76.Http)) {
            return this._Http_42;
        }
        if ((token === import27.BrowserJsonp)) {
            return this._BrowserJsonp_43;
        }
        if ((token === import28.JSONPBackend)) {
            return this._JSONPBackend_44;
        }
        if ((token === import76.Jsonp)) {
            return this._Jsonp_45;
        }
        if ((token === import7.ROUTER_CONFIGURATION)) {
            return this._ROUTER_CONFIGURATION_46;
        }
        if ((token === import56.LocationStrategy)) {
            return this._LocationStrategy_47;
        }
        if ((token === import29.Location)) {
            return this._Location_48;
        }
        if ((token === import30.UrlSerializer)) {
            return this._UrlSerializer_49;
        }
        if ((token === import31.RouterOutletMap)) {
            return this._RouterOutletMap_50;
        }
        if ((token === import77.NgModuleFactoryLoader)) {
            return this._NgModuleFactoryLoader_51;
        }
        if ((token === import78.ROUTES)) {
            return this._ROUTES_52;
        }
        if ((token === import66.Router)) {
            return this._Router_53;
        }
        if ((token === import79.ActivatedRoute)) {
            return this._ActivatedRoute_54;
        }
        if ((token === import33.NoPreloading)) {
            return this._NoPreloading_55;
        }
        if ((token === import33.PreloadingStrategy)) {
            return this._PreloadingStrategy_56;
        }
        if ((token === import33.RouterPreloader)) {
            return this._RouterPreloader_57;
        }
        if ((token === import33.PreloadAllModules)) {
            return this._PreloadAllModules_58;
        }
        if ((token === import7.ROUTER_INITIALIZER)) {
            return this._ROUTER_INITIALIZER_59;
        }
        if ((token === import50.APP_BOOTSTRAP_LISTENER)) {
            return this._APP_BOOTSTRAP_LISTENER_60;
        }
        if ((token === import34.Configuration)) {
            return this._Configuration_61;
        }
        if ((token === import35.SecurityService)) {
            return this._SecurityService_62;
        }
        if ((token === import36.DataEventRecordsService)) {
            return this._DataEventRecordsService_63;
        }
        if ((token === import37.UserManagementService)) {
            return this._UserManagementService_64;
        }
        if ((token === import38.HasAdminRoleAuthenticationGuard)) {
            return this._HasAdminRoleAuthenticationGuard_65;
        }
        if ((token === import39.HasAdminRoleCanLoadGuard)) {
            return this._HasAdminRoleCanLoadGuard_66;
        }
        return notFoundResult;
    };
    AppModuleInjector.prototype.destroyInternal = function () {
        this._ApplicationRef__15.ngOnDestroy();
        this._RouterPreloader_57.ngOnDestroy();
    };
    return AppModuleInjector;
}(import0.NgModuleInjector));
exports.AppModuleNgFactory = new import0.NgModuleFactory(AppModuleInjector, import1.AppModule);
