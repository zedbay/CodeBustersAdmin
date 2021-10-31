import { Injectable } from '@angular/core';
import { TableLabels } from 'src/app/administration/shared/models/TableLabel.mode';
import { Event } from 'src/app/shared/models/event';
import { NetworkService } from './network.service';
import { ResourcesService } from './resources.service';

@Injectable({
  providedIn: 'root'
})
export class EventService extends ResourcesService<Event> {

  public labels: TableLabels[] = [
    { value: 'Name', key: 'name' },
  ];

  constructor(
    public networkService: NetworkService
  ) {
    super('event', networkService);
  }

  public searchNameOnResource(event: Event): string {
    return event.name;
  }

}
