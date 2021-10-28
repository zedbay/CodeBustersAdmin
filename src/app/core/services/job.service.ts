import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Job } from 'src/app/shared/models/job';
import { NetworkService } from './network.service';
import { ResourcesService } from './resources.service';

@Injectable({
  providedIn: 'root'
})
export class JobService extends ResourcesService<Job> {

  constructor(
    public networkService: NetworkService
  ) {
    super(
      'job',
      networkService
    );
  }

  public addTechnoInJob(jobId: number, technoId: number): Observable<boolean> {
    return this.networkService.put(`${this.endpoint}/${jobId}/techno/${technoId}`);
  }

  public removeTechnoInJob(jobId: number, technoId: number): Observable<boolean> {
    return this.networkService.delete(`${this.endpoint}/${jobId}/techno/${technoId}`);
  }

  public removeOfferInSquad(jobId: number, squadId: number): Observable<boolean> {
    return this.networkService.delete(`${this.endpoint}/${jobId}/squad/${squadId}`);
  }

  public addOfferInSquad(jobId: number, squadId: number): Observable<boolean> {
    return this.networkService.put(`${this.endpoint}/${jobId}/squad/${squadId}`);
  }

  public searchNameOnResource(job: Job): string {
    return job.title;
  }
}
