"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'login', loadChildren: './login/login.module#LoginModule' },
    { path: 'home', loadChildren: './pages/home/home.module#HomeModule' },
    { path: 'browse', loadChildren: './pages/browse/browse.module#BrowseModule' },
    { path: 'search', loadChildren: './pages/search/search.module#SearchModule' },
    { path: 'featured', loadChildren: './pages/featured/featured.module#FeaturedModule' },
    { path: 'settings', loadChildren: './pages/settings/settings.module#SettingsModule' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.NativeScriptRouterModule.forRoot(routes)],
            exports: [router_1.NativeScriptRouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLXJvdXRpbmcubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBwLXJvdXRpbmcubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXlDO0FBRXpDLHNEQUF1RTtBQUV2RSxJQUFNLE1BQU0sR0FBVztJQUNuQixFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFO0lBQ3JELEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxZQUFZLEVBQUUsa0NBQWtDLEVBQUU7SUFDbkUsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxxQ0FBcUMsRUFBRTtJQUNyRSxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsWUFBWSxFQUFFLDJDQUEyQyxFQUFFO0lBQzdFLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxZQUFZLEVBQUUsMkNBQTJDLEVBQUU7SUFDN0UsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLFlBQVksRUFBRSxpREFBaUQsRUFBRTtJQUNyRixFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsWUFBWSxFQUFFLGlEQUFpRCxFQUFFO0NBQ3hGLENBQUM7QUFNRjtJQUFBO0lBQWdDLENBQUM7SUFBcEIsZ0JBQWdCO1FBSjVCLGVBQVEsQ0FBQztZQUNOLE9BQU8sRUFBRSxDQUFDLGlDQUF3QixDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUNuRCxPQUFPLEVBQUUsQ0FBQyxpQ0FBd0IsQ0FBQztTQUN0QyxDQUFDO09BQ1csZ0JBQWdCLENBQUk7SUFBRCx1QkFBQztDQUFBLEFBQWpDLElBQWlDO0FBQXBCLDRDQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFJvdXRlcyB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZSB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlcic7XHJcblxyXG5jb25zdCByb3V0ZXM6IFJvdXRlcyA9IFtcclxuICAgIHsgcGF0aDogJycsIHJlZGlyZWN0VG86ICcvbG9naW4nLCBwYXRoTWF0Y2g6ICdmdWxsJyB9LFxyXG4gICAgeyBwYXRoOiAnbG9naW4nLCBsb2FkQ2hpbGRyZW46ICcuL2xvZ2luL2xvZ2luLm1vZHVsZSNMb2dpbk1vZHVsZScgfSxcclxuICAgIHsgcGF0aDogJ2hvbWUnLCBsb2FkQ2hpbGRyZW46ICcuL3BhZ2VzL2hvbWUvaG9tZS5tb2R1bGUjSG9tZU1vZHVsZScgfSxcclxuICAgIHsgcGF0aDogJ2Jyb3dzZScsIGxvYWRDaGlsZHJlbjogJy4vcGFnZXMvYnJvd3NlL2Jyb3dzZS5tb2R1bGUjQnJvd3NlTW9kdWxlJyB9LFxyXG4gICAgeyBwYXRoOiAnc2VhcmNoJywgbG9hZENoaWxkcmVuOiAnLi9wYWdlcy9zZWFyY2gvc2VhcmNoLm1vZHVsZSNTZWFyY2hNb2R1bGUnIH0sXHJcbiAgICB7IHBhdGg6ICdmZWF0dXJlZCcsIGxvYWRDaGlsZHJlbjogJy4vcGFnZXMvZmVhdHVyZWQvZmVhdHVyZWQubW9kdWxlI0ZlYXR1cmVkTW9kdWxlJyB9LFxyXG4gICAgeyBwYXRoOiAnc2V0dGluZ3MnLCBsb2FkQ2hpbGRyZW46ICcuL3BhZ2VzL3NldHRpbmdzL3NldHRpbmdzLm1vZHVsZSNTZXR0aW5nc01vZHVsZScgfVxyXG5dO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICAgIGltcG9ydHM6IFtOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUuZm9yUm9vdChyb3V0ZXMpXSxcclxuICAgIGV4cG9ydHM6IFtOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGVdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBcHBSb3V0aW5nTW9kdWxlIHsgfVxyXG4iXX0=