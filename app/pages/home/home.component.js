"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var nativescript_ui_sidedrawer_1 = require("nativescript-ui-sidedrawer");
var angular_1 = require("nativescript-ui-sidedrawer/angular");
var event_service_1 = require("../../shared/services/event.service");
var HomeComponent = /** @class */ (function () {
    function HomeComponent(eventService) {
        this.eventService = eventService;
    }
    /* ***********************************************************
    * Use the sideDrawerTransition property to change the open/close animation of the drawer.
    *************************************************************/
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._sideDrawerTransition = new nativescript_ui_sidedrawer_1.SlideInOnTopTransition();
        this.eventService.getLiveEvents().subscribe(function (data) {
            console.log('event-size', data.length);
            _this.events = data;
        }, function (error) {
            console.log('error', error);
        }, function () {
            console.log('Completed loading data');
        });
    };
    Object.defineProperty(HomeComponent.prototype, "sideDrawerTransition", {
        get: function () {
            return this._sideDrawerTransition;
        },
        enumerable: true,
        configurable: true
    });
    /* ***********************************************************
    * According to guidelines, if you have a drawer on your page, you should always
    * have a button that opens it. Use the showDrawer() function to open the app drawer section.
    *************************************************************/
    HomeComponent.prototype.onDrawerButtonTap = function () {
        this.drawerComponent.sideDrawer.showDrawer();
    };
    __decorate([
        core_1.ViewChild('drawer'),
        __metadata("design:type", angular_1.RadSideDrawerComponent)
    ], HomeComponent.prototype, "drawerComponent", void 0);
    HomeComponent = __decorate([
        core_1.Component({
            selector: 'Home',
            moduleId: module.id,
            templateUrl: './home.component.html'
        }),
        __metadata("design:paramtypes", [event_service_1.EventService])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJob21lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUE2RDtBQUM3RCx5RUFBMEY7QUFDMUYsOERBQTRFO0FBRTVFLHFFQUFtRTtBQU9uRTtJQVNJLHVCQUFvQixZQUEwQjtRQUExQixpQkFBWSxHQUFaLFlBQVksQ0FBYztJQUFHLENBQUM7SUFFbEQ7O2tFQUU4RDtJQUM5RCxnQ0FBUSxHQUFSO1FBQUEsaUJBZUM7UUFkRyxJQUFJLENBQUMscUJBQXFCLEdBQUcsSUFBSSxtREFBc0IsRUFBRSxDQUFDO1FBRTFELElBQUksQ0FBQyxZQUFZLENBQUMsYUFBYSxFQUFFLENBQUMsU0FBUyxDQUN2QyxVQUFDLElBQXNCO1lBQ25CLE9BQU8sQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUN2QyxLQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztRQUN2QixDQUFDLEVBQ0QsVUFBQyxLQUFVO1lBQ1AsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDaEMsQ0FBQyxFQUNEO1lBQ0ksT0FBTyxDQUFDLEdBQUcsQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDO1FBQzFDLENBQUMsQ0FDSixDQUFDO0lBQ04sQ0FBQztJQUVELHNCQUFJLCtDQUFvQjthQUF4QjtZQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMscUJBQXFCLENBQUM7UUFDdEMsQ0FBQzs7O09BQUE7SUFFRDs7O2tFQUc4RDtJQUM5RCx5Q0FBaUIsR0FBakI7UUFDSSxJQUFJLENBQUMsZUFBZSxDQUFDLFVBQVUsQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUNqRCxDQUFDO0lBbkNvQjtRQUFwQixnQkFBUyxDQUFDLFFBQVEsQ0FBQztrQ0FBa0IsZ0NBQXNCOzBEQUFDO0lBTnBELGFBQWE7UUFMekIsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxNQUFNO1lBQ2hCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsdUJBQXVCO1NBQ3ZDLENBQUM7eUNBVW9DLDRCQUFZO09BVHJDLGFBQWEsQ0EwQ3pCO0lBQUQsb0JBQUM7Q0FBQSxBQTFDRCxJQTBDQztBQTFDWSxzQ0FBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBWaWV3Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRHJhd2VyVHJhbnNpdGlvbkJhc2UsIFNsaWRlSW5PblRvcFRyYW5zaXRpb24gfSBmcm9tICduYXRpdmVzY3JpcHQtdWktc2lkZWRyYXdlcic7XHJcbmltcG9ydCB7IFJhZFNpZGVEcmF3ZXJDb21wb25lbnQgfSBmcm9tICduYXRpdmVzY3JpcHQtdWktc2lkZWRyYXdlci9hbmd1bGFyJztcclxuaW1wb3J0IHsgRXZlbnREYXRhIH0gZnJvbSAnLi4vLi4vc2hhcmVkL21vZGVscy9ldmVudC1kYXRhJztcclxuaW1wb3J0IHsgRXZlbnRTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2hhcmVkL3NlcnZpY2VzL2V2ZW50LnNlcnZpY2UnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ0hvbWUnLFxyXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICAgIHRlbXBsYXRlVXJsOiAnLi9ob21lLmNvbXBvbmVudC5odG1sJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgSG9tZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgICBldmVudHM6IEFycmF5PEV2ZW50RGF0YT47XHJcbiAgICAvKiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4gICAgKiBVc2UgdGhlIEBWaWV3Q2hpbGQgZGVjb3JhdG9yIHRvIGdldCBhIHJlZmVyZW5jZSB0byB0aGUgZHJhd2VyIGNvbXBvbmVudC5cclxuICAgICogSXQgaXMgdXNlZCBpbiB0aGUgXCJvbkRyYXdlckJ1dHRvblRhcFwiIGZ1bmN0aW9uIGJlbG93IHRvIG1hbmlwdWxhdGUgdGhlIGRyYXdlci5cclxuICAgICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcbiAgICBAVmlld0NoaWxkKCdkcmF3ZXInKSBkcmF3ZXJDb21wb25lbnQ6IFJhZFNpZGVEcmF3ZXJDb21wb25lbnQ7XHJcblxyXG4gICAgcHJpdmF0ZSBfc2lkZURyYXdlclRyYW5zaXRpb246IERyYXdlclRyYW5zaXRpb25CYXNlO1xyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBldmVudFNlcnZpY2U6IEV2ZW50U2VydmljZSkge31cclxuXHJcbiAgICAvKiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4gICAgKiBVc2UgdGhlIHNpZGVEcmF3ZXJUcmFuc2l0aW9uIHByb3BlcnR5IHRvIGNoYW5nZSB0aGUgb3Blbi9jbG9zZSBhbmltYXRpb24gb2YgdGhlIGRyYXdlci5cclxuICAgICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLl9zaWRlRHJhd2VyVHJhbnNpdGlvbiA9IG5ldyBTbGlkZUluT25Ub3BUcmFuc2l0aW9uKCk7XHJcblxyXG4gICAgICAgIHRoaXMuZXZlbnRTZXJ2aWNlLmdldExpdmVFdmVudHMoKS5zdWJzY3JpYmUoXHJcbiAgICAgICAgICAgIChkYXRhOiBBcnJheTxFdmVudERhdGE+KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnZXZlbnQtc2l6ZScsIGRhdGEubGVuZ3RoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZXZlbnRzID0gZGF0YTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgKGVycm9yOiBhbnkpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdlcnJvcicsIGVycm9yKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0NvbXBsZXRlZCBsb2FkaW5nIGRhdGEnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IHNpZGVEcmF3ZXJUcmFuc2l0aW9uKCk6IERyYXdlclRyYW5zaXRpb25CYXNlIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fc2lkZURyYXdlclRyYW5zaXRpb247XHJcbiAgICB9XHJcblxyXG4gICAgLyogKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuICAgICogQWNjb3JkaW5nIHRvIGd1aWRlbGluZXMsIGlmIHlvdSBoYXZlIGEgZHJhd2VyIG9uIHlvdXIgcGFnZSwgeW91IHNob3VsZCBhbHdheXNcclxuICAgICogaGF2ZSBhIGJ1dHRvbiB0aGF0IG9wZW5zIGl0LiBVc2UgdGhlIHNob3dEcmF3ZXIoKSBmdW5jdGlvbiB0byBvcGVuIHRoZSBhcHAgZHJhd2VyIHNlY3Rpb24uXHJcbiAgICAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG4gICAgb25EcmF3ZXJCdXR0b25UYXAoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5kcmF3ZXJDb21wb25lbnQuc2lkZURyYXdlci5zaG93RHJhd2VyKCk7XHJcbiAgICB9XHJcbn1cclxuIl19