import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TableLabels } from 'src/app/administration/shared/models/TableLabel.mode';
import { Job } from 'src/app/shared/models/job';
import { NetworkService } from './network.service';
import { ResourcesService } from './resources.service';

@Injectable({
  providedIn: 'root'
})
export class JobService extends ResourcesService<Job> {

  public labels: TableLabels<Job>[] = [
    { value: 'Title', key: 'title' }
  ];

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
