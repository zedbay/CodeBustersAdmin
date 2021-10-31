import { Injectable } from '@angular/core';
import { TableLabels } from 'src/app/administration/shared/models/TableLabel.mode';
import { NetworkService } from 'src/app/core/services/network.service';
import { ResourcesService } from 'src/app/core/services/resources.service';
import { Client } from 'src/app/shared/models/client';

@Injectable({
  providedIn: 'root'
})
export class ClientService extends ResourcesService<Client> {

  public labels: TableLabels[] = [
    { value: 'Name', key: 'name' }
  ];

  constructor(
    public networkService: NetworkService
  ) {
    super(
      'client',
      networkService
    );
  }

  public searchNameOnResource(client: Client): string {
    return client.name;
  }

}
