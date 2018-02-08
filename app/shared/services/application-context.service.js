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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwbGljYXRpb24tY29udGV4dC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBwbGljYXRpb24tY29udGV4dC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJDO0FBQzNDLHlEQUEyRDtBQUkzRDtJQUlJO0lBRUEsQ0FBQztJQUVELHNCQUFJLHlDQUFTO2FBQWI7WUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQztRQUMzQixDQUFDO2FBRUQsVUFBYyxLQUFhO1lBQ3ZCLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO1FBQzVCLENBQUM7OztPQUpBO0lBTUQsc0JBQUkscUNBQUs7YUFBVDtZQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQ3ZCLENBQUM7YUFFRCxVQUFVLEtBQWE7WUFDbkIsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7UUFDeEIsQ0FBQzs7O09BSkE7SUFNRCx5Q0FBWSxHQUFaLFVBQWEsSUFBbUI7UUFDNUIsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDO1FBQy9CLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQztRQUNqQyxrQkFBa0IsQ0FBQyxTQUFTLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUNsRSxDQUFDO0lBNUJRLGtCQUFrQjtRQUQ5QixpQkFBVSxFQUFFOztPQUNBLGtCQUFrQixDQTZCOUI7SUFBRCx5QkFBQztDQUFBLEFBN0JELElBNkJDO0FBN0JZLGdEQUFrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCAqIGFzIGFwcGxpY2F0aW9uU2V0dGluZyBmcm9tICdhcHBsaWNhdGlvbi1zZXR0aW5ncyc7XG5pbXBvcnQgeyBMb2dpblJlc3BvbnNlIH0gZnJvbSAnLi4vbW9kZWxzL2xvZ2luLXJlc3BvbnNlJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEFwcGxpY2F0aW9uQ29udGV4dCB7XG4gICAgcHJpdmF0ZSBfdG9rZW46IHN0cmluZztcbiAgICBwcml2YXRlIF9leHBpcmVkSW46IG51bWJlcjtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuXG4gICAgfVxuXG4gICAgZ2V0IGV4cGlyZWRJbigpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5fZXhwaXJlZEluO1xuICAgIH1cblxuICAgIHNldCBleHBpcmVkSW4odmFsdWU6IG51bWJlcikge1xuICAgICAgICB0aGlzLl9leHBpcmVkSW4gPSB2YWx1ZTtcbiAgICB9XG5cbiAgICBnZXQgdG9rZW4oKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3Rva2VuO1xuICAgIH1cblxuICAgIHNldCB0b2tlbih2YWx1ZTogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMuX3Rva2VuID0gdmFsdWU7XG4gICAgfVxuXG4gICAgc3RvcmVQcm9maWxlKGRhdGE6IExvZ2luUmVzcG9uc2UpOiB2b2lkIHtcbiAgICAgICAgdGhpcy50b2tlbiA9IGRhdGEuYWNjZXNzX3Rva2VuO1xuICAgICAgICB0aGlzLmV4cGlyZWRJbiA9IGRhdGEuZXhwaXJlc19pbjtcbiAgICAgICAgYXBwbGljYXRpb25TZXR0aW5nLnNldFN0cmluZygncHJvZmlsZScsIEpTT04uc3RyaW5naWZ5KGRhdGEpKTtcbiAgICB9XG59XG4iXX0=