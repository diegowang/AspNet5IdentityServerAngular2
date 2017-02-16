"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var import0 = require('../../../angular2App/app/app.component');
var import1 = require('@angular/core/src/linker/view');
var import3 = require('@angular/core/src/linker/view_utils');
var import4 = require('@angular/core/src/metadata/view');
var import5 = require('@angular/core/src/linker/view_type');
var import6 = require('@angular/core/src/change_detection/constants');
var import7 = require('@angular/core/src/linker/component_factory');
var import8 = require('../../../angular2App/app/services/SecurityService');
var import9 = require('../../node_modules/@angular/router/src/directives/router_link.ngfactory');
var import10 = require('@angular/core/src/linker/view_container');
var import11 = require('@angular/router/src/router');
var import12 = require('@angular/router/src/router_state');
var import13 = require('@angular/common/src/location/location_strategy');
var import14 = require('@angular/router/src/directives/router_link');
var import15 = require('../../node_modules/@angular/common/src/directives/ng_if.ngfactory');
var import16 = require('../../node_modules/@angular/router/src/directives/router_outlet.ngfactory');
var import17 = require('@angular/core/src/linker/template_ref');
var import18 = require('@angular/router/src/router_outlet_map');
var import19 = require('@angular/core/src/linker/component_factory_resolver');
var import20 = require('@angular/common/src/directives/ng_if');
var import21 = require('@angular/router/src/directives/router_outlet');
var Wrapper_AppComponent = (function () {
    function Wrapper_AppComponent(p0) {
        this._changed = false;
        this.context = new import0.AppComponent(p0);
    }
    Wrapper_AppComponent.prototype.ngOnDetach = function (view, componentView, el) {
    };
    Wrapper_AppComponent.prototype.ngOnDestroy = function () {
    };
    Wrapper_AppComponent.prototype.ngDoCheck = function (view, el, throwOnChange) {
        var changed = this._changed;
        this._changed = false;
        if (!throwOnChange) {
            if ((view.numberOfChecks === 0)) {
                this.context.ngOnInit();
            }
        }
        return changed;
    };
    Wrapper_AppComponent.prototype.checkHost = function (view, componentView, el, throwOnChange) {
    };
    Wrapper_AppComponent.prototype.handleEvent = function (eventName, $event) {
        var result = true;
        return result;
    };
    Wrapper_AppComponent.prototype.subscribe = function (view, _eventHandler) {
        this._eventHandler = _eventHandler;
    };
    return Wrapper_AppComponent;
}());
exports.Wrapper_AppComponent = Wrapper_AppComponent;
var renderType_AppComponent_Host = import3.createRenderComponentType('', 0, import4.ViewEncapsulation.None, [], {});
var View_AppComponent_Host0 = (function (_super) {
    __extends(View_AppComponent_Host0, _super);
    function View_AppComponent_Host0(viewUtils, parentView, parentIndex, parentElement) {
        _super.call(this, View_AppComponent_Host0, renderType_AppComponent_Host, import5.ViewType.HOST, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways);
    }
    View_AppComponent_Host0.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.selectOrCreateRenderHostElement(this.renderer, 'my-app', import3.EMPTY_INLINE_ARRAY, rootSelector, null);
        this.compView_0 = new View_AppComponent0(this.viewUtils, this, 0, this._el_0);
        this._AppComponent_0_3 = new Wrapper_AppComponent(this.injectorGet(import8.SecurityService, this.parentIndex));
        this.compView_0.create(this._AppComponent_0_3.context);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [this._el_0]), null);
        return new import7.ComponentRef_(0, this, this._el_0, this._AppComponent_0_3.context);
    };
    View_AppComponent_Host0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import0.AppComponent) && (0 === requestNodeIndex))) {
            return this._AppComponent_0_3.context;
        }
        return notFoundResult;
    };
    View_AppComponent_Host0.prototype.detectChangesInternal = function (throwOnChange) {
        this._AppComponent_0_3.ngDoCheck(this, this._el_0, throwOnChange);
        this.compView_0.internalDetectChanges(throwOnChange);
    };
    View_AppComponent_Host0.prototype.destroyInternal = function () {
        this.compView_0.destroy();
    };
    View_AppComponent_Host0.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    return View_AppComponent_Host0;
}(import1.AppView));
exports.AppComponentNgFactory = new import7.ComponentFactory('my-app', View_AppComponent_Host0, import0.AppComponent);
var styles_AppComponent = [];
var View_AppComponent1 = (function (_super) {
    __extends(View_AppComponent1, _super);
    function View_AppComponent1(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        _super.call(this, View_AppComponent1, renderType_AppComponent, import5.ViewType.EMBEDDED, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways, declaredViewContainer);
        this._arr_3 = import3.pureProxy1(function (p0) {
            return [p0];
        });
    }
    View_AppComponent1.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.createRenderElement(this.renderer, null, 'a', import3.EMPTY_INLINE_ARRAY, null);
        this._RouterLinkWithHref_0_3 = new import9.Wrapper_RouterLinkWithHref(this.parentView.parentView.injectorGet(import11.Router, this.parentView.parentIndex), this.parentView.parentView.injectorGet(import12.ActivatedRoute, this.parentView.parentIndex), this.parentView.parentView.injectorGet(import13.LocationStrategy, this.parentView.parentIndex));
        this._text_1 = this.renderer.createText(this._el_0, 'dataEventRecords', null);
        var disposable_0 = import3.subscribeToRenderElement(this, this._el_0, new import3.InlineArray2(2, 'click', null), this.eventHandler(this.handleEvent_0));
        this.init(this._el_0, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1
        ]), [disposable_0]);
        return null;
    };
    View_AppComponent1.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import14.RouterLinkWithHref) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 1)))) {
            return this._RouterLinkWithHref_0_3.context;
        }
        return notFoundResult;
    };
    View_AppComponent1.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_0_0_0 = this._arr_3('/dataeventrecords/list');
        this._RouterLinkWithHref_0_3.check_routerLink(currVal_0_0_0, throwOnChange, false);
        this._RouterLinkWithHref_0_3.ngDoCheck(this, this._el_0, throwOnChange);
        this._RouterLinkWithHref_0_3.checkHost(this, this, this._el_0, throwOnChange);
    };
    View_AppComponent1.prototype.destroyInternal = function () {
        this._RouterLinkWithHref_0_3.ngOnDestroy();
    };
    View_AppComponent1.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    View_AppComponent1.prototype.handleEvent_0 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        result = (this._RouterLinkWithHref_0_3.handleEvent(eventName, $event) && result);
        return result;
    };
    return View_AppComponent1;
}(import1.AppView));
var View_AppComponent2 = (function (_super) {
    __extends(View_AppComponent2, _super);
    function View_AppComponent2(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        _super.call(this, View_AppComponent2, renderType_AppComponent, import5.ViewType.EMBEDDED, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways, declaredViewContainer);
        this._arr_3 = import3.pureProxy1(function (p0) {
            return [p0];
        });
    }
    View_AppComponent2.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.createRenderElement(this.renderer, null, 'a', import3.EMPTY_INLINE_ARRAY, null);
        this._RouterLinkWithHref_0_3 = new import9.Wrapper_RouterLinkWithHref(this.parentView.parentView.injectorGet(import11.Router, this.parentView.parentIndex), this.parentView.parentView.injectorGet(import12.ActivatedRoute, this.parentView.parentIndex), this.parentView.parentView.injectorGet(import13.LocationStrategy, this.parentView.parentIndex));
        this._text_1 = this.renderer.createText(this._el_0, 'create dataEventRecord', null);
        var disposable_0 = import3.subscribeToRenderElement(this, this._el_0, new import3.InlineArray2(2, 'click', null), this.eventHandler(this.handleEvent_0));
        this.init(this._el_0, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1
        ]), [disposable_0]);
        return null;
    };
    View_AppComponent2.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import14.RouterLinkWithHref) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 1)))) {
            return this._RouterLinkWithHref_0_3.context;
        }
        return notFoundResult;
    };
    View_AppComponent2.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_0_0_0 = this._arr_3('/dataeventrecords/create');
        this._RouterLinkWithHref_0_3.check_routerLink(currVal_0_0_0, throwOnChange, false);
        this._RouterLinkWithHref_0_3.ngDoCheck(this, this._el_0, throwOnChange);
        this._RouterLinkWithHref_0_3.checkHost(this, this, this._el_0, throwOnChange);
    };
    View_AppComponent2.prototype.destroyInternal = function () {
        this._RouterLinkWithHref_0_3.ngOnDestroy();
    };
    View_AppComponent2.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    View_AppComponent2.prototype.handleEvent_0 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        result = (this._RouterLinkWithHref_0_3.handleEvent(eventName, $event) && result);
        return result;
    };
    return View_AppComponent2;
}(import1.AppView));
var View_AppComponent3 = (function (_super) {
    __extends(View_AppComponent3, _super);
    function View_AppComponent3(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        _super.call(this, View_AppComponent3, renderType_AppComponent, import5.ViewType.EMBEDDED, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways, declaredViewContainer);
        this._arr_3 = import3.pureProxy1(function (p0) {
            return [p0];
        });
    }
    View_AppComponent3.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.createRenderElement(this.renderer, null, 'a', import3.EMPTY_INLINE_ARRAY, null);
        this._RouterLinkWithHref_0_3 = new import9.Wrapper_RouterLinkWithHref(this.parentView.parentView.injectorGet(import11.Router, this.parentView.parentIndex), this.parentView.parentView.injectorGet(import12.ActivatedRoute, this.parentView.parentIndex), this.parentView.parentView.injectorGet(import13.LocationStrategy, this.parentView.parentIndex));
        this._text_1 = this.renderer.createText(this._el_0, 'user-management', null);
        var disposable_0 = import3.subscribeToRenderElement(this, this._el_0, new import3.InlineArray2(2, 'click', null), this.eventHandler(this.handleEvent_0));
        this.init(this._el_0, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1
        ]), [disposable_0]);
        return null;
    };
    View_AppComponent3.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import14.RouterLinkWithHref) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 1)))) {
            return this._RouterLinkWithHref_0_3.context;
        }
        return notFoundResult;
    };
    View_AppComponent3.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_0_0_0 = this._arr_3('/usermanagement');
        this._RouterLinkWithHref_0_3.check_routerLink(currVal_0_0_0, throwOnChange, false);
        this._RouterLinkWithHref_0_3.ngDoCheck(this, this._el_0, throwOnChange);
        this._RouterLinkWithHref_0_3.checkHost(this, this, this._el_0, throwOnChange);
    };
    View_AppComponent3.prototype.destroyInternal = function () {
        this._RouterLinkWithHref_0_3.ngOnDestroy();
    };
    View_AppComponent3.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    View_AppComponent3.prototype.handleEvent_0 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        result = (this._RouterLinkWithHref_0_3.handleEvent(eventName, $event) && result);
        return result;
    };
    return View_AppComponent3;
}(import1.AppView));
var View_AppComponent4 = (function (_super) {
    __extends(View_AppComponent4, _super);
    function View_AppComponent4(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        _super.call(this, View_AppComponent4, renderType_AppComponent, import5.ViewType.EMBEDDED, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways, declaredViewContainer);
    }
    View_AppComponent4.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.createRenderElement(this.renderer, null, 'a', new import3.InlineArray2(2, 'class', 'navigationLinkButton'), null);
        this._text_1 = this.renderer.createText(this._el_0, 'Login', null);
        var disposable_0 = import3.subscribeToRenderElement(this, this._el_0, new import3.InlineArray2(2, 'click', null), this.eventHandler(this.handleEvent_0));
        this.init(this._el_0, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1
        ]), [disposable_0]);
        return null;
    };
    View_AppComponent4.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    View_AppComponent4.prototype.handleEvent_0 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        if ((eventName == 'click')) {
            var pd_sub_0 = (this.parentView.context.Login() !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    };
    return View_AppComponent4;
}(import1.AppView));
var View_AppComponent5 = (function (_super) {
    __extends(View_AppComponent5, _super);
    function View_AppComponent5(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        _super.call(this, View_AppComponent5, renderType_AppComponent, import5.ViewType.EMBEDDED, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways, declaredViewContainer);
    }
    View_AppComponent5.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.createRenderElement(this.renderer, null, 'a', new import3.InlineArray2(2, 'class', 'navigationLinkButton'), null);
        this._text_1 = this.renderer.createText(this._el_0, 'Logout', null);
        var disposable_0 = import3.subscribeToRenderElement(this, this._el_0, new import3.InlineArray2(2, 'click', null), this.eventHandler(this.handleEvent_0));
        this.init(this._el_0, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1
        ]), [disposable_0]);
        return null;
    };
    View_AppComponent5.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    View_AppComponent5.prototype.handleEvent_0 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        if ((eventName == 'click')) {
            var pd_sub_0 = (this.parentView.context.Logout() !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    };
    return View_AppComponent5;
}(import1.AppView));
var renderType_AppComponent = import3.createRenderComponentType('', 0, import4.ViewEncapsulation.None, styles_AppComponent, {});
var View_AppComponent0 = (function (_super) {
    __extends(View_AppComponent0, _super);
    function View_AppComponent0(viewUtils, parentView, parentIndex, parentElement) {
        _super.call(this, View_AppComponent0, renderType_AppComponent, import5.ViewType.COMPONENT, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways);
        this._arr_68 = import3.pureProxy1(function (p0) {
            return [p0];
        });
    }
    View_AppComponent0.prototype.createInternal = function (rootSelector) {
        var parentRenderNode = this.renderer.createViewRoot(this.parentElement);
        this._el_0 = import3.createRenderElement(this.renderer, parentRenderNode, 'div', new import3.InlineArray4(4, 'class', 'container', 'style', 'margin-top: 15px;'), null);
        this._text_1 = this.renderer.createText(this._el_0, '\n    ', null);
        this._text_2 = this.renderer.createText(this._el_0, '\n    ', null);
        this._el_3 = import3.createRenderElement(this.renderer, this._el_0, 'nav', new import3.InlineArray2(2, 'class', 'navbar navbar-default'), null);
        this._text_4 = this.renderer.createText(this._el_3, '\n        ', null);
        this._el_5 = import3.createRenderElement(this.renderer, this._el_3, 'div', new import3.InlineArray2(2, 'class', 'container-fluid'), null);
        this._text_6 = this.renderer.createText(this._el_5, '\n            ', null);
        this._el_7 = import3.createRenderElement(this.renderer, this._el_5, 'div', new import3.InlineArray2(2, 'class', 'navbar-header'), null);
        this._text_8 = this.renderer.createText(this._el_7, '\n                ', null);
        this._el_9 = import3.createRenderElement(this.renderer, this._el_7, 'button', new import3.InlineArray16(12, 'aria-controls', 'navbar', 'aria-expanded', 'false', 'class', 'navbar-toggle collapsed', 'data-target', '#navbar', 'data-toggle', 'collapse', 'type', 'button'), null);
        this._text_10 = this.renderer.createText(this._el_9, '\n                    ', null);
        this._el_11 = import3.createRenderElement(this.renderer, this._el_9, 'span', new import3.InlineArray2(2, 'class', 'sr-only'), null);
        this._text_12 = this.renderer.createText(this._el_11, 'Toggle navigation', null);
        this._text_13 = this.renderer.createText(this._el_9, '\n                    ', null);
        this._el_14 = import3.createRenderElement(this.renderer, this._el_9, 'span', new import3.InlineArray2(2, 'class', 'icon-bar'), null);
        this._text_15 = this.renderer.createText(this._el_9, '\n                    ', null);
        this._el_16 = import3.createRenderElement(this.renderer, this._el_9, 'span', new import3.InlineArray2(2, 'class', 'icon-bar'), null);
        this._text_17 = this.renderer.createText(this._el_9, '\n                    ', null);
        this._el_18 = import3.createRenderElement(this.renderer, this._el_9, 'span', new import3.InlineArray2(2, 'class', 'icon-bar'), null);
        this._text_19 = this.renderer.createText(this._el_9, '\n                ', null);
        this._text_20 = this.renderer.createText(this._el_7, '\n                ', null);
        this._el_21 = import3.createRenderElement(this.renderer, this._el_7, 'a', new import3.InlineArray2(2, 'class', 'navbar-brand'), null);
        this._RouterLinkWithHref_21_3 = new import9.Wrapper_RouterLinkWithHref(this.parentView.injectorGet(import11.Router, this.parentIndex), this.parentView.injectorGet(import12.ActivatedRoute, this.parentIndex), this.parentView.injectorGet(import13.LocationStrategy, this.parentIndex));
        this._el_22 = import3.createRenderElement(this.renderer, this._el_21, 'img', new import3.InlineArray8(6, 'height', '40', 'src', 'assets/damienbod.jpg', 'style', 'margin-top:-10px;'), null);
        this._text_23 = this.renderer.createText(this._el_7, '\n            ', null);
        this._text_24 = this.renderer.createText(this._el_5, '\n            ', null);
        this._el_25 = import3.createRenderElement(this.renderer, this._el_5, 'div', new import3.InlineArray4(4, 'class', 'navbar-collapse collapse', 'id', 'navbar'), null);
        this._text_26 = this.renderer.createText(this._el_25, '\n                ', null);
        this._el_27 = import3.createRenderElement(this.renderer, this._el_25, 'ul', new import3.InlineArray2(2, 'class', 'nav navbar-nav'), null);
        this._text_28 = this.renderer.createText(this._el_27, '\n                    ', null);
        this._el_29 = import3.createRenderElement(this.renderer, this._el_27, 'li', import3.EMPTY_INLINE_ARRAY, null);
        this._anchor_30 = this.renderer.createTemplateAnchor(this._el_29, null);
        this._vc_30 = new import10.ViewContainer(30, 29, this, this._anchor_30);
        this._TemplateRef_30_5 = new import17.TemplateRef_(this, 30, this._anchor_30);
        this._NgIf_30_6 = new import15.Wrapper_NgIf(this._vc_30.vcRef, this._TemplateRef_30_5);
        this._text_31 = this.renderer.createText(this._el_27, '\n                    ', null);
        this._el_32 = import3.createRenderElement(this.renderer, this._el_27, 'li', import3.EMPTY_INLINE_ARRAY, null);
        this._anchor_33 = this.renderer.createTemplateAnchor(this._el_32, null);
        this._vc_33 = new import10.ViewContainer(33, 32, this, this._anchor_33);
        this._TemplateRef_33_5 = new import17.TemplateRef_(this, 33, this._anchor_33);
        this._NgIf_33_6 = new import15.Wrapper_NgIf(this._vc_33.vcRef, this._TemplateRef_33_5);
        this._text_34 = this.renderer.createText(this._el_27, '\n                    ', null);
        this._el_35 = import3.createRenderElement(this.renderer, this._el_27, 'li', import3.EMPTY_INLINE_ARRAY, null);
        this._anchor_36 = this.renderer.createTemplateAnchor(this._el_35, null);
        this._vc_36 = new import10.ViewContainer(36, 35, this, this._anchor_36);
        this._TemplateRef_36_5 = new import17.TemplateRef_(this, 36, this._anchor_36);
        this._NgIf_36_6 = new import15.Wrapper_NgIf(this._vc_36.vcRef, this._TemplateRef_36_5);
        this._text_37 = this.renderer.createText(this._el_27, '\n\n                    ', null);
        this._el_38 = import3.createRenderElement(this.renderer, this._el_27, 'li', import3.EMPTY_INLINE_ARRAY, null);
        this._anchor_39 = this.renderer.createTemplateAnchor(this._el_38, null);
        this._vc_39 = new import10.ViewContainer(39, 38, this, this._anchor_39);
        this._TemplateRef_39_5 = new import17.TemplateRef_(this, 39, this._anchor_39);
        this._NgIf_39_6 = new import15.Wrapper_NgIf(this._vc_39.vcRef, this._TemplateRef_39_5);
        this._text_40 = this.renderer.createText(this._el_27, '\n                    ', null);
        this._el_41 = import3.createRenderElement(this.renderer, this._el_27, 'li', import3.EMPTY_INLINE_ARRAY, null);
        this._anchor_42 = this.renderer.createTemplateAnchor(this._el_41, null);
        this._vc_42 = new import10.ViewContainer(42, 41, this, this._anchor_42);
        this._TemplateRef_42_5 = new import17.TemplateRef_(this, 42, this._anchor_42);
        this._NgIf_42_6 = new import15.Wrapper_NgIf(this._vc_42.vcRef, this._TemplateRef_42_5);
        this._text_43 = this.renderer.createText(this._el_27, '\n\n                ', null);
        this._text_44 = this.renderer.createText(this._el_25, '\n            ', null);
        this._text_45 = this.renderer.createText(this._el_5, '\n        ', null);
        this._text_46 = this.renderer.createText(this._el_3, '\n    ', null);
        this._text_47 = this.renderer.createText(this._el_0, '\n\n    ', null);
        this._el_48 = import3.createRenderElement(this.renderer, this._el_0, 'router-outlet', import3.EMPTY_INLINE_ARRAY, null);
        this._vc_48 = new import10.ViewContainer(48, 0, this, this._el_48);
        this._RouterOutlet_48_5 = new import16.Wrapper_RouterOutlet(this.parentView.injectorGet(import18.RouterOutletMap, this.parentIndex), this._vc_48.vcRef, this.parentView.injectorGet(import19.ComponentFactoryResolver, this.parentIndex), null);
        this._text_49 = this.renderer.createText(this._el_0, '\n\n', null);
        var disposable_0 = import3.subscribeToRenderElement(this, this._el_21, new import3.InlineArray2(2, 'click', null), this.eventHandler(this.handleEvent_21));
        this.init(null, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1,
            this._text_2,
            this._el_3,
            this._text_4,
            this._el_5,
            this._text_6,
            this._el_7,
            this._text_8,
            this._el_9,
            this._text_10,
            this._el_11,
            this._text_12,
            this._text_13,
            this._el_14,
            this._text_15,
            this._el_16,
            this._text_17,
            this._el_18,
            this._text_19,
            this._text_20,
            this._el_21,
            this._el_22,
            this._text_23,
            this._text_24,
            this._el_25,
            this._text_26,
            this._el_27,
            this._text_28,
            this._el_29,
            this._anchor_30,
            this._text_31,
            this._el_32,
            this._anchor_33,
            this._text_34,
            this._el_35,
            this._anchor_36,
            this._text_37,
            this._el_38,
            this._anchor_39,
            this._text_40,
            this._el_41,
            this._anchor_42,
            this._text_43,
            this._text_44,
            this._text_45,
            this._text_46,
            this._text_47,
            this._el_48,
            this._text_49
        ]), [disposable_0]);
        return null;
    };
    View_AppComponent0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import14.RouterLinkWithHref) && ((21 <= requestNodeIndex) && (requestNodeIndex <= 22)))) {
            return this._RouterLinkWithHref_21_3.context;
        }
        if (((token === import17.TemplateRef) && (30 === requestNodeIndex))) {
            return this._TemplateRef_30_5;
        }
        if (((token === import20.NgIf) && (30 === requestNodeIndex))) {
            return this._NgIf_30_6.context;
        }
        if (((token === import17.TemplateRef) && (33 === requestNodeIndex))) {
            return this._TemplateRef_33_5;
        }
        if (((token === import20.NgIf) && (33 === requestNodeIndex))) {
            return this._NgIf_33_6.context;
        }
        if (((token === import17.TemplateRef) && (36 === requestNodeIndex))) {
            return this._TemplateRef_36_5;
        }
        if (((token === import20.NgIf) && (36 === requestNodeIndex))) {
            return this._NgIf_36_6.context;
        }
        if (((token === import17.TemplateRef) && (39 === requestNodeIndex))) {
            return this._TemplateRef_39_5;
        }
        if (((token === import20.NgIf) && (39 === requestNodeIndex))) {
            return this._NgIf_39_6.context;
        }
        if (((token === import17.TemplateRef) && (42 === requestNodeIndex))) {
            return this._TemplateRef_42_5;
        }
        if (((token === import20.NgIf) && (42 === requestNodeIndex))) {
            return this._NgIf_42_6.context;
        }
        if (((token === import21.RouterOutlet) && (48 === requestNodeIndex))) {
            return this._RouterOutlet_48_5.context;
        }
        return notFoundResult;
    };
    View_AppComponent0.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_21_0_0 = this._arr_68('/dataeventrecords/list');
        this._RouterLinkWithHref_21_3.check_routerLink(currVal_21_0_0, throwOnChange, false);
        this._RouterLinkWithHref_21_3.ngDoCheck(this, this._el_21, throwOnChange);
        var currVal_30_0_0 = this.context.securityService.IsAuthorized;
        this._NgIf_30_6.check_ngIf(currVal_30_0_0, throwOnChange, false);
        this._NgIf_30_6.ngDoCheck(this, this._anchor_30, throwOnChange);
        var currVal_33_0_0 = (this.context.securityService.IsAuthorized && this.context.securityService.HasAdminRole);
        this._NgIf_33_6.check_ngIf(currVal_33_0_0, throwOnChange, false);
        this._NgIf_33_6.ngDoCheck(this, this._anchor_33, throwOnChange);
        var currVal_36_0_0 = (this.context.securityService.IsAuthorized && this.context.securityService.HasUserAdminRole);
        this._NgIf_36_6.check_ngIf(currVal_36_0_0, throwOnChange, false);
        this._NgIf_36_6.ngDoCheck(this, this._anchor_36, throwOnChange);
        var currVal_39_0_0 = !this.context.securityService.IsAuthorized;
        this._NgIf_39_6.check_ngIf(currVal_39_0_0, throwOnChange, false);
        this._NgIf_39_6.ngDoCheck(this, this._anchor_39, throwOnChange);
        var currVal_42_0_0 = this.context.securityService.IsAuthorized;
        this._NgIf_42_6.check_ngIf(currVal_42_0_0, throwOnChange, false);
        this._NgIf_42_6.ngDoCheck(this, this._anchor_42, throwOnChange);
        this._RouterOutlet_48_5.ngDoCheck(this, this._el_48, throwOnChange);
        this._vc_30.detectChangesInNestedViews(throwOnChange);
        this._vc_33.detectChangesInNestedViews(throwOnChange);
        this._vc_36.detectChangesInNestedViews(throwOnChange);
        this._vc_39.detectChangesInNestedViews(throwOnChange);
        this._vc_42.detectChangesInNestedViews(throwOnChange);
        this._vc_48.detectChangesInNestedViews(throwOnChange);
        this._RouterLinkWithHref_21_3.checkHost(this, this, this._el_21, throwOnChange);
    };
    View_AppComponent0.prototype.destroyInternal = function () {
        this._vc_30.destroyNestedViews();
        this._vc_33.destroyNestedViews();
        this._vc_36.destroyNestedViews();
        this._vc_39.destroyNestedViews();
        this._vc_42.destroyNestedViews();
        this._vc_48.destroyNestedViews();
        this._RouterLinkWithHref_21_3.ngOnDestroy();
        this._RouterOutlet_48_5.ngOnDestroy();
    };
    View_AppComponent0.prototype.createEmbeddedViewInternal = function (nodeIndex) {
        if ((nodeIndex == 30)) {
            return new View_AppComponent1(this.viewUtils, this, 30, this._anchor_30, this._vc_30);
        }
        if ((nodeIndex == 33)) {
            return new View_AppComponent2(this.viewUtils, this, 33, this._anchor_33, this._vc_33);
        }
        if ((nodeIndex == 36)) {
            return new View_AppComponent3(this.viewUtils, this, 36, this._anchor_36, this._vc_36);
        }
        if ((nodeIndex == 39)) {
            return new View_AppComponent4(this.viewUtils, this, 39, this._anchor_39, this._vc_39);
        }
        if ((nodeIndex == 42)) {
            return new View_AppComponent5(this.viewUtils, this, 42, this._anchor_42, this._vc_42);
        }
        return null;
    };
    View_AppComponent0.prototype.handleEvent_21 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        result = (this._RouterLinkWithHref_21_3.handleEvent(eventName, $event) && result);
        return result;
    };
    return View_AppComponent0;
}(import1.AppView));
exports.View_AppComponent0 = View_AppComponent0;
