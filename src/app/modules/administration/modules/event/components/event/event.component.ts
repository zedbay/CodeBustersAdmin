import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ResourceComponent } from 'src/app/modules/administration/shared/components/resource/resource.component';
import { TableAction } from 'src/app/modules/administration/shared/models/TableActions.model';
import { EventService } from 'src/app/core/services/event.service';
import { Event } from 'src/app/shared/models/event';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent extends ResourceComponent<Event> {

  public eventsListingAction: TableAction = {
    onDelete: (eventId: number) => this.deleteResource(eventId),
    onRowClick: (eventId: number) => this.selectResource(eventId)
  }

  constructor(
    public activeRoute: ActivatedRoute,
    public eventService: EventService
  ) {
    super(activeRoute, eventService);
  }

}
