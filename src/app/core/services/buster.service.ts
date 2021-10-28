import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { NetworkService } from 'src/app/core/services/network.service';
import { ResourcesService } from 'src/app/core/services/resources.service';
import { Buster } from 'src/app/shared/models/buster';

@Injectable({
  providedIn: 'root'
})
export class BusterService extends ResourcesService<Buster> {

  constructor(
    public networkService: NetworkService
  ) {
    super(
      'buster',
      networkService
    );
  }

  public removeMembershipOfSquad(busterId: number, squadId: number): Observable<boolean> {
    return this.networkService.delete(`${this.endpoint}/${busterId}/membership/${squadId}`);
  }

  public addMembership(busterId: number, squadId: number): Observable<boolean> {
    return this.networkService.put(`${this.endpoint}/${busterId}/membership/${squadId}`);
  }

  public addCurrentClient(busterId: number, clientId: number): Observable<boolean> {
    return this.networkService.put(`${this.endpoint}/${busterId}/client/${clientId}`);
  }

  public removeCurrentClient(busterId: number, clientId: number): Observable<boolean> {
    return this.networkService.delete(`${this.endpoint}/${busterId}/client/${clientId}`);
  }

  public removeManagement(busterId: number, squadId: number): Observable<boolean> {
    return this.networkService.delete(`${this.endpoint}/${busterId}/manage/${squadId}`);
  }

  public addManagement(busterId: number, squadId: number): Observable<boolean> {
    return this.networkService.put(`${this.endpoint}/${busterId}/manage/${squadId}`);
  }

  public searchNameOnResource(buster: Buster): string {
    return `${buster.firstName} ${buster.lastName}`;
  }

}
