"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("nativescript-angular/common");
var shared_module_1 = require("../../shared/shared.module");
var search_routing_module_1 = require("./search-routing.module");
var search_component_1 = require("./search.component");
var SearchModule = /** @class */ (function () {
    function SearchModule() {
    }
    SearchModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.NativeScriptCommonModule,
                search_routing_module_1.SearchRoutingModule,
                shared_module_1.SharedModule
            ],
            declarations: [
                search_component_1.SearchComponent
            ],
            schemas: [
                core_1.NO_ERRORS_SCHEMA
            ]
        })
    ], SearchModule);
    return SearchModule;
}());
exports.SearchModule = SearchModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNlYXJjaC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkQ7QUFDM0Qsc0RBQXVFO0FBRXZFLDREQUEwRDtBQUMxRCxpRUFBOEQ7QUFDOUQsdURBQXFEO0FBZXJEO0lBQUE7SUFBNEIsQ0FBQztJQUFoQixZQUFZO1FBYnhCLGVBQVEsQ0FBQztZQUNOLE9BQU8sRUFBRTtnQkFDTCxpQ0FBd0I7Z0JBQ3hCLDJDQUFtQjtnQkFDbkIsNEJBQVk7YUFDZjtZQUNELFlBQVksRUFBRTtnQkFDVixrQ0FBZTthQUNsQjtZQUNELE9BQU8sRUFBRTtnQkFDTCx1QkFBZ0I7YUFDbkI7U0FDSixDQUFDO09BQ1csWUFBWSxDQUFJO0lBQUQsbUJBQUM7Q0FBQSxBQUE3QixJQUE2QjtBQUFoQixvQ0FBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBOT19FUlJPUlNfU0NIRU1BIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdENvbW1vbk1vZHVsZSB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL2NvbW1vbic7XHJcblxyXG5pbXBvcnQgeyBTaGFyZWRNb2R1bGUgfSBmcm9tICcuLi8uLi9zaGFyZWQvc2hhcmVkLm1vZHVsZSc7XHJcbmltcG9ydCB7IFNlYXJjaFJvdXRpbmdNb2R1bGUgfSBmcm9tICcuL3NlYXJjaC1yb3V0aW5nLm1vZHVsZSc7XHJcbmltcG9ydCB7IFNlYXJjaENvbXBvbmVudCB9IGZyb20gJy4vc2VhcmNoLmNvbXBvbmVudCc7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gICAgaW1wb3J0czogW1xyXG4gICAgICAgIE5hdGl2ZVNjcmlwdENvbW1vbk1vZHVsZSxcclxuICAgICAgICBTZWFyY2hSb3V0aW5nTW9kdWxlLFxyXG4gICAgICAgIFNoYXJlZE1vZHVsZVxyXG4gICAgXSxcclxuICAgIGRlY2xhcmF0aW9uczogW1xyXG4gICAgICAgIFNlYXJjaENvbXBvbmVudFxyXG4gICAgXSxcclxuICAgIHNjaGVtYXM6IFtcclxuICAgICAgICBOT19FUlJPUlNfU0NIRU1BXHJcbiAgICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTZWFyY2hNb2R1bGUgeyB9XHJcbiJdfQ==