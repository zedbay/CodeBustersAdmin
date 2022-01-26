import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { EventService } from 'src/app/core/services/event.service';
import { Event } from 'src/app/shared/models/event';

@Injectable({
  providedIn: 'root'
})
export class EventsResolver implements Resolve<Event[]> {

  constructor(
    private eventService: EventService
  ) { }

  resolve(): Observable<Event[]> {
    return this.eventService.list();
  }

}
