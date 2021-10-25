import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TableLabels } from 'src/app/administration/shared-administration/models/TableLabel.mode';
import { TechnoService } from 'src/app/core/services/techno.service';
import { Techno } from 'src/app/shared/models/techno';

@Component({
  selector: 'app-technology-listing',
  templateUrl: './technology-listing.component.html',
  styleUrls: ['./technology-listing.component.scss']
})
export class TechnologyListingComponent implements OnInit {

  @Output() selectTechnology = new EventEmitter<number>();

  @Input() technos: Techno[] = [];

  public technoAction = {
    onRowClick: (id: number) => this.selectTechnology.emit(id)
  }

  public technologyLabels: TableLabels[] = [
    { value: 'Name', key: 'name' }
  ];


  constructor(
    private technoService: TechnoService
  ) { }

  ngOnInit(): void {
  }

}
