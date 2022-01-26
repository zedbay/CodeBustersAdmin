import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ResourceComponent } from 'src/app/modules/administration/shared/components/resource/resource.component';
import { TableAction } from 'src/app/modules/administration/shared/models/TableActions.model';
import { SquadService } from 'src/app/core/services/squad.service';
import { Squad } from 'src/app/shared/models/squad';

@Component({
  selector: 'app-squad',
  templateUrl: './squad.component.html',
  styleUrls: ['./squad.component.scss']
})
export class SquadComponent extends ResourceComponent<Squad> {

  public squadsListingAction: TableAction = {
    onDelete: (squadId: number) => this.deleteResource(squadId),
    onRowClick: (squadId: number) => this.selectResource(squadId)
  }

  constructor(
    public activeRoute: ActivatedRoute,
    public squadService: SquadService
  ) {
    super(
      activeRoute,
      squadService
    );
  }

}
