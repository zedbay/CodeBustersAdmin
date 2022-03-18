import { Injectable } from '@angular/core';
import { NetworkService } from 'src/app/core/services/network.service';
import { ResourcesService } from 'src/app/core/services/resources.service';
import { Squad } from 'src/app/shared/models/squad';
import { TableLabels } from 'src/app/shared/models/TableLabel.mode';

@Injectable({
  providedIn: 'root'
})
export class SquadService extends ResourcesService<Squad> {

  public labels: TableLabels<Squad>[] = [
    { value: 'Name', key: 'name' },
  ];

  constructor(
    public networkService: NetworkService
  ) {
    super(
      'squad',
      networkService
    );
  }

  public searchNameOnResource(squad: Squad): string {
    return squad.name;
  }
}
