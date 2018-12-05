"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("nativescript-angular/common");
var shared_module_1 = require("../../shared/shared.module");
var featured_routing_module_1 = require("./featured-routing.module");
var featured_component_1 = require("./featured.component");
var FeaturedModule = /** @class */ (function () {
    function FeaturedModule() {
    }
    FeaturedModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.NativeScriptCommonModule,
                featured_routing_module_1.FeaturedRoutingModule,
                shared_module_1.SharedModule
            ],
            declarations: [
                featured_component_1.FeaturedComponent
            ],
            schemas: [
                core_1.NO_ERRORS_SCHEMA
            ]
        })
    ], FeaturedModule);
    return FeaturedModule;
}());
exports.FeaturedModule = FeaturedModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmVhdHVyZWQubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZmVhdHVyZWQubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJEO0FBQzNELHNEQUF1RTtBQUV2RSw0REFBMEQ7QUFDMUQscUVBQWtFO0FBQ2xFLDJEQUF5RDtBQWV6RDtJQUFBO0lBQThCLENBQUM7SUFBbEIsY0FBYztRQWIxQixlQUFRLENBQUM7WUFDTixPQUFPLEVBQUU7Z0JBQ0wsaUNBQXdCO2dCQUN4QiwrQ0FBcUI7Z0JBQ3JCLDRCQUFZO2FBQ2Y7WUFDRCxZQUFZLEVBQUU7Z0JBQ1Ysc0NBQWlCO2FBQ3BCO1lBQ0QsT0FBTyxFQUFFO2dCQUNMLHVCQUFnQjthQUNuQjtTQUNKLENBQUM7T0FDVyxjQUFjLENBQUk7SUFBRCxxQkFBQztDQUFBLEFBQS9CLElBQStCO0FBQWxCLHdDQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIE5PX0VSUk9SU19TQ0hFTUEgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Q29tbW9uTW9kdWxlIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvY29tbW9uJztcclxuXHJcbmltcG9ydCB7IFNoYXJlZE1vZHVsZSB9IGZyb20gJy4uLy4uL3NoYXJlZC9zaGFyZWQubW9kdWxlJztcclxuaW1wb3J0IHsgRmVhdHVyZWRSb3V0aW5nTW9kdWxlIH0gZnJvbSAnLi9mZWF0dXJlZC1yb3V0aW5nLm1vZHVsZSc7XHJcbmltcG9ydCB7IEZlYXR1cmVkQ29tcG9uZW50IH0gZnJvbSAnLi9mZWF0dXJlZC5jb21wb25lbnQnO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICAgIGltcG9ydHM6IFtcclxuICAgICAgICBOYXRpdmVTY3JpcHRDb21tb25Nb2R1bGUsXHJcbiAgICAgICAgRmVhdHVyZWRSb3V0aW5nTW9kdWxlLFxyXG4gICAgICAgIFNoYXJlZE1vZHVsZVxyXG4gICAgXSxcclxuICAgIGRlY2xhcmF0aW9uczogW1xyXG4gICAgICAgIEZlYXR1cmVkQ29tcG9uZW50XHJcbiAgICBdLFxyXG4gICAgc2NoZW1hczogW1xyXG4gICAgICAgIE5PX0VSUk9SU19TQ0hFTUFcclxuICAgIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIEZlYXR1cmVkTW9kdWxlIHsgfVxyXG4iXX0=