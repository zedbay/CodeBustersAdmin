import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClientService } from 'src/app/core/services/client.service';
import { Client } from 'src/app/shared/models/client';
import { TableLabels } from '../../../../shared-administration/models/TableLabel.mode';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss']
})
export class ClientComponent implements OnInit {

  public clients: Client[] = this.activeRoute.snapshot.data.clients;
  public clientsLabel: TableLabels[] = [
    { value: 'Name', key: 'name' }
  ];

  public selectedClient: Client;

  constructor(
    private activeRoute: ActivatedRoute,
    private clientService: ClientService
  ) { }

  ngOnInit(): void {
    this.selectClient(this.clients[0].id);
  }

  public selectClient(clientId: number) {
    this.clientService.read(clientId).subscribe(
      (client: Client) => this.selectedClient = client
    );
  }

}
