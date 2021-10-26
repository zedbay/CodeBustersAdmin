import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { NetworkService } from 'src/app/core/services/network.service';
import { ResourcesService } from 'src/app/core/services/resources.service';
import { Techno } from 'src/app/shared/models/techno';

@Injectable({
  providedIn: 'root'
})
export class TechnoService extends ResourcesService<Techno> {

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

}
