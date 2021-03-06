import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { NetworkService } from 'src/app/core/services/network.service';
import { ResourcesService } from 'src/app/core/services/resources.service';
import { TableLabels } from 'src/app/shared/models/TableLabel.mode';
import { Techno } from 'src/app/shared/models/techno';

@Injectable({
  providedIn: 'root'
})
export class TechnoService extends ResourcesService<Techno> {

  public labels: TableLabels<Techno>[] = [
    { value: 'Name', key: 'name' }
  ];

  constructor(
    public networkService: NetworkService
  ) {
    super(
      'techno',
      networkService
    );
  }

  public removeKnowledgeForBuster(technoId: number, busterId: number): Observable<boolean> {
    return this.networkService.delete(`${this.endpoint}/${technoId}/buster/${busterId}`);
  }

  public setTechnoToBuster(technoId: number, busterId: number): Observable<boolean> {
    return this.networkService.put(`${this.endpoint}/${technoId}/buster/${busterId}`);
  }

  public searchNameOnResource(techno: Techno): string {
    return techno.name;
  }

}
