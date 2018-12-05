"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var http_1 = require("@angular/common/http");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var EventService = /** @class */ (function () {
    function EventService(http, router) {
        this._router = router;
        this._http = http;
        this._url = '/api/track/';
    }
    EventService.prototype.getLiveEvents = function () {
        var url = this._url + 'live';
        return this._http.get(url);
    };
    EventService.prototype.getHistoryEvents = function (deviceId, timeFrom, timeTo) {
        var url = this._url + 'history/' + deviceId;
        var params = new http_1.HttpParams();
        params = params.append('timeFrom', String(timeFrom));
        params = params.append('timeTo', String(timeTo));
        return this._http.get(url, { params: params });
    };
    EventService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient, router_1.Router])
    ], EventService);
    return EventService;
}());
exports.EventService = EventService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXZlbnQuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImV2ZW50LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSw2Q0FBOEQ7QUFDOUQsc0NBQTJDO0FBQzNDLDBDQUF5QztBQUt6QztJQUtJLHNCQUFZLElBQWdCLEVBQUUsTUFBYztRQUN4QyxJQUFJLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQztRQUN0QixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztRQUNsQixJQUFJLENBQUMsSUFBSSxHQUFHLGFBQWEsQ0FBQztJQUM5QixDQUFDO0lBRUQsb0NBQWEsR0FBYjtRQUNJLElBQU0sR0FBRyxHQUFHLElBQUksQ0FBQyxJQUFJLEdBQUcsTUFBTSxDQUFDO1FBQy9CLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBbUIsR0FBRyxDQUFDLENBQUM7SUFDakQsQ0FBQztJQUNELHVDQUFnQixHQUFoQixVQUFpQixRQUFnQixFQUFFLFFBQWdCLEVBQUUsTUFBYztRQUMvRCxJQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsSUFBSSxHQUFHLFVBQVUsR0FBRyxRQUFRLENBQUM7UUFDOUMsSUFBSSxNQUFNLEdBQUcsSUFBSSxpQkFBVSxFQUFFLENBQUM7UUFDOUIsTUFBTSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsVUFBVSxFQUFFLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO1FBQ3JELE1BQU0sR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRSxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztRQUNqRCxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQW1CLEdBQUcsRUFBRSxFQUFDLE1BQU0sUUFBQSxFQUFDLENBQUMsQ0FBQztJQUMzRCxDQUFDO0lBckJRLFlBQVk7UUFEeEIsaUJBQVUsRUFBRTt5Q0FNUyxpQkFBVSxFQUFVLGVBQU07T0FMbkMsWUFBWSxDQXNCeEI7SUFBRCxtQkFBQztDQUFBLEFBdEJELElBc0JDO0FBdEJZLG9DQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSHR0cENsaWVudCwgSHR0cFBhcmFtcyB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcy9PYnNlcnZhYmxlJztcbmltcG9ydCB7IEV2ZW50RGF0YSB9IGZyb20gJy4uL21vZGVscy9ldmVudC1kYXRhJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEV2ZW50U2VydmljZSB7XG4gICAgcHJpdmF0ZSBfaHR0cDogSHR0cENsaWVudDtcbiAgICBwcml2YXRlIF9yb3V0ZXI6IFJvdXRlcjtcbiAgICBwcml2YXRlIF91cmw6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKGh0dHA6IEh0dHBDbGllbnQsIHJvdXRlcjogUm91dGVyKSB7XG4gICAgICAgIHRoaXMuX3JvdXRlciA9IHJvdXRlcjtcbiAgICAgICAgdGhpcy5faHR0cCA9IGh0dHA7XG4gICAgICAgIHRoaXMuX3VybCA9ICcvYXBpL3RyYWNrLyc7XG4gICAgfVxuXG4gICAgZ2V0TGl2ZUV2ZW50cygpOiBPYnNlcnZhYmxlPEFycmF5PEV2ZW50RGF0YT4+IHtcbiAgICAgICAgY29uc3QgdXJsID0gdGhpcy5fdXJsICsgJ2xpdmUnO1xuICAgICAgICByZXR1cm4gdGhpcy5faHR0cC5nZXQ8QXJyYXk8RXZlbnREYXRhPj4odXJsKTtcbiAgICB9XG4gICAgZ2V0SGlzdG9yeUV2ZW50cyhkZXZpY2VJZDogc3RyaW5nLCB0aW1lRnJvbTogbnVtYmVyLCB0aW1lVG86IG51bWJlcik6IE9ic2VydmFibGU8QXJyYXk8RXZlbnREYXRhPj4ge1xuICAgICAgICBjb25zdCB1cmwgPSB0aGlzLl91cmwgKyAnaGlzdG9yeS8nICsgZGV2aWNlSWQ7XG4gICAgICAgIGxldCBwYXJhbXMgPSBuZXcgSHR0cFBhcmFtcygpO1xuICAgICAgICBwYXJhbXMgPSBwYXJhbXMuYXBwZW5kKCd0aW1lRnJvbScsIFN0cmluZyh0aW1lRnJvbSkpO1xuICAgICAgICBwYXJhbXMgPSBwYXJhbXMuYXBwZW5kKCd0aW1lVG8nLCBTdHJpbmcodGltZVRvKSk7XG4gICAgICAgIHJldHVybiB0aGlzLl9odHRwLmdldDxBcnJheTxFdmVudERhdGE+Pih1cmwsIHtwYXJhbXN9KTtcbiAgICB9XG59XG4iXX0=