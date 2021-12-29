import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { JobService } from 'src/app/core/services/job.service';
import { Job } from 'src/app/shared/models/job';

@Injectable({
  providedIn: 'root'
})
export class JobsResolver implements Resolve<Job[]> {

  constructor(
    private jobService: JobService
  ) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Job[]> {
    return this.jobService.list();
  }

}
