import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ResourceComponent } from 'src/app/modules/administration/shared/components/resource/resource.component';
import { TableAction } from 'src/app/modules/administration/shared/models/TableActions.model';
import { ClientService } from 'src/app/core/services/client.service';
import { Client } from 'src/app/shared/models/client';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss']
})
export class ClientComponent extends ResourceComponent<Client> {

  public clientsListingAction: TableAction = {
    onDelete: (clientId: number) => this.deleteResource(clientId),
    onRowClick: (clientId: number) => this.selectResource(clientId)
  }

  constructor(
    public activeRoute: ActivatedRoute,
    public clientService: ClientService,
    public router: Router
  ) {
    super(
      activeRoute,
      clientService,
      router
    );
  }

}
