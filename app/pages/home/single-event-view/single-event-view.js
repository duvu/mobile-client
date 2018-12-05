"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var SingleEventViewComponent = /** @class */ (function () {
    function SingleEventViewComponent() {
    }
    SingleEventViewComponent.prototype.ngOnChanges = function (changes) {
        this.event = changes.sEvent.currentValue;
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], SingleEventViewComponent.prototype, "sEvent", void 0);
    SingleEventViewComponent = __decorate([
        core_1.Component({
            selector: 'SingleEventView',
            moduleId: module.id,
            templateUrl: './single-event-view.html'
        })
    ], SingleEventViewComponent);
    return SingleEventViewComponent;
}());
exports.SingleEventViewComponent = SingleEventViewComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2luZ2xlLWV2ZW50LXZpZXcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzaW5nbGUtZXZlbnQtdmlldy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyRTtBQVEzRTtJQUFBO0lBT0EsQ0FBQztJQUhHLDhDQUFXLEdBQVgsVUFBWSxPQUFzQjtRQUM5QixJQUFJLENBQUMsS0FBSyxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDO0lBQzdDLENBQUM7SUFMUTtRQUFSLFlBQUssRUFBRTs7NERBQWE7SUFEWix3QkFBd0I7UUFOcEMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxpQkFBaUI7WUFDM0IsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSwwQkFBMEI7U0FDMUMsQ0FBQztPQUVXLHdCQUF3QixDQU9wQztJQUFELCtCQUFDO0NBQUEsQUFQRCxJQU9DO0FBUFksNERBQXdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25DaGFuZ2VzLCBTaW1wbGVDaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnU2luZ2xlRXZlbnRWaWV3JyxcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9zaW5nbGUtZXZlbnQtdmlldy5odG1sJ1xufSlcblxuZXhwb3J0IGNsYXNzIFNpbmdsZUV2ZW50Vmlld0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XG4gICAgQElucHV0KCkgc0V2ZW50OiBhbnk7XG4gICAgZXZlbnQ6IGFueTtcblxuICAgIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5ldmVudCA9IGNoYW5nZXMuc0V2ZW50LmN1cnJlbnRWYWx1ZTtcbiAgICB9XG59XG4iXX0=