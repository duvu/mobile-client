"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var application_context_service_1 = require("../shared/services/application-context.service");
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
    }
    LoginComponent.prototype.ngOnInit = function () {
        /* ***********************************************************
        * Use the "ngOnInit" handler to initialize data for this component.
        *************************************************************/
    };
    LoginComponent.prototype.onSigninButtonTap = function () {
        var _this = this;
        var userName = this.username;
        var password = this.password;
        this.auth.login(userName, password).subscribe(function (data) {
            _this.applicationContext.storeProfile(data);
            _this.router.navigate(['/home']);
        }, function (error) { }, function () { });
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
            application_context_service_1.ApplicationContext])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG9naW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBQ2xELDBDQUF5QztBQUV6Qyw4RkFBb0Y7QUFDcEYsZ0VBQThEO0FBRTlEOzs7Ozs4REFLOEQ7QUFPOUQ7SUFJSSx3QkFBb0IsSUFBaUIsRUFBVSxNQUFjLEVBQ3pDLGtCQUFzQztRQUN0RDs7c0VBRThEO1FBSjlDLFNBQUksR0FBSixJQUFJLENBQWE7UUFBVSxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ3pDLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBb0I7SUFLMUQsQ0FBQztJQUVELGlDQUFRLEdBQVI7UUFDSTs7c0VBRThEO0lBQ2xFLENBQUM7SUFFRCwwQ0FBaUIsR0FBakI7UUFBQSxpQkFXQztRQVZHLElBQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7UUFDL0IsSUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQztRQUMvQixJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDLENBQUMsU0FBUyxDQUN6QyxVQUFDLElBQW1CO1lBQ2hCLEtBQUksQ0FBQyxrQkFBa0IsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDM0MsS0FBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1FBQ3BDLENBQUMsRUFDRCxVQUFDLEtBQUssSUFBTSxDQUFDLEVBQ2IsY0FBTyxDQUFDLENBQ1gsQ0FBQztJQUNOLENBQUM7SUFFRCw0Q0FBbUIsR0FBbkI7UUFDSTs7c0VBRThEO0lBQ2xFLENBQUM7SUFuQ1EsY0FBYztRQUwxQixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLE9BQU87WUFDakIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSx3QkFBd0I7U0FDeEMsQ0FBQzt5Q0FLNEIsMEJBQVcsRUFBa0IsZUFBTTtZQUNyQixnREFBa0I7T0FMakQsY0FBYyxDQW9DMUI7SUFBRCxxQkFBQztDQUFBLEFBcENELElBb0NDO0FBcENZLHdDQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBMb2dpblJlc3BvbnNlIH0gZnJvbSAnLi4vc2hhcmVkL21vZGVscy9sb2dpbi1yZXNwb25zZSc7XG5pbXBvcnQgeyBBcHBsaWNhdGlvbkNvbnRleHQgfSBmcm9tICcuLi9zaGFyZWQvc2VydmljZXMvYXBwbGljYXRpb24tY29udGV4dC5zZXJ2aWNlJztcbmltcG9ydCB7IEF1dGhTZXJ2aWNlIH0gZnJvbSAnLi4vc2hhcmVkL3NlcnZpY2VzL2F1dGguc2VydmljZSc7XG5cbi8qICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4qIEJlZm9yZSB5b3UgY2FuIG5hdmlnYXRlIHRvIHRoaXMgcGFnZSBmcm9tIHlvdXIgYXBwLCB5b3UgbmVlZCB0byByZWZlcmVuY2UgdGhpcyBwYWdlJ3MgbW9kdWxlIGluIHRoZVxuKiBnbG9iYWwgYXBwIHJvdXRlciBtb2R1bGUuIEFkZCB0aGUgZm9sbG93aW5nIG9iamVjdCB0byB0aGUgZ2xvYmFsIGFycmF5IG9mIHJvdXRlczpcbiogeyBwYXRoOiBcImxvZ2luXCIsIGxvYWRDaGlsZHJlbjogXCIuL2xvZ2luL2xvZ2luLm1vZHVsZSNMb2dpbk1vZHVsZVwiIH1cbiogTm90ZSB0aGF0IHRoaXMgc2ltcGx5IHBvaW50cyB0aGUgcGF0aCB0byB0aGUgcGFnZSBtb2R1bGUgZmlsZS4gSWYgeW91IG1vdmUgdGhlIHBhZ2UsIHlvdSBuZWVkIHRvIHVwZGF0ZSB0aGUgcm91dGUgdG9vLlxuKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdMb2dpbicsXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICB0ZW1wbGF0ZVVybDogJy4vbG9naW4uY29tcG9uZW50Lmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIExvZ2luQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgICB1c2VybmFtZTogc3RyaW5nO1xuICAgIHBhc3N3b3JkOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGF1dGg6IEF1dGhTZXJ2aWNlLCBwcml2YXRlIHJvdXRlcjogUm91dGVyLFxuICAgICAgICAgICAgICAgIHByaXZhdGUgYXBwbGljYXRpb25Db250ZXh0OiBBcHBsaWNhdGlvbkNvbnRleHQpIHtcbiAgICAgICAgLyogKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAgICAgICAgKiBVc2UgdGhlIGNvbnN0cnVjdG9yIHRvIGluamVjdCBhcHAgc2VydmljZXMgdGhhdCB5b3UgbmVlZCBpbiB0aGlzIGNvbXBvbmVudC5cbiAgICAgICAgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cblxuICAgIH1cblxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xuICAgICAgICAvKiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuICAgICAgICAqIFVzZSB0aGUgXCJuZ09uSW5pdFwiIGhhbmRsZXIgdG8gaW5pdGlhbGl6ZSBkYXRhIGZvciB0aGlzIGNvbXBvbmVudC5cbiAgICAgICAgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbiAgICB9XG5cbiAgICBvblNpZ25pbkJ1dHRvblRhcCgpOiB2b2lkIHtcbiAgICAgICAgY29uc3QgdXNlck5hbWUgPSB0aGlzLnVzZXJuYW1lO1xuICAgICAgICBjb25zdCBwYXNzd29yZCA9IHRoaXMucGFzc3dvcmQ7XG4gICAgICAgIHRoaXMuYXV0aC5sb2dpbih1c2VyTmFtZSwgcGFzc3dvcmQpLnN1YnNjcmliZShcbiAgICAgICAgICAgIChkYXRhOiBMb2dpblJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5hcHBsaWNhdGlvbkNvbnRleHQuc3RvcmVQcm9maWxlKGRhdGEpO1xuICAgICAgICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL2hvbWUnXSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgKGVycm9yKSA9PiB7fSxcbiAgICAgICAgICAgICgpID0+IHt9XG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgb25Gb3Jnb3RQYXNzd29yZFRhcCgpOiB2b2lkIHtcbiAgICAgICAgLyogKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAgICAgICAgKiBDYWxsIHlvdXIgRm9yZ290IFBhc3N3b3JkIGxvZ2ljIGhlcmUuXG4gICAgICAgICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4gICAgfVxufVxuIl19