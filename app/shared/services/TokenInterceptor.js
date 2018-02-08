"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var config_1 = require("../config");
var application_context_service_1 = require("./application-context.service");
var TokenInterceptor = /** @class */ (function () {
    function TokenInterceptor(applicationContext) {
        this.applicationContext = applicationContext;
    }
    TokenInterceptor.prototype.intercept = function (req, next) {
        console.log('URL', req.url);
        if (req.url.startsWith('/oauth')) {
            return next.handle(req.clone({ url: config_1.Config.apiUrl + req.url })); // forward
        }
        else {
            var token = this.applicationContext.token;
            return next.handle(req.clone({
                url: config_1.Config.apiUrl + req.url,
                headers: req.headers.set('Content-Type', 'application/json')
                    .set('Accept', 'application/json')
                    .set('Authorization', token)
            }));
        }
    };
    TokenInterceptor = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [application_context_service_1.ApplicationContext])
    ], TokenInterceptor);
    return TokenInterceptor;
}());
exports.TokenInterceptor = TokenInterceptor;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVG9rZW5JbnRlcmNlcHRvci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIlRva2VuSW50ZXJjZXB0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFDQSxzQ0FBMkM7QUFFM0Msb0NBQW1DO0FBQ25DLDZFQUFtRTtBQUduRTtJQUNJLDBCQUFvQixrQkFBc0M7UUFBdEMsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFvQjtJQUUxRCxDQUFDO0lBQ0Qsb0NBQVMsR0FBVCxVQUFVLEdBQXFCLEVBQUUsSUFBaUI7UUFDOUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQzVCLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUMvQixNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUN4QixFQUFDLEdBQUcsRUFBRSxlQUFNLENBQUMsTUFBTSxHQUFHLEdBQUcsQ0FBQyxHQUFHLEVBQUMsQ0FDakMsQ0FBQyxDQUFDLENBQUMsVUFBVTtRQUNsQixDQUFDO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDSixJQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsa0JBQWtCLENBQUMsS0FBSyxDQUFDO1lBQzVDLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQ3hCO2dCQUNJLEdBQUcsRUFBRSxlQUFNLENBQUMsTUFBTSxHQUFHLEdBQUcsQ0FBQyxHQUFHO2dCQUM1QixPQUFPLEVBQUUsR0FBRyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsY0FBYyxFQUFFLGtCQUFrQixDQUFDO3FCQUN2RCxHQUFHLENBQUMsUUFBUSxFQUFFLGtCQUFrQixDQUFDO3FCQUNqQyxHQUFHLENBQUMsZUFBZSxFQUFFLEtBQUssQ0FBQzthQUNuQyxDQUNKLENBQUMsQ0FBQztRQUNQLENBQUM7SUFDTCxDQUFDO0lBckJRLGdCQUFnQjtRQUQ1QixpQkFBVSxFQUFFO3lDQUUrQixnREFBa0I7T0FEakQsZ0JBQWdCLENBc0I1QjtJQUFELHVCQUFDO0NBQUEsQUF0QkQsSUFzQkM7QUF0QlksNENBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSHR0cEV2ZW50LCBIdHRwSGFuZGxlciwgSHR0cEludGVyY2VwdG9yLCBIdHRwUmVxdWVzdCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzL09ic2VydmFibGUnO1xuaW1wb3J0IHsgQ29uZmlnIH0gZnJvbSAnLi4vY29uZmlnJztcbmltcG9ydCB7IEFwcGxpY2F0aW9uQ29udGV4dCB9IGZyb20gJy4vYXBwbGljYXRpb24tY29udGV4dC5zZXJ2aWNlJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFRva2VuSW50ZXJjZXB0b3IgaW1wbGVtZW50cyBIdHRwSW50ZXJjZXB0b3Ige1xuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgYXBwbGljYXRpb25Db250ZXh0OiBBcHBsaWNhdGlvbkNvbnRleHQpIHtcblxuICAgIH1cbiAgICBpbnRlcmNlcHQocmVxOiBIdHRwUmVxdWVzdDxhbnk+LCBuZXh0OiBIdHRwSGFuZGxlcik6IE9ic2VydmFibGU8SHR0cEV2ZW50PGFueT4+IHtcbiAgICAgICAgY29uc29sZS5sb2coJ1VSTCcsIHJlcS51cmwpO1xuICAgICAgICBpZiAocmVxLnVybC5zdGFydHNXaXRoKCcvb2F1dGgnKSkge1xuICAgICAgICAgICAgcmV0dXJuIG5leHQuaGFuZGxlKHJlcS5jbG9uZShcbiAgICAgICAgICAgICAgICB7dXJsOiBDb25maWcuYXBpVXJsICsgcmVxLnVybH1cbiAgICAgICAgICAgICkpOyAvLyBmb3J3YXJkXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zdCB0b2tlbiA9IHRoaXMuYXBwbGljYXRpb25Db250ZXh0LnRva2VuO1xuICAgICAgICAgICAgcmV0dXJuIG5leHQuaGFuZGxlKHJlcS5jbG9uZShcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHVybDogQ29uZmlnLmFwaVVybCArIHJlcS51cmwsXG4gICAgICAgICAgICAgICAgICAgIGhlYWRlcnM6IHJlcS5oZWFkZXJzLnNldCgnQ29udGVudC1UeXBlJywgJ2FwcGxpY2F0aW9uL2pzb24nKVxuICAgICAgICAgICAgICAgICAgICAgICAgLnNldCgnQWNjZXB0JywgJ2FwcGxpY2F0aW9uL2pzb24nKVxuICAgICAgICAgICAgICAgICAgICAgICAgLnNldCgnQXV0aG9yaXphdGlvbicsIHRva2VuKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICkpO1xuICAgICAgICB9XG4gICAgfVxufVxuIl19