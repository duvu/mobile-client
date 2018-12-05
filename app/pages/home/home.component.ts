import { Component, OnInit, ViewChild } from '@angular/core';
import { DrawerTransitionBase, SlideInOnTopTransition } from 'nativescript-ui-sidedrawer';
import { RadSideDrawerComponent } from 'nativescript-ui-sidedrawer/angular';
import { EventData } from '../../shared/models/event-data';
import { EventService } from '../../shared/services/event.service';

@Component({
    selector: 'Home',
    moduleId: module.id,
    templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
    events: Array<EventData>;
    /* ***********************************************************
    * Use the @ViewChild decorator to get a reference to the drawer component.
    * It is used in the "onDrawerButtonTap" function below to manipulate the drawer.
    *************************************************************/
    @ViewChild('drawer') drawerComponent: RadSideDrawerComponent;

    private _sideDrawerTransition: DrawerTransitionBase;
    constructor(private eventService: EventService) {}

    /* ***********************************************************
    * Use the sideDrawerTransition property to change the open/close animation of the drawer.
    *************************************************************/
    ngOnInit(): void {
        this._sideDrawerTransition = new SlideInOnTopTransition();

        this.eventService.getLiveEvents().subscribe(
            (data: Array<EventData>) => {
                console.log('event-size', data.length);
                this.events = data;
            },
            (error: any) => {
                console.log('error', error);
            },
            () => {
                console.log('Completed loading data');
            }
        );
    }

    get sideDrawerTransition(): DrawerTransitionBase {
        return this._sideDrawerTransition;
    }

    /* ***********************************************************
    * According to guidelines, if you have a drawer on your page, you should always
    * have a button that opens it. Use the showDrawer() function to open the app drawer section.
    *************************************************************/
    onDrawerButtonTap(): void {
        this.drawerComponent.sideDrawer.showDrawer();
    }
}
