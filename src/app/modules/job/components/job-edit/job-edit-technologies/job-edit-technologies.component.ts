import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { JobService } from 'src/app/core/services/job.service';
import { TechnoService } from 'src/app/core/services/techno.service';
import { TableAction } from 'src/app/shared/models/TableActions.model';
import { Techno } from 'src/app/shared/models/techno';

@Component({
  selector: 'app-job-edit-technologies',
  templateUrl: './job-edit-technologies.component.html',
  styleUrls: ['./job-edit-technologies.component.scss']
})
export class JobEditTechnologiesComponent implements OnInit {

  @Input() technologies: Techno[];

  public technologiesListingAction: TableAction = {
    onDelete: (technoId: number) => this.onDeleteTechno(technoId),
    onConsult: (technoId: number) => this.router.navigate(['/admin/technology'], { queryParams: { resourceId: technoId } })
  }

  constructor(
    public technoService: TechnoService,
    private jobService: JobService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  public modifyTechnoRelation(skillCap: number, techno: Techno) {
    const resourceId = this.activatedRoute.snapshot.queryParams.resourceId;
    this.jobService.updateTechnoRelation(resourceId, techno.id, { skillCap }).subscribe(
      (b) => console.log(b)
    )
  }

  public addTechno(techno: Techno) {
    const resourceId = this.activatedRoute.snapshot.queryParams.resourceId;
    this.jobService.addTechnoInJob(resourceId, techno.id).subscribe(
      () => this.technologies.push(techno)
    );
  }

  private onDeleteTechno(technoId: number) {
    const resourceId = this.activatedRoute.snapshot.queryParams.resourceId;
    this.jobService.removeTechnoInJob(resourceId, technoId).subscribe(
      () => this.technologies = this.technologies.filter((t) => t.id !== technoId)
    );
  }

}
