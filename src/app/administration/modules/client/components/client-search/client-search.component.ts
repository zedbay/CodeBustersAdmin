import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ClientService } from 'src/app/core/services/client.service';
import { Client } from 'src/app/shared/models/client';

@Component({
  selector: 'app-client-search',
  templateUrl: './client-search.component.html',
  styleUrls: ['./client-search.component.scss']
})
export class ClientSearchComponent implements OnInit {

  @Output() clientSelection = new EventEmitter<Client>();

  public clients: Client[];

  public research: string;

  public results: string[];

  public selectedClient: Client;


  constructor(
    private clientService: ClientService
  ) { }

  ngOnInit(): void {
    this.clientService.list().subscribe(
      (clients: Client[]) => this.clients = clients
    );
  }

  public search(event) {
    this.results = this.clients
      .map((client: Client) => client.name)
      .filter((clientName: string) => clientName.toLocaleLowerCase().includes(event.query.toLocaleLowerCase()));
  }

  public selectClient(clientName: string) {
    const squadSelected: Client = this.clients.find((s) => s.name === clientName);
    this.selectedClient = squadSelected;
  }

  public emitClient() {
    if (this.selectedClient) {
      this.clientSelection.emit(this.selectedClient);
    }
  }

}
