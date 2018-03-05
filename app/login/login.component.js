"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var application_context_1 = require("../shared/services/application-context");
var auth_service_1 = require("../shared/services/auth.service");
/* ***********************************************************
* Before you can navigate to this page from your app, you need to reference this page's module in the
* global app router module. Add the following object to the global array of routes:
* { path: "login", loadChildren: "./login/login.module#LoginModule" }
* Note that this simply points the path to the page module file. If you move the page, you need to update the route too.
*************************************************************/
var LoginComponent = /** @class */ (function () {
    function LoginComponent(auth, router, applicationContext) {
        /* ***********************************************************
        * Use the constructor to inject app services that you need in this component.
        *************************************************************/
        this.auth = auth;
        this.router = router;
        this.applicationContext = applicationContext;
        this.username = 'sysadmin';
        this.password = '123456';
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.isLoading = false;
    };
    LoginComponent.prototype.onSigninButtonTap = function () {
        var _this = this;
        var userName = this.username;
        var password = this.password;
        this.isLoading = true;
        this.auth.login(userName, password).subscribe(function (data) {
            _this.applicationContext.storeProfile(data);
            _this.isLoading = false;
            _this.router.navigate(['/home']);
        }, function (error) {
            _this.isLoading = false;
        }, function () {
            _this.isLoading = false;
        });
    };
    LoginComponent.prototype.onForgotPasswordTap = function () {
        /* ***********************************************************
        * Call your Forgot Password logic here.
        *************************************************************/
    };
    LoginComponent = __decorate([
        core_1.Component({
            selector: 'Login',
            moduleId: module.id,
            templateUrl: './login.component.html'
        }),
        __metadata("design:paramtypes", [auth_service_1.AuthService, router_1.Router,
            application_context_1.ApplicationContext])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG9naW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBQ2xELDBDQUF5QztBQUV6Qyw4RUFBNEU7QUFDNUUsZ0VBQThEO0FBRTlEOzs7Ozs4REFLOEQ7QUFPOUQ7SUFLSSx3QkFBb0IsSUFBaUIsRUFBVSxNQUFjLEVBQ3pDLGtCQUFzQztRQUN0RDs7c0VBRThEO1FBSjlDLFNBQUksR0FBSixJQUFJLENBQWE7UUFBVSxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ3pDLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBb0I7UUFKMUQsYUFBUSxHQUFXLFVBQVUsQ0FBQztRQUM5QixhQUFRLEdBQVcsUUFBUSxDQUFDO0lBUTVCLENBQUM7SUFFRCxpQ0FBUSxHQUFSO1FBQ0ksSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7SUFDM0IsQ0FBQztJQUVELDBDQUFpQixHQUFqQjtRQUFBLGlCQWlCQztRQWhCRyxJQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO1FBQy9CLElBQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7UUFDL0IsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7UUFDdEIsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQyxDQUFDLFNBQVMsQ0FDekMsVUFBQyxJQUFtQjtZQUNoQixLQUFJLENBQUMsa0JBQWtCLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQzNDLEtBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO1lBQ3ZCLEtBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztRQUNwQyxDQUFDLEVBQ0QsVUFBQyxLQUFLO1lBQ0YsS0FBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7UUFDM0IsQ0FBQyxFQUNEO1lBQ0ksS0FBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7UUFDM0IsQ0FBQyxDQUNKLENBQUM7SUFDTixDQUFDO0lBRUQsNENBQW1CLEdBQW5CO1FBQ0k7O3NFQUU4RDtJQUNsRSxDQUFDO0lBeENRLGNBQWM7UUFMMUIsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxPQUFPO1lBQ2pCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsd0JBQXdCO1NBQ3hDLENBQUM7eUNBTTRCLDBCQUFXLEVBQWtCLGVBQU07WUFDckIsd0NBQWtCO09BTmpELGNBQWMsQ0F5QzFCO0lBQUQscUJBQUM7Q0FBQSxBQXpDRCxJQXlDQztBQXpDWSx3Q0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgTG9naW5SZXNwb25zZSB9IGZyb20gJy4uL3NoYXJlZC9tb2RlbHMvbG9naW4tcmVzcG9uc2UnO1xuaW1wb3J0IHsgQXBwbGljYXRpb25Db250ZXh0IH0gZnJvbSAnLi4vc2hhcmVkL3NlcnZpY2VzL2FwcGxpY2F0aW9uLWNvbnRleHQnO1xuaW1wb3J0IHsgQXV0aFNlcnZpY2UgfSBmcm9tICcuLi9zaGFyZWQvc2VydmljZXMvYXV0aC5zZXJ2aWNlJztcblxuLyogKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiogQmVmb3JlIHlvdSBjYW4gbmF2aWdhdGUgdG8gdGhpcyBwYWdlIGZyb20geW91ciBhcHAsIHlvdSBuZWVkIHRvIHJlZmVyZW5jZSB0aGlzIHBhZ2UncyBtb2R1bGUgaW4gdGhlXG4qIGdsb2JhbCBhcHAgcm91dGVyIG1vZHVsZS4gQWRkIHRoZSBmb2xsb3dpbmcgb2JqZWN0IHRvIHRoZSBnbG9iYWwgYXJyYXkgb2Ygcm91dGVzOlxuKiB7IHBhdGg6IFwibG9naW5cIiwgbG9hZENoaWxkcmVuOiBcIi4vbG9naW4vbG9naW4ubW9kdWxlI0xvZ2luTW9kdWxlXCIgfVxuKiBOb3RlIHRoYXQgdGhpcyBzaW1wbHkgcG9pbnRzIHRoZSBwYXRoIHRvIHRoZSBwYWdlIG1vZHVsZSBmaWxlLiBJZiB5b3UgbW92ZSB0aGUgcGFnZSwgeW91IG5lZWQgdG8gdXBkYXRlIHRoZSByb3V0ZSB0b28uXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ0xvZ2luJyxcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9sb2dpbi5jb21wb25lbnQuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgTG9naW5Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIGlzTG9hZGluZzogYm9vbGVhbjtcbiAgICB1c2VybmFtZTogc3RyaW5nID0gJ3N5c2FkbWluJztcbiAgICBwYXNzd29yZDogc3RyaW5nID0gJzEyMzQ1Nic7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGF1dGg6IEF1dGhTZXJ2aWNlLCBwcml2YXRlIHJvdXRlcjogUm91dGVyLFxuICAgICAgICAgICAgICAgIHByaXZhdGUgYXBwbGljYXRpb25Db250ZXh0OiBBcHBsaWNhdGlvbkNvbnRleHQpIHtcbiAgICAgICAgLyogKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAgICAgICAgKiBVc2UgdGhlIGNvbnN0cnVjdG9yIHRvIGluamVjdCBhcHAgc2VydmljZXMgdGhhdCB5b3UgbmVlZCBpbiB0aGlzIGNvbXBvbmVudC5cbiAgICAgICAgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cblxuICAgIH1cblxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xuICAgICAgICB0aGlzLmlzTG9hZGluZyA9IGZhbHNlO1xuICAgIH1cblxuICAgIG9uU2lnbmluQnV0dG9uVGFwKCk6IHZvaWQge1xuICAgICAgICBjb25zdCB1c2VyTmFtZSA9IHRoaXMudXNlcm5hbWU7XG4gICAgICAgIGNvbnN0IHBhc3N3b3JkID0gdGhpcy5wYXNzd29yZDtcbiAgICAgICAgdGhpcy5pc0xvYWRpbmcgPSB0cnVlO1xuICAgICAgICB0aGlzLmF1dGgubG9naW4odXNlck5hbWUsIHBhc3N3b3JkKS5zdWJzY3JpYmUoXG4gICAgICAgICAgICAoZGF0YTogTG9naW5SZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuYXBwbGljYXRpb25Db250ZXh0LnN0b3JlUHJvZmlsZShkYXRhKTtcbiAgICAgICAgICAgICAgICB0aGlzLmlzTG9hZGluZyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL2hvbWUnXSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgKGVycm9yKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5pc0xvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5pc0xvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBvbkZvcmdvdFBhc3N3b3JkVGFwKCk6IHZvaWQge1xuICAgICAgICAvKiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuICAgICAgICAqIENhbGwgeW91ciBGb3Jnb3QgUGFzc3dvcmQgbG9naWMgaGVyZS5cbiAgICAgICAgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbiAgICB9XG59XG4iXX0=