import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ResourceComponent } from 'src/app/administration/shared/components/resource/resource.component';
import { TableAction } from 'src/app/administration/shared/models/TableActions.model';
import { BusterService } from 'src/app/core/services/buster.service';
import { Buster } from 'src/app/shared/models/buster';

@Component({
  selector: 'app-buster',
  templateUrl: './buster.component.html',
  styleUrls: ['./buster.component.scss']
})
export class BusterComponent extends ResourceComponent<Buster>{

  public bustersListingAction: TableAction = {
    onDelete: (busterId: number) => this.deleteResource(busterId),
    onRowClick: (busterId: number) => this.selectResource(busterId)
  }

  constructor(
    public activeRoute: ActivatedRoute,
    public busterService: BusterService
  ) {
    super(activeRoute, busterService);
  }

}
