import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ResourceComponent } from 'src/app/administration/shared/components/resource/resource.component';
import { TableAction } from 'src/app/administration/shared/models/TableActions.model';
import { TechnoService } from 'src/app/core/services/techno.service';
import { Techno } from 'src/app/shared/models/techno';

@Component({
  selector: 'app-technology',
  templateUrl: './technology.component.html',
  styleUrls: ['./technology.component.scss']
})
export class TechnologyComponent extends ResourceComponent<Techno> {

  public technologiesListingAction: TableAction = {
    onDelete: (technoId: number) => this.deleteResource(technoId),
    onRowClick: (technoId: number) => this.selectResource(technoId)
  }

  constructor(
    public activeRoute: ActivatedRoute,
    public technoService: TechnoService
  ) {
    super(
      activeRoute,
      technoService
    );
  }

}
