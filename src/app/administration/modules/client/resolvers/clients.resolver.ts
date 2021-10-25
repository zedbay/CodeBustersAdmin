import { Injectable } from '@angular/core';
import {
  Resolve
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { ClientService } from 'src/app/core/services/client.service';
import { Client } from 'src/app/shared/models/client';

@Injectable({
  providedIn: 'root'
})
export class ClientsResolver implements Resolve<Client[]> {

  constructor(
    private clientService: ClientService
  ) { }

  resolve(): Observable<Client[]> {
    return this.clientService.list();
  }

}
