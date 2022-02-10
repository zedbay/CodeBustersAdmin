import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { JobService } from 'src/app/core/services/job.service';
import { SquadService } from 'src/app/core/services/squad.service';
import { Job } from '../models/job';

@Injectable({
  providedIn: 'root'
})
export class JobResolver implements Resolve<Job> {

  constructor(
    private jobService: JobService
  ) { }


  resolve(route: ActivatedRouteSnapshot): Observable<Job> {
    const jobId = Number(route.paramMap.get('jobId'));
    return this.jobService.read(jobId);
  }
}
