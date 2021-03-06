import { Injectable } from '@angular/core';
import { EMPTY, Observable } from 'rxjs';
import { NetworkService } from 'src/app/core/services/network.service';
import { ResourcesService } from 'src/app/core/services/resources.service';
import { Buster } from 'src/app/shared/models/buster';
import { ToastService } from './toast.service';
import { catchError, tap } from 'rxjs/operators';
import { LoginService } from './login.service';
import { TableLabels } from 'src/app/shared/models/TableLabel.mode';

@Injectable({
  providedIn: 'root'
})
export class BusterService extends ResourcesService<Buster> {

  public labels: TableLabels<Buster>[] = [
    { value: 'Name', formatter: (b: Buster) => `${b.firstName} ${b.lastName}` },
    { value: 'Rank', key: 'rank' },
  ];

  constructor(
    public networkService: NetworkService,
    public toastService: ToastService,
    private loginService: LoginService
  ) {
    super(
      'buster',
      networkService
    );
  }

  public whoami(): Observable<Buster> {
    return this.networkService.get<Buster>(`${this.endpoint}/whoami`)
      .pipe(
        catchError(() => {
          this.loginService.logout();
          return EMPTY;
        })
      );
  }

  public changePassword(currentPassword: string, password: string): Observable<boolean> {
    return this.networkService.put<boolean>('password', { currentPassword, password });
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
    return this.networkService
      .put<boolean>(`${this.endpoint}/${busterId}/membership/${squadId}`)
      .pipe(
        tap(
          () => this.toastService.sendToast({ severity: 'success', summary: 'Success', detail: 'Buster correctement ajouter ?? la squad.' })
        )
      );
  }

  public addCurrentClient(busterId: number, clientId: number): Observable<boolean> {
    return this.networkService
      .put<boolean>(`${this.endpoint}/${busterId}/client/${clientId}`)
      .pipe(
        tap(
          () => this.toastService.sendToast({ severity: 'success', summary: 'Success', detail: 'Client correctement ajouter' })
        )
      );
  }

  public removeCurrentClient(busterId: number, clientId: number): Observable<boolean> {
    return this.networkService
      .delete<boolean>(`${this.endpoint}/${busterId}/client/${clientId}`)
      .pipe(
        tap(
          () => this.toastService.sendToast({ severity: 'success', summary: 'Success', detail: 'Client correctement supprimer' })
        )
      );
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
