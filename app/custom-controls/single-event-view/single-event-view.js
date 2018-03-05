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
            selector: 'single-event-view',
            moduleId: module.id,
            templateUrl: './single-event-view.html'
        })
    ], SingleEventViewComponent);
    return SingleEventViewComponent;
}());
exports.SingleEventViewComponent = SingleEventViewComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2luZ2xlLWV2ZW50LXZpZXcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzaW5nbGUtZXZlbnQtdmlldy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyRTtBQVEzRTtJQUFBO0lBT0EsQ0FBQztJQUhHLDhDQUFXLEdBQVgsVUFBWSxPQUFzQjtRQUM5QixJQUFJLENBQUMsS0FBSyxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDO0lBQzdDLENBQUM7SUFMUTtRQUFSLFlBQUssRUFBRTs7NERBQWE7SUFEWix3QkFBd0I7UUFOcEMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxtQkFBbUI7WUFDN0IsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSwwQkFBMEI7U0FDMUMsQ0FBQztPQUVXLHdCQUF3QixDQU9wQztJQUFELCtCQUFDO0NBQUEsQUFQRCxJQU9DO0FBUFksNERBQXdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25DaGFuZ2VzLCBTaW1wbGVDaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnc2luZ2xlLWV2ZW50LXZpZXcnLFxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgdGVtcGxhdGVVcmw6ICcuL3NpbmdsZS1ldmVudC12aWV3Lmh0bWwnXG59KVxuXG5leHBvcnQgY2xhc3MgU2luZ2xlRXZlbnRWaWV3Q29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzIHtcbiAgICBASW5wdXQoKSBzRXZlbnQ6IGFueTtcbiAgICBldmVudDogYW55O1xuXG4gICAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgICAgICB0aGlzLmV2ZW50ID0gY2hhbmdlcy5zRXZlbnQuY3VycmVudFZhbHVlO1xuICAgIH1cbn1cbiJdfQ==