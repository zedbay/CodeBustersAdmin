import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TableLabels } from 'src/app/administration/shared/models/TableLabel.mode';
import { NetworkService } from 'src/app/core/services/network.service';
import { ResourcesService } from 'src/app/core/services/resources.service';
import { Buster } from 'src/app/shared/models/buster';

@Injectable({
  providedIn: 'root'
})
export class BusterService extends ResourcesService<Buster> {

  public labels: TableLabels<Buster>[] = [
    { value: 'Name', formatter: (b: Buster) => `${b.firstName} ${b.lastName}` },
    { value: 'Rank', key: 'rank' },
  ];

  constructor(
    public networkService: NetworkService
  ) {
    super(
      'buster',
      networkService
    );
  }

  public downloadProfilPicture(busterId: number, fileName: string): Observable<File> {
    return this.networkService.downloadFile(`${this.endpoint}/download/${busterId}?fileName=${fileName}`);
  }

  public uploadProfilPicture(busterId: number, file: File): Observable<boolean> {
    const formData = new FormData();
    formData.append('file', file);
    return this.networkService.post(`${this.endpoint}/upload/${busterId}`, formData);
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
