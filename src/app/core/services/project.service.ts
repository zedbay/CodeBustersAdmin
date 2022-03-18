import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { NetworkService } from 'src/app/core/services/network.service';
import { ResourcesService } from 'src/app/core/services/resources.service';
import { Project } from 'src/app/shared/models/project';
import { TableLabels } from 'src/app/shared/models/TableLabel.mode';

@Injectable({
  providedIn: 'root'
})
export class ProjectService extends ResourcesService<Project> {

  public labels: TableLabels<Project>[] = [
    { value: 'Name', key: 'name' }
  ];

  constructor(
    public networkService: NetworkService
  ) {
    super(
      'project',
      networkService
    );
  }

  public searchNameOnResource(resource: Project): string {
    return resource.name;
  }

  public addRelatedTechno(projectId: number, technoId: number): Observable<boolean> {
    return this.networkService.put(`${this.endpoint}/${projectId}/techno/${technoId}`);
  }

  public deleteRelatedTechno(projectId: number, technoId: number): Observable<boolean> {
    return this.networkService.delete(`${this.endpoint}/${projectId}/techno/${technoId}`);
  }

  public addWorker(projectId: number, busterId: number): Observable<boolean> {
    return this.networkService.put(`${this.endpoint}/${projectId}/buster/${busterId}`);
  }

  public deleteWorker(projectId: number, busterId: number): Observable<boolean> {
    return this.networkService.delete(`${this.endpoint}/${projectId}/buster/${busterId}`);
  }

}
