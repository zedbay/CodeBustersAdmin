import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TableAction } from 'src/app/administration/shared-administration/models/TableActions.model';
import { TableLabels } from 'src/app/administration/shared-administration/models/TableLabel.mode';
import { Buster } from 'src/app/shared/models/buster';

@Component({
  selector: 'app-buster-listing',
  templateUrl: './buster-listing.component.html',
  styleUrls: ['./buster-listing.component.scss']
})
export class BusterListingComponent implements OnInit {

  @Output() deleteBuster = new EventEmitter<number>();
  @Output() selectBuster = new EventEmitter<number>();

  @Input() busters: Buster[] = [];
  public bustersLabel: TableLabels[] = [
    { value: 'Name', formatter: (b: Buster) => `${b.firstName} ${b.lastName}` },
    { value: 'Email', key: 'email' },
    { value: 'Rank', key: 'rank' },
  ];
  public busterAction: TableAction = {
    onRowClick: (id: number) => this.selectBuster.emit(id),
    onDelete: (id: number) => this.deleteBuster.emit(id)
  }

  constructor(
  ) { }

  ngOnInit(): void {
  }


}
