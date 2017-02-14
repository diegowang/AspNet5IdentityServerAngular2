var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
import * as import0 from '../../../../angular2App/app/user-management/user-management.component';
import * as import1 from '@angular/core/src/linker/view';
import * as import3 from '@angular/core/src/linker/view_utils';
import * as import4 from '@angular/core/src/metadata/view';
import * as import5 from '@angular/core/src/linker/view_type';
import * as import6 from '@angular/core/src/change_detection/constants';
import * as import7 from '@angular/core/src/linker/component_factory';
import * as import8 from '../../../../angular2App/app/user-management/UserManagementService';
import * as import9 from '../../../../angular2App/app/services/SecurityService';
import * as import10 from '@angular/router/src/router';
import * as import11 from '../../../node_modules/@angular/forms/src/directives/checkbox_value_accessor.ngfactory';
import * as import12 from '../../../node_modules/@angular/forms/src/directives/ng_model.ngfactory';
import * as import13 from '../../../node_modules/@angular/forms/src/directives/ng_control_status.ngfactory';
import * as import14 from '@angular/core/src/linker/view_container';
import * as import15 from '@angular/core/src/change_detection/change_detection_util';
import * as import16 from '@angular/core/src/linker/element_ref';
import * as import17 from '@angular/forms/src/directives/checkbox_value_accessor';
import * as import18 from '@angular/forms/src/directives/control_value_accessor';
import * as import19 from '@angular/forms/src/directives/ng_model';
import * as import20 from '@angular/forms/src/directives/ng_control';
import * as import21 from '@angular/forms/src/directives/ng_control_status';
import * as import22 from '../../../node_modules/@angular/common/src/directives/ng_for.ngfactory';
import * as import23 from '@angular/core/src/linker/template_ref';
import * as import24 from '@angular/core/src/change_detection/differs/iterable_differs';
import * as import25 from '@angular/common/src/directives/ng_for';
import * as import26 from '../../../node_modules/@angular/common/src/directives/ng_if.ngfactory';
import * as import27 from '@angular/common/src/directives/ng_if';
export var Wrapper_UserManagementComponent = (function () {
    function Wrapper_UserManagementComponent(p0, p1, p2) {
        this._changed = false;
        this.context = new import0.UserManagementComponent(p0, p1, p2);
    }
    Wrapper_UserManagementComponent.prototype.ngOnDetach = function (view, componentView, el) {
    };
    Wrapper_UserManagementComponent.prototype.ngOnDestroy = function () {
    };
    Wrapper_UserManagementComponent.prototype.ngDoCheck = function (view, el, throwOnChange) {
        var changed = this._changed;
        this._changed = false;
        if (!throwOnChange) {
            if ((view.numberOfChecks === 0)) {
                this.context.ngOnInit();
            }
        }
        return changed;
    };
    Wrapper_UserManagementComponent.prototype.checkHost = function (view, componentView, el, throwOnChange) {
    };
    Wrapper_UserManagementComponent.prototype.handleEvent = function (eventName, $event) {
        var result = true;
        return result;
    };
    Wrapper_UserManagementComponent.prototype.subscribe = function (view, _eventHandler) {
        this._eventHandler = _eventHandler;
    };
    return Wrapper_UserManagementComponent;
}());
var renderType_UserManagementComponent_Host = import3.createRenderComponentType('', 0, import4.ViewEncapsulation.None, [], {});
var View_UserManagementComponent_Host0 = (function (_super) {
    __extends(View_UserManagementComponent_Host0, _super);
    function View_UserManagementComponent_Host0(viewUtils, parentView, parentIndex, parentElement) {
        _super.call(this, View_UserManagementComponent_Host0, renderType_UserManagementComponent_Host, import5.ViewType.HOST, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways);
    }
    View_UserManagementComponent_Host0.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.selectOrCreateRenderHostElement(this.renderer, 'user-management', import3.EMPTY_INLINE_ARRAY, rootSelector, null);
        this.compView_0 = new View_UserManagementComponent0(this.viewUtils, this, 0, this._el_0);
        this._UserManagementComponent_0_3 = new Wrapper_UserManagementComponent(this.injectorGet(import8.UserManagementService, this.parentIndex), this.injectorGet(import9.SecurityService, this.parentIndex), this.injectorGet(import10.Router, this.parentIndex));
        this.compView_0.create(this._UserManagementComponent_0_3.context);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [this._el_0]), null);
        return new import7.ComponentRef_(0, this, this._el_0, this._UserManagementComponent_0_3.context);
    };
    View_UserManagementComponent_Host0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import0.UserManagementComponent) && (0 === requestNodeIndex))) {
            return this._UserManagementComponent_0_3.context;
        }
        return notFoundResult;
    };
    View_UserManagementComponent_Host0.prototype.detectChangesInternal = function (throwOnChange) {
        this._UserManagementComponent_0_3.ngDoCheck(this, this._el_0, throwOnChange);
        this.compView_0.internalDetectChanges(throwOnChange);
    };
    View_UserManagementComponent_Host0.prototype.destroyInternal = function () {
        this.compView_0.destroy();
    };
    View_UserManagementComponent_Host0.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    return View_UserManagementComponent_Host0;
}(import1.AppView));
export var UserManagementComponentNgFactory = new import7.ComponentFactory('user-management', View_UserManagementComponent_Host0, import0.UserManagementComponent);
var styles_UserManagementComponent = [];
var View_UserManagementComponent3 = (function (_super) {
    __extends(View_UserManagementComponent3, _super);
    function View_UserManagementComponent3(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        _super.call(this, View_UserManagementComponent3, renderType_UserManagementComponent, import5.ViewType.EMBEDDED, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways, declaredViewContainer);
        this._expr_31 = import15.UNINITIALIZED;
    }
    View_UserManagementComponent3.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.createRenderElement(this.renderer, null, 'tr', new import3.InlineArray2(2, 'style', 'height:20px;'), null);
        this._text_1 = this.renderer.createText(this._el_0, '\n                        ', null);
        this._el_2 = import3.createRenderElement(this.renderer, this._el_0, 'td', import3.EMPTY_INLINE_ARRAY, null);
        this._text_3 = this.renderer.createText(this._el_2, '', null);
        this._text_4 = this.renderer.createText(this._el_0, '\n                        ', null);
        this._el_5 = import3.createRenderElement(this.renderer, this._el_0, 'td', import3.EMPTY_INLINE_ARRAY, null);
        this._text_6 = this.renderer.createText(this._el_5, '\n                            ', null);
        this._el_7 = import3.createRenderElement(this.renderer, this._el_5, 'input', new import3.InlineArray8(6, 'class', 'form-control', 'style', 'box-shadow:none', 'type', 'checkbox'), null);
        this._CheckboxControlValueAccessor_7_3 = new import11.Wrapper_CheckboxControlValueAccessor(this.renderer, new import16.ElementRef(this._el_7));
        this._NG_VALUE_ACCESSOR_7_4 = [this._CheckboxControlValueAccessor_7_3.context];
        this._NgModel_7_5 = new import12.Wrapper_NgModel(null, null, null, this._NG_VALUE_ACCESSOR_7_4);
        this._NgControl_7_6 = this._NgModel_7_5.context;
        this._NgControlStatus_7_7 = new import13.Wrapper_NgControlStatus(this._NgControl_7_6);
        this._text_8 = this.renderer.createText(this._el_5, '\n                        ', null);
        this._text_9 = this.renderer.createText(this._el_0, '\n                        ', null);
        this._el_10 = import3.createRenderElement(this.renderer, this._el_0, 'td', import3.EMPTY_INLINE_ARRAY, null);
        this._text_11 = this.renderer.createText(this._el_10, '\n                            ', null);
        this._el_12 = import3.createRenderElement(this.renderer, this._el_10, 'input', new import3.InlineArray8(6, 'class', 'form-control', 'style', 'box-shadow:none', 'type', 'checkbox'), null);
        this._CheckboxControlValueAccessor_12_3 = new import11.Wrapper_CheckboxControlValueAccessor(this.renderer, new import16.ElementRef(this._el_12));
        this._NG_VALUE_ACCESSOR_12_4 = [this._CheckboxControlValueAccessor_12_3.context];
        this._NgModel_12_5 = new import12.Wrapper_NgModel(null, null, null, this._NG_VALUE_ACCESSOR_12_4);
        this._NgControl_12_6 = this._NgModel_12_5.context;
        this._NgControlStatus_12_7 = new import13.Wrapper_NgControlStatus(this._NgControl_12_6);
        this._text_13 = this.renderer.createText(this._el_10, '\n                        ', null);
        this._text_14 = this.renderer.createText(this._el_0, '\n                        ', null);
        this._el_15 = import3.createRenderElement(this.renderer, this._el_0, 'td', import3.EMPTY_INLINE_ARRAY, null);
        this._text_16 = this.renderer.createText(this._el_15, '\n                            ', null);
        this._el_17 = import3.createRenderElement(this.renderer, this._el_15, 'button', new import3.InlineArray2(2, 'class', 'form-control'), null);
        this._text_18 = this.renderer.createText(this._el_17, 'Update', null);
        this._text_19 = this.renderer.createText(this._el_15, '\n                        ', null);
        this._text_20 = this.renderer.createText(this._el_0, '\n                    ', null);
        var disposable_0 = import3.subscribeToRenderElement(this, this._el_7, new import3.InlineArray8(6, 'ngModelChange', null, 'change', null, 'blur', null), this.eventHandler(this.handleEvent_7));
        this._NgModel_7_5.subscribe(this, this.eventHandler(this.handleEvent_7), true);
        var disposable_1 = import3.subscribeToRenderElement(this, this._el_12, new import3.InlineArray8(6, 'ngModelChange', null, 'change', null, 'blur', null), this.eventHandler(this.handleEvent_12));
        this._NgModel_12_5.subscribe(this, this.eventHandler(this.handleEvent_12), true);
        var disposable_2 = import3.subscribeToRenderElement(this, this._el_17, new import3.InlineArray2(2, 'click', null), this.eventHandler(this.handleEvent_17));
        this.init(this._el_0, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1,
            this._el_2,
            this._text_3,
            this._text_4,
            this._el_5,
            this._text_6,
            this._el_7,
            this._text_8,
            this._text_9,
            this._el_10,
            this._text_11,
            this._el_12,
            this._text_13,
            this._text_14,
            this._el_15,
            this._text_16,
            this._el_17,
            this._text_18,
            this._text_19,
            this._text_20
        ]), [
            disposable_0,
            disposable_1,
            disposable_2
        ]);
        return null;
    };
    View_UserManagementComponent3.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import17.CheckboxControlValueAccessor) && (7 === requestNodeIndex))) {
            return this._CheckboxControlValueAccessor_7_3.context;
        }
        if (((token === import18.NG_VALUE_ACCESSOR) && (7 === requestNodeIndex))) {
            return this._NG_VALUE_ACCESSOR_7_4;
        }
        if (((token === import19.NgModel) && (7 === requestNodeIndex))) {
            return this._NgModel_7_5.context;
        }
        if (((token === import20.NgControl) && (7 === requestNodeIndex))) {
            return this._NgControl_7_6;
        }
        if (((token === import21.NgControlStatus) && (7 === requestNodeIndex))) {
            return this._NgControlStatus_7_7.context;
        }
        if (((token === import17.CheckboxControlValueAccessor) && (12 === requestNodeIndex))) {
            return this._CheckboxControlValueAccessor_12_3.context;
        }
        if (((token === import18.NG_VALUE_ACCESSOR) && (12 === requestNodeIndex))) {
            return this._NG_VALUE_ACCESSOR_12_4;
        }
        if (((token === import19.NgModel) && (12 === requestNodeIndex))) {
            return this._NgModel_12_5.context;
        }
        if (((token === import20.NgControl) && (12 === requestNodeIndex))) {
            return this._NgControl_12_6;
        }
        if (((token === import21.NgControlStatus) && (12 === requestNodeIndex))) {
            return this._NgControlStatus_12_7.context;
        }
        return notFoundResult;
    };
    View_UserManagementComponent3.prototype.detectChangesInternal = function (throwOnChange) {
        this._CheckboxControlValueAccessor_7_3.ngDoCheck(this, this._el_7, throwOnChange);
        var currVal_7_1_0 = this.context.$implicit.isAdmin;
        this._NgModel_7_5.check_model(currVal_7_1_0, throwOnChange, false);
        this._NgModel_7_5.ngDoCheck(this, this._el_7, throwOnChange);
        this._NgControlStatus_7_7.ngDoCheck(this, this._el_7, throwOnChange);
        this._CheckboxControlValueAccessor_12_3.ngDoCheck(this, this._el_12, throwOnChange);
        var currVal_12_1_0 = this.context.$implicit.isActive;
        this._NgModel_12_5.check_model(currVal_12_1_0, throwOnChange, false);
        this._NgModel_12_5.ngDoCheck(this, this._el_12, throwOnChange);
        this._NgControlStatus_12_7.ngDoCheck(this, this._el_12, throwOnChange);
        var currVal_31 = import3.inlineInterpolate(1, '', this.context.$implicit.name, '');
        if (import3.checkBinding(throwOnChange, this._expr_31, currVal_31)) {
            this.renderer.setText(this._text_3, currVal_31);
            this._expr_31 = currVal_31;
        }
        this._NgControlStatus_7_7.checkHost(this, this, this._el_7, throwOnChange);
        this._NgControlStatus_12_7.checkHost(this, this, this._el_12, throwOnChange);
    };
    View_UserManagementComponent3.prototype.destroyInternal = function () {
        this._NgModel_7_5.ngOnDestroy();
        this._NgModel_12_5.ngOnDestroy();
    };
    View_UserManagementComponent3.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    View_UserManagementComponent3.prototype.handleEvent_7 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        result = (this._CheckboxControlValueAccessor_7_3.handleEvent(eventName, $event) && result);
        if ((eventName == 'ngModelChange')) {
            var pd_sub_0 = ((this.context.$implicit.isAdmin = $event) !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    };
    View_UserManagementComponent3.prototype.handleEvent_12 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        result = (this._CheckboxControlValueAccessor_12_3.handleEvent(eventName, $event) && result);
        if ((eventName == 'ngModelChange')) {
            var pd_sub_0 = ((this.context.$implicit.isActive = $event) !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    };
    View_UserManagementComponent3.prototype.handleEvent_17 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        if ((eventName == 'click')) {
            var pd_sub_0 = (this.parentView.parentView.parentView.context.Update(this.context.$implicit) !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    };
    return View_UserManagementComponent3;
}(import1.AppView));
var View_UserManagementComponent2 = (function (_super) {
    __extends(View_UserManagementComponent2, _super);
    function View_UserManagementComponent2(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        _super.call(this, View_UserManagementComponent2, renderType_UserManagementComponent, import5.ViewType.EMBEDDED, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways, declaredViewContainer);
    }
    View_UserManagementComponent2.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.createRenderElement(this.renderer, null, 'div', new import3.InlineArray2(2, 'class', 'panel-body'), null);
        this._text_1 = this.renderer.createText(this._el_0, '\n            ', null);
        this._el_2 = import3.createRenderElement(this.renderer, this._el_0, 'table', new import3.InlineArray2(2, 'class', 'table'), null);
        this._text_3 = this.renderer.createText(this._el_2, '\n                ', null);
        this._el_4 = import3.createRenderElement(this.renderer, this._el_2, 'thead', import3.EMPTY_INLINE_ARRAY, null);
        this._text_5 = this.renderer.createText(this._el_4, '\n                    ', null);
        this._el_6 = import3.createRenderElement(this.renderer, this._el_4, 'tr', import3.EMPTY_INLINE_ARRAY, null);
        this._text_7 = this.renderer.createText(this._el_6, '\n                        ', null);
        this._el_8 = import3.createRenderElement(this.renderer, this._el_6, 'th', import3.EMPTY_INLINE_ARRAY, null);
        this._text_9 = this.renderer.createText(this._el_8, 'Name', null);
        this._text_10 = this.renderer.createText(this._el_6, '\n                        ', null);
        this._el_11 = import3.createRenderElement(this.renderer, this._el_6, 'th', import3.EMPTY_INLINE_ARRAY, null);
        this._text_12 = this.renderer.createText(this._el_11, 'IsAdmin', null);
        this._text_13 = this.renderer.createText(this._el_6, '\n                        ', null);
        this._el_14 = import3.createRenderElement(this.renderer, this._el_6, 'th', import3.EMPTY_INLINE_ARRAY, null);
        this._text_15 = this.renderer.createText(this._el_14, 'IsActive', null);
        this._text_16 = this.renderer.createText(this._el_6, '\n                        ', null);
        this._el_17 = import3.createRenderElement(this.renderer, this._el_6, 'th', import3.EMPTY_INLINE_ARRAY, null);
        this._text_18 = this.renderer.createText(this._el_6, '\n                    ', null);
        this._text_19 = this.renderer.createText(this._el_4, '\n                ', null);
        this._text_20 = this.renderer.createText(this._el_2, '\n                ', null);
        this._el_21 = import3.createRenderElement(this.renderer, this._el_2, 'tbody', import3.EMPTY_INLINE_ARRAY, null);
        this._text_22 = this.renderer.createText(this._el_21, '\n                    ', null);
        this._anchor_23 = this.renderer.createTemplateAnchor(this._el_21, null);
        this._vc_23 = new import14.ViewContainer(23, 21, this, this._anchor_23);
        this._TemplateRef_23_5 = new import23.TemplateRef_(this, 23, this._anchor_23);
        this._NgFor_23_6 = new import22.Wrapper_NgFor(this._vc_23.vcRef, this._TemplateRef_23_5, this.parentView.parentView.injectorGet(import24.IterableDiffers, this.parentView.parentIndex), this.parentView.parentView.ref);
        this._text_24 = this.renderer.createText(this._el_21, '\n                ', null);
        this._text_25 = this.renderer.createText(this._el_2, '\n            ', null);
        this._text_26 = this.renderer.createText(this._el_0, '\n\n        ', null);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1,
            this._el_2,
            this._text_3,
            this._el_4,
            this._text_5,
            this._el_6,
            this._text_7,
            this._el_8,
            this._text_9,
            this._text_10,
            this._el_11,
            this._text_12,
            this._text_13,
            this._el_14,
            this._text_15,
            this._text_16,
            this._el_17,
            this._text_18,
            this._text_19,
            this._text_20,
            this._el_21,
            this._text_22,
            this._anchor_23,
            this._text_24,
            this._text_25,
            this._text_26
        ]), null);
        return null;
    };
    View_UserManagementComponent2.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import23.TemplateRef) && (23 === requestNodeIndex))) {
            return this._TemplateRef_23_5;
        }
        if (((token === import25.NgFor) && (23 === requestNodeIndex))) {
            return this._NgFor_23_6.context;
        }
        return notFoundResult;
    };
    View_UserManagementComponent2.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_23_0_0 = this.parentView.parentView.context.Users;
        this._NgFor_23_6.check_ngForOf(currVal_23_0_0, throwOnChange, false);
        this._NgFor_23_6.ngDoCheck(this, this._anchor_23, throwOnChange);
        this._vc_23.detectChangesInNestedViews(throwOnChange);
    };
    View_UserManagementComponent2.prototype.destroyInternal = function () {
        this._vc_23.destroyNestedViews();
    };
    View_UserManagementComponent2.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    View_UserManagementComponent2.prototype.createEmbeddedViewInternal = function (nodeIndex) {
        if ((nodeIndex == 23)) {
            return new View_UserManagementComponent3(this.viewUtils, this, 23, this._anchor_23, this._vc_23);
        }
        return null;
    };
    return View_UserManagementComponent2;
}(import1.AppView));
var View_UserManagementComponent1 = (function (_super) {
    __extends(View_UserManagementComponent1, _super);
    function View_UserManagementComponent1(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        _super.call(this, View_UserManagementComponent1, renderType_UserManagementComponent, import5.ViewType.EMBEDDED, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways, declaredViewContainer);
        this._expr_16 = import15.UNINITIALIZED;
    }
    View_UserManagementComponent1.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.createRenderElement(this.renderer, null, 'div', new import3.InlineArray2(2, 'class', 'col-md-12'), null);
        this._text_1 = this.renderer.createText(this._el_0, '\n    ', null);
        this._el_2 = import3.createRenderElement(this.renderer, this._el_0, 'div', new import3.InlineArray2(2, 'class', 'panel panel-default'), null);
        this._text_3 = this.renderer.createText(this._el_2, '\n        ', null);
        this._el_4 = import3.createRenderElement(this.renderer, this._el_2, 'div', new import3.InlineArray2(2, 'class', 'panel-heading'), null);
        this._text_5 = this.renderer.createText(this._el_4, '\n            ', null);
        this._el_6 = import3.createRenderElement(this.renderer, this._el_4, 'h3', new import3.InlineArray2(2, 'class', 'panel-title'), null);
        this._text_7 = this.renderer.createText(this._el_6, '', null);
        this._text_8 = this.renderer.createText(this._el_4, '\n        ', null);
        this._text_9 = this.renderer.createText(this._el_2, '\n        ', null);
        this._anchor_10 = this.renderer.createTemplateAnchor(this._el_2, null);
        this._vc_10 = new import14.ViewContainer(10, 2, this, this._anchor_10);
        this._TemplateRef_10_5 = new import23.TemplateRef_(this, 10, this._anchor_10);
        this._NgIf_10_6 = new import26.Wrapper_NgIf(this._vc_10.vcRef, this._TemplateRef_10_5);
        this._text_11 = this.renderer.createText(this._el_2, '\n    ', null);
        this._text_12 = this.renderer.createText(this._el_0, '\n', null);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1,
            this._el_2,
            this._text_3,
            this._el_4,
            this._text_5,
            this._el_6,
            this._text_7,
            this._text_8,
            this._text_9,
            this._anchor_10,
            this._text_11,
            this._text_12
        ]), null);
        return null;
    };
    View_UserManagementComponent1.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import23.TemplateRef) && (10 === requestNodeIndex))) {
            return this._TemplateRef_10_5;
        }
        if (((token === import27.NgIf) && (10 === requestNodeIndex))) {
            return this._NgIf_10_6.context;
        }
        return notFoundResult;
    };
    View_UserManagementComponent1.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_10_0_0 = this.parentView.context.Users;
        this._NgIf_10_6.check_ngIf(currVal_10_0_0, throwOnChange, false);
        this._NgIf_10_6.ngDoCheck(this, this._anchor_10, throwOnChange);
        this._vc_10.detectChangesInNestedViews(throwOnChange);
        var currVal_16 = import3.inlineInterpolate(1, '', this.parentView.context.message, '');
        if (import3.checkBinding(throwOnChange, this._expr_16, currVal_16)) {
            this.renderer.setText(this._text_7, currVal_16);
            this._expr_16 = currVal_16;
        }
    };
    View_UserManagementComponent1.prototype.destroyInternal = function () {
        this._vc_10.destroyNestedViews();
    };
    View_UserManagementComponent1.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    View_UserManagementComponent1.prototype.createEmbeddedViewInternal = function (nodeIndex) {
        if ((nodeIndex == 10)) {
            return new View_UserManagementComponent2(this.viewUtils, this, 10, this._anchor_10, this._vc_10);
        }
        return null;
    };
    return View_UserManagementComponent1;
}(import1.AppView));
var renderType_UserManagementComponent = import3.createRenderComponentType('', 0, import4.ViewEncapsulation.None, styles_UserManagementComponent, {});
export var View_UserManagementComponent0 = (function (_super) {
    __extends(View_UserManagementComponent0, _super);
    function View_UserManagementComponent0(viewUtils, parentView, parentIndex, parentElement) {
        _super.call(this, View_UserManagementComponent0, renderType_UserManagementComponent, import5.ViewType.COMPONENT, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways);
    }
    View_UserManagementComponent0.prototype.createInternal = function (rootSelector) {
        var parentRenderNode = this.renderer.createViewRoot(this.parentElement);
        this._anchor_0 = this.renderer.createTemplateAnchor(parentRenderNode, null);
        this._vc_0 = new import14.ViewContainer(0, null, this, this._anchor_0);
        this._TemplateRef_0_5 = new import23.TemplateRef_(this, 0, this._anchor_0);
        this._NgIf_0_6 = new import26.Wrapper_NgIf(this._vc_0.vcRef, this._TemplateRef_0_5);
        this.init(null, (this.renderer.directRenderer ? null : [this._anchor_0]), null);
        return null;
    };
    View_UserManagementComponent0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import23.TemplateRef) && (0 === requestNodeIndex))) {
            return this._TemplateRef_0_5;
        }
        if (((token === import27.NgIf) && (0 === requestNodeIndex))) {
            return this._NgIf_0_6.context;
        }
        return notFoundResult;
    };
    View_UserManagementComponent0.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_0_0_0 = this.context.securityService.IsAuthorized;
        this._NgIf_0_6.check_ngIf(currVal_0_0_0, throwOnChange, false);
        this._NgIf_0_6.ngDoCheck(this, this._anchor_0, throwOnChange);
        this._vc_0.detectChangesInNestedViews(throwOnChange);
    };
    View_UserManagementComponent0.prototype.destroyInternal = function () {
        this._vc_0.destroyNestedViews();
    };
    View_UserManagementComponent0.prototype.createEmbeddedViewInternal = function (nodeIndex) {
        if ((nodeIndex == 0)) {
            return new View_UserManagementComponent1(this.viewUtils, this, 0, this._anchor_0, this._vc_0);
        }
        return null;
    };
    return View_UserManagementComponent0;
}(import1.AppView));
