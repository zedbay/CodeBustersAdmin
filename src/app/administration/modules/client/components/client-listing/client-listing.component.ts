import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TableLabels } from 'src/app/administration/shared-administration/models/TableLabel.mode';
import { Client } from 'src/app/shared/models/client';

@Component({
  selector: 'app-client-listing',
  templateUrl: './client-listing.component.html',
  styleUrls: ['./client-listing.component.scss']
})
export class ClientListingComponent implements OnInit {

  @Output() selectClient = new EventEmitter<number>();


  @Input() clients: Client[];
  public clientsLabel: TableLabels[] = [
    { value: 'Name', key: 'name' }
  ];

  public clientAction = {
    onRowClick: (id: number) => this.selectClient.emit(id)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
