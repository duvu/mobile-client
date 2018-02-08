"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var applicationSetting = require("application-settings");
var ApplicationContext = /** @class */ (function () {
    function ApplicationContext() {
    }
    Object.defineProperty(ApplicationContext.prototype, "expiredIn", {
        get: function () {
            return this._expiredIn;
        },
        set: function (value) {
            this._expiredIn = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ApplicationContext.prototype, "token", {
        get: function () {
            return this._token;
        },
        set: function (value) {
            this._token = value;
        },
        enumerable: true,
        configurable: true
    });
    ApplicationContext.prototype.storeProfile = function (data) {
        this.token = data.access_token;
        this.expiredIn = data.expires_in;
        applicationSetting.setString('profile', JSON.stringify(data));
    };
    ApplicationContext = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [])
    ], ApplicationContext);
    return ApplicationContext;
}());
exports.ApplicationContext = ApplicationContext;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwbGljYXRpb24tY29udGV4dC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcGxpY2F0aW9uLWNvbnRleHQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkM7QUFDM0MseURBQTJEO0FBSTNEO0lBSUk7SUFFQSxDQUFDO0lBRUQsc0JBQUkseUNBQVM7YUFBYjtZQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDO1FBQzNCLENBQUM7YUFFRCxVQUFjLEtBQWE7WUFDdkIsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7UUFDNUIsQ0FBQzs7O09BSkE7SUFNRCxzQkFBSSxxQ0FBSzthQUFUO1lBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDdkIsQ0FBQzthQUVELFVBQVUsS0FBYTtZQUNuQixJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUN4QixDQUFDOzs7T0FKQTtJQU1ELHlDQUFZLEdBQVosVUFBYSxJQUFtQjtRQUM1QixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUM7UUFDL0IsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDO1FBQ2pDLGtCQUFrQixDQUFDLFNBQVMsQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQ2xFLENBQUM7SUE1QlEsa0JBQWtCO1FBRDlCLGlCQUFVLEVBQUU7O09BQ0Esa0JBQWtCLENBNkI5QjtJQUFELHlCQUFDO0NBQUEsQUE3QkQsSUE2QkM7QUE3QlksZ0RBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0ICogYXMgYXBwbGljYXRpb25TZXR0aW5nIGZyb20gJ2FwcGxpY2F0aW9uLXNldHRpbmdzJztcbmltcG9ydCB7IExvZ2luUmVzcG9uc2UgfSBmcm9tICcuLi9tb2RlbHMvbG9naW4tcmVzcG9uc2UnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQXBwbGljYXRpb25Db250ZXh0IHtcbiAgICBwcml2YXRlIF90b2tlbjogc3RyaW5nO1xuICAgIHByaXZhdGUgX2V4cGlyZWRJbjogbnVtYmVyO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG5cbiAgICB9XG5cbiAgICBnZXQgZXhwaXJlZEluKCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLl9leHBpcmVkSW47XG4gICAgfVxuXG4gICAgc2V0IGV4cGlyZWRJbih2YWx1ZTogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMuX2V4cGlyZWRJbiA9IHZhbHVlO1xuICAgIH1cblxuICAgIGdldCB0b2tlbigpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5fdG9rZW47XG4gICAgfVxuXG4gICAgc2V0IHRva2VuKHZhbHVlOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5fdG9rZW4gPSB2YWx1ZTtcbiAgICB9XG5cbiAgICBzdG9yZVByb2ZpbGUoZGF0YTogTG9naW5SZXNwb25zZSk6IHZvaWQge1xuICAgICAgICB0aGlzLnRva2VuID0gZGF0YS5hY2Nlc3NfdG9rZW47XG4gICAgICAgIHRoaXMuZXhwaXJlZEluID0gZGF0YS5leHBpcmVzX2luO1xuICAgICAgICBhcHBsaWNhdGlvblNldHRpbmcuc2V0U3RyaW5nKCdwcm9maWxlJywgSlNPTi5zdHJpbmdpZnkoZGF0YSkpO1xuICAgIH1cbn1cbiJdfQ==