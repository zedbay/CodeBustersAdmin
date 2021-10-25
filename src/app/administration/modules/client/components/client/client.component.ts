import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClientService } from 'src/app/core/services/client.service';
import { Client } from 'src/app/shared/models/client';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss']
})
export class ClientComponent implements OnInit {

  public clients: Client[] = this.activeRoute.snapshot.data.clients;

  public creationMode: boolean = false;

  public selectedClient: Client;

  constructor(
    private activeRoute: ActivatedRoute,
    private clientService: ClientService
  ) { }

  ngOnInit(): void {
    this.selectClient(this.clients[0].id);
  }

  public deleteClient(clientId: number) {
    this.clientService.delete(clientId).subscribe(
      () => this.clients = this.clients.filter((s) => s.id !== clientId)
    );
  }

  public selectClient(clientId: number) {
    this.clientService.read(clientId).subscribe(
      (client: Client) => {
        this.selectedClient = client;
        this.creationMode = false;
      }
    );
  }

  public onUpdatClient(updatedClient: Client) {
    this.clients = this.clients.map(
      (client: Client) => client.id === updatedClient.id ? updatedClient : client
    );
  }

  public onClientCreation(client: Client) {
    this.clients.push(client);
    this.selectClient(client.id);
  }

}
