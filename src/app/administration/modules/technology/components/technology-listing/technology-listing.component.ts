import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TableAction } from 'src/app/administration/shared-administration/models/TableActions.model';
import { TableLabels } from 'src/app/administration/shared-administration/models/TableLabel.mode';
import { Techno } from 'src/app/shared/models/techno';

@Component({
  selector: 'app-technology-listing',
  templateUrl: './technology-listing.component.html',
  styleUrls: ['./technology-listing.component.scss']
})
export class TechnologyListingComponent implements OnInit {

  @Output() selectTechnology = new EventEmitter<number>();
  @Output() deleteTechnology = new EventEmitter<number>();

  @Input() technos: Techno[] = [];

  public technoAction: TableAction = {
    onRowClick: (id: number) => this.selectTechnology.emit(id),
    onDelete: (id: number) => this.deleteTechnology.emit(id)
  }

  public technologyLabels: TableLabels[] = [
    { value: 'Name', key: 'name' }
  ];

  constructor(
  ) { }

  ngOnInit(): void {
  }

}
