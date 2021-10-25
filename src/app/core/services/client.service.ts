import { Injectable } from '@angular/core';
import { NetworkService } from 'src/app/core/services/network.service';
import { ResourcesService } from 'src/app/core/services/resources.service';
import { Client } from 'src/app/shared/models/client';

@Injectable({
  providedIn: 'root'
})
export class ClientService extends ResourcesService<Client> {

  constructor(
    public networkService: NetworkService
  ) {
    super(
      'client',
      networkService
    );
  }

}
