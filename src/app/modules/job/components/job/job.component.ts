import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ResourceComponent } from 'src/app/shared/components/resource/resource.component';
import { TableAction } from 'src/app/shared/models/TableActions.model';
import { JobService } from 'src/app/core/services/job.service';
import { Job } from 'src/app/shared/models/job';

@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.scss']
})
export class JobComponent extends ResourceComponent<Job>{

  public jobsListingAction: TableAction = {
    onDelete: (busterId: number) => this.deleteResource(busterId),
    onRowClick: (busterId: number) => this.selectResource(busterId)
  }

  constructor(
    public activeRoute: ActivatedRoute,
    public jobService: JobService,
    public router: Router
  ) {
    super(
      activeRoute,
      jobService,
      router
    );
  }

  test(ressourceId: number) {

  }

}
