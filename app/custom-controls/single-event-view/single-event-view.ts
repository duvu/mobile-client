import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
    selector: 'single-event-view',
    moduleId: module.id,
    templateUrl: './single-event-view.html'
})

export class SingleEventViewComponent implements OnChanges {
    @Input() sEvent: any;
    event: any;

    ngOnChanges(changes: SimpleChanges): void {
        this.event = changes.sEvent.currentValue;
    }
}
