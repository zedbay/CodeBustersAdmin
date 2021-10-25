import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TableAction } from 'src/app/administration/shared-administration/models/TableActions.model';
import { TableLabels } from 'src/app/administration/shared-administration/models/TableLabel.mode';
import { Squad } from 'src/app/shared/models/squad';

@Component({
  selector: 'app-squad-listing',
  templateUrl: './squad-listing.component.html',
  styleUrls: ['./squad-listing.component.scss']
})
export class SquadListingComponent implements OnInit {

  @Output() selectSquad = new EventEmitter<number>();
  @Output() deleteSquad = new EventEmitter<number>();

  @Input() squads: Squad[] = [];

  public squadsLabel: TableLabels[] = [
    { value: 'Name', key: 'name' },
  ];

  public squadAction: TableAction = {
    onRowClick: (id: number) => this.selectSquad.emit(id),
    onDelete: (id: number) => this.deleteSquad.emit(id)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
