import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TableAction } from 'src/app/administration/shared/models/TableActions.model';
import { jobsLabel } from 'src/app/administration/shared/utils/labelsResource';
import { JobService } from 'src/app/core/services/job.service';
import { Job } from 'src/app/shared/models/job';

@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.scss']
})
export class JobComponent implements OnInit {

  public jobs: Job[] = this.activeRoute.snapshot.data.jobs;

  public selectedJob: Job = undefined;

  public creationMode: boolean = false;

  public jobsLabel = jobsLabel;

  public jobsListingAction: TableAction = {
    onDelete: (busterId: number) => this.deleteJob(busterId),
    onRowClick: (busterId: number) => this.selectJob(busterId)
  }

  constructor(
    private activeRoute: ActivatedRoute,
    private jobService: JobService
  ) { }

  ngOnInit(): void {
    this.selectJob(this.jobs[0].id);
  }

  public deleteJob(jobId: number) {
    this.jobService.delete(jobId).subscribe(
      () => this.jobs = this.jobs.filter((b) => b.id !== jobId)
    );
  }

  public onUpdateJob(updatedJob: Job) {
    this.jobs = this.jobs.map(
      (job: Job) => job.id === updatedJob.id ? updatedJob : job
    );
  }

  public selectJob(id: number) {
    this.jobService.read(id)
      .subscribe((job: Job) => {
        this.selectedJob = job;
        this.creationMode = false;
      })
  }

  public onNewJob(newJob: Job) {
    this.jobs.push(newJob);
    this.selectJob(newJob.id);
  }

}
