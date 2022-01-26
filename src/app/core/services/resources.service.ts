import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TableLabels } from 'src/app/modules/administration/shared/models/TableLabel.mode';
import { Resource } from 'src/app/shared/models/ressource';
import { NetworkService } from './network.service';

@Injectable({
  providedIn: 'root'
})
export abstract class ResourcesService<T extends Resource> {

  public abstract labels: TableLabels<T>[];

  constructor(
    @Inject('endpoint') public endpoint: string,
    public networkService: NetworkService
  ) { }

  public list(): Observable<T[]> {
    return this.networkService
      .get<T[]>(this.endpoint);
  }

  public create(item: T): Observable<T> {
    return this.networkService
      .post<T>(this.endpoint, item);
  }

  public delete(ressourceId: number): Observable<void> {
    return this.networkService
      .delete<void>(`${this.endpoint}/${ressourceId}`);
  }

  public update(item: T): Observable<any> {
    return this.networkService
      .put<any>(`${this.endpoint}/${item.id}`, item);
  }

  public read(ressourceId: number): Observable<T> {
    return this.networkService
      .get<T>(`${this.endpoint}/${ressourceId}`);
  }

  public abstract searchNameOnResource(resource: T): string;

}
