import { Injectable } from '@angular/core';
import { TableLabels } from 'src/app/administration/shared/models/TableLabel.mode';
import { NetworkService } from 'src/app/core/services/network.service';
import { ResourcesService } from 'src/app/core/services/resources.service';
import { Squad } from 'src/app/shared/models/squad';

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
