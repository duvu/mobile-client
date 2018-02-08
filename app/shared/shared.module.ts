import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptFormsModule} from 'nativescript-angular';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { NativeScriptUISideDrawerModule } from 'nativescript-pro-ui/sidedrawer/angular';

import { MyDrawerItemComponent } from './my-drawer-item/my-drawer-item.component';
import { MyDrawerComponent } from './my-drawer/my-drawer.component';

@NgModule({
    imports: [
        NativeScriptCommonModule,
        NativeScriptUISideDrawerModule,
        NativeScriptFormsModule
    ],
    declarations: [
        MyDrawerComponent,
        MyDrawerItemComponent
    ],
    exports: [
        MyDrawerComponent,
        NativeScriptUISideDrawerModule,
        NativeScriptFormsModule
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class SharedModule { }
