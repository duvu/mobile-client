"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var http_1 = require("@angular/common/http");
var core_1 = require("@angular/core");
var platform_1 = require("tns-core-modules/platform");
var config_1 = require("../config");
var base64_1 = require("../utils/base64");
var AuthService = /** @class */ (function () {
    function AuthService(http) {
        this.http = http;
        if (platform_1.isAndroid) {
            this.basicAuthHeader = 'Basic ' + base64_1.transformStringToBase64('Android', 'webapp:123456');
        }
        else if (platform_1.isIOS) {
            this.basicAuthHeader = 'Basic ' + base64_1.transformStringToBase64('iOS', 'webapp:123456');
        }
    }
    AuthService.prototype.login = function (username, password) {
        var headers = new http_1.HttpHeaders({
            Authorization: this.basicAuthHeader,
            'Content-Type': 'application/x-www-form-urlencoded'
        });
        var options = { headers: headers };
        return this.http.post(config_1.Config.apiUrl + '/oauth/token', 'grant_type=password&scope=read%20write&username=' + username + '&password=' + password, options);
    };
    AuthService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], AuthService);
    return AuthService;
}());
exports.AuthService = AuthService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXV0aC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsNkNBQStEO0FBQy9ELHNDQUEyQztBQUUzQyxzREFBNkQ7QUFDN0Qsb0NBQW1DO0FBRW5DLDBDQUEwRDtBQUcxRDtJQUlJLHFCQUFvQixJQUFnQjtRQUFoQixTQUFJLEdBQUosSUFBSSxDQUFZO1FBQ2hDLEVBQUUsQ0FBQyxDQUFDLG9CQUFTLENBQUMsQ0FBQyxDQUFDO1lBQ1osSUFBSSxDQUFDLGVBQWUsR0FBRyxRQUFRLEdBQUcsZ0NBQXVCLENBQUMsU0FBUyxFQUFFLGVBQWUsQ0FBQyxDQUFDO1FBQzFGLENBQUM7UUFBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsZ0JBQUssQ0FBQyxDQUFDLENBQUM7WUFDZixJQUFJLENBQUMsZUFBZSxHQUFHLFFBQVEsR0FBRyxnQ0FBdUIsQ0FBQyxLQUFLLEVBQUUsZUFBZSxDQUFDLENBQUM7UUFDdEYsQ0FBQztJQUNMLENBQUM7SUFFRCwyQkFBSyxHQUFMLFVBQU0sUUFBZ0IsRUFBRSxRQUFnQjtRQUNwQyxJQUFNLE9BQU8sR0FBRyxJQUFJLGtCQUFXLENBQUM7WUFDNUIsYUFBYSxFQUFFLElBQUksQ0FBQyxlQUFlO1lBQ25DLGNBQWMsRUFBRSxtQ0FBbUM7U0FDdEQsQ0FBQyxDQUFDO1FBQ0gsSUFBTSxPQUFPLEdBQUcsRUFBQyxPQUFPLFNBQUEsRUFBQyxDQUFDO1FBRTFCLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBZ0IsZUFBTSxDQUFDLE1BQU0sR0FBRyxjQUFjLEVBQy9ELGtEQUFrRCxHQUFHLFFBQVEsR0FBRyxZQUFZLEdBQUcsUUFBUSxFQUN2RixPQUFPLENBQUMsQ0FBQztJQUNqQixDQUFDO0lBdEJRLFdBQVc7UUFEdkIsaUJBQVUsRUFBRTt5Q0FLaUIsaUJBQVU7T0FKM0IsV0FBVyxDQXdCdkI7SUFBRCxrQkFBQztDQUFBLEFBeEJELElBd0JDO0FBeEJZLGtDQUFXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSHR0cENsaWVudCwgSHR0cEhlYWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBpc0FuZHJvaWQsIGlzSU9TIH0gZnJvbSAndG5zLWNvcmUtbW9kdWxlcy9wbGF0Zm9ybSc7XG5pbXBvcnQgeyBDb25maWcgfSBmcm9tICcuLi9jb25maWcnO1xuaW1wb3J0IHsgTG9naW5SZXNwb25zZSB9IGZyb20gJy4uL21vZGVscy9sb2dpbi1yZXNwb25zZSc7XG5pbXBvcnQgeyB0cmFuc2Zvcm1TdHJpbmdUb0Jhc2U2NCB9IGZyb20gJy4uL3V0aWxzL2Jhc2U2NCc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBBdXRoU2VydmljZSB7XG5cbiAgICAvLyBwcml2YXRlIGJhc2ljQXV0aEhlYWRlciA9ICdCYXNpYyAnICsgQnVmZmVyLmZyb20oJ3dlYmFwcDoxMjM0NTYnKS50b1N0cmluZygnYmFzZTY0Jyk7XG4gICAgcHJpdmF0ZSBiYXNpY0F1dGhIZWFkZXI6IHN0cmluZztcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQpIHtcbiAgICAgICAgaWYgKGlzQW5kcm9pZCkge1xuICAgICAgICAgICAgdGhpcy5iYXNpY0F1dGhIZWFkZXIgPSAnQmFzaWMgJyArIHRyYW5zZm9ybVN0cmluZ1RvQmFzZTY0KCdBbmRyb2lkJywgJ3dlYmFwcDoxMjM0NTYnKTtcbiAgICAgICAgfSBlbHNlIGlmIChpc0lPUykge1xuICAgICAgICAgICAgdGhpcy5iYXNpY0F1dGhIZWFkZXIgPSAnQmFzaWMgJyArIHRyYW5zZm9ybVN0cmluZ1RvQmFzZTY0KCdpT1MnLCAnd2ViYXBwOjEyMzQ1NicpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgbG9naW4odXNlcm5hbWU6IHN0cmluZywgcGFzc3dvcmQ6IHN0cmluZyk6IE9ic2VydmFibGU8TG9naW5SZXNwb25zZT4ge1xuICAgICAgICBjb25zdCBoZWFkZXJzID0gbmV3IEh0dHBIZWFkZXJzKHtcbiAgICAgICAgICAgIEF1dGhvcml6YXRpb246IHRoaXMuYmFzaWNBdXRoSGVhZGVyLFxuICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnXG4gICAgICAgIH0pO1xuICAgICAgICBjb25zdCBvcHRpb25zID0ge2hlYWRlcnN9O1xuXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAucG9zdDxMb2dpblJlc3BvbnNlPihDb25maWcuYXBpVXJsICsgJy9vYXV0aC90b2tlbicsXG4gICAgICAgICAgICAnZ3JhbnRfdHlwZT1wYXNzd29yZCZzY29wZT1yZWFkJTIwd3JpdGUmdXNlcm5hbWU9JyArIHVzZXJuYW1lICsgJyZwYXNzd29yZD0nICsgcGFzc3dvcmQsXG4gICAgICAgICAgICBvcHRpb25zKTtcbiAgICB9XG5cbn1cbiJdfQ==