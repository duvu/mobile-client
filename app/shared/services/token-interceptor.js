"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var config_1 = require("../config");
var application_context_1 = require("./application-context");
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
            var token = ('bearer' + this.applicationContext.token);
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
        __metadata("design:paramtypes", [application_context_1.ApplicationContext])
    ], TokenInterceptor);
    return TokenInterceptor;
}());
exports.TokenInterceptor = TokenInterceptor;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9rZW4taW50ZXJjZXB0b3IuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ0b2tlbi1pbnRlcmNlcHRvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNBLHNDQUEyQztBQUUzQyxvQ0FBbUM7QUFDbkMsNkRBQTJEO0FBRzNEO0lBQ0ksMEJBQW9CLGtCQUFzQztRQUF0Qyx1QkFBa0IsR0FBbEIsa0JBQWtCLENBQW9CO0lBRTFELENBQUM7SUFDRCxvQ0FBUyxHQUFULFVBQVUsR0FBcUIsRUFBRSxJQUFpQjtRQUM5QyxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRSxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDNUIsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQy9CLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQ3hCLEVBQUMsR0FBRyxFQUFFLGVBQU0sQ0FBQyxNQUFNLEdBQUcsR0FBRyxDQUFDLEdBQUcsRUFBQyxDQUNqQyxDQUFDLENBQUMsQ0FBQyxVQUFVO1FBQ2xCLENBQUM7UUFBQyxJQUFJLENBQUMsQ0FBQztZQUNKLElBQU0sS0FBSyxHQUFHLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUN6RCxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUN4QjtnQkFDSSxHQUFHLEVBQUUsZUFBTSxDQUFDLE1BQU0sR0FBRyxHQUFHLENBQUMsR0FBRztnQkFDNUIsT0FBTyxFQUFFLEdBQUcsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLGNBQWMsRUFBRSxrQkFBa0IsQ0FBQztxQkFDdkQsR0FBRyxDQUFDLFFBQVEsRUFBRSxrQkFBa0IsQ0FBQztxQkFDakMsR0FBRyxDQUFDLGVBQWUsRUFBRSxLQUFLLENBQUM7YUFDbkMsQ0FDSixDQUFDLENBQUM7UUFDUCxDQUFDO0lBQ0wsQ0FBQztJQXJCUSxnQkFBZ0I7UUFENUIsaUJBQVUsRUFBRTt5Q0FFK0Isd0NBQWtCO09BRGpELGdCQUFnQixDQXNCNUI7SUFBRCx1QkFBQztDQUFBLEFBdEJELElBc0JDO0FBdEJZLDRDQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEh0dHBFdmVudCwgSHR0cEhhbmRsZXIsIEh0dHBJbnRlcmNlcHRvciwgSHR0cFJlcXVlc3QgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcy9PYnNlcnZhYmxlJztcbmltcG9ydCB7IENvbmZpZyB9IGZyb20gJy4uL2NvbmZpZyc7XG5pbXBvcnQgeyBBcHBsaWNhdGlvbkNvbnRleHQgfSBmcm9tICcuL2FwcGxpY2F0aW9uLWNvbnRleHQnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgVG9rZW5JbnRlcmNlcHRvciBpbXBsZW1lbnRzIEh0dHBJbnRlcmNlcHRvciB7XG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBhcHBsaWNhdGlvbkNvbnRleHQ6IEFwcGxpY2F0aW9uQ29udGV4dCkge1xuXG4gICAgfVxuICAgIGludGVyY2VwdChyZXE6IEh0dHBSZXF1ZXN0PGFueT4sIG5leHQ6IEh0dHBIYW5kbGVyKTogT2JzZXJ2YWJsZTxIdHRwRXZlbnQ8YW55Pj4ge1xuICAgICAgICBjb25zb2xlLmxvZygnVVJMJywgcmVxLnVybCk7XG4gICAgICAgIGlmIChyZXEudXJsLnN0YXJ0c1dpdGgoJy9vYXV0aCcpKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV4dC5oYW5kbGUocmVxLmNsb25lKFxuICAgICAgICAgICAgICAgIHt1cmw6IENvbmZpZy5hcGlVcmwgKyByZXEudXJsfVxuICAgICAgICAgICAgKSk7IC8vIGZvcndhcmRcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IHRva2VuID0gKCdiZWFyZXInICsgdGhpcy5hcHBsaWNhdGlvbkNvbnRleHQudG9rZW4pO1xuICAgICAgICAgICAgcmV0dXJuIG5leHQuaGFuZGxlKHJlcS5jbG9uZShcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHVybDogQ29uZmlnLmFwaVVybCArIHJlcS51cmwsXG4gICAgICAgICAgICAgICAgICAgIGhlYWRlcnM6IHJlcS5oZWFkZXJzLnNldCgnQ29udGVudC1UeXBlJywgJ2FwcGxpY2F0aW9uL2pzb24nKVxuICAgICAgICAgICAgICAgICAgICAgICAgLnNldCgnQWNjZXB0JywgJ2FwcGxpY2F0aW9uL2pzb24nKVxuICAgICAgICAgICAgICAgICAgICAgICAgLnNldCgnQXV0aG9yaXphdGlvbicsIHRva2VuKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICkpO1xuICAgICAgICB9XG4gICAgfVxufVxuIl19