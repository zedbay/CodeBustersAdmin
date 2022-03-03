import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { forkJoin, Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { BusterService } from 'src/app/core/services/buster.service';
import { EventService } from 'src/app/core/services/event.service';
import { Buster } from 'src/app/shared/models/buster';
import { Event } from 'src/app/shared/models/event';

interface HomeData {
  buster: Buster;
  event: Event;
}

@Injectable({
  providedIn: 'root'
})
export class HomeResolver implements Resolve<HomeData> {

  constructor(
    private busterService: BusterService,
    private eventService: EventService
  ) { }

  resolve(): Observable<HomeData> {
    return forkJoin({
      buster: this.busterService.list(),
      event: this.eventService.list()
    }).pipe(
      map((data) => ({
        buster: data.buster[0],
        event: data.event[0]
      }))
    )
  }
}
