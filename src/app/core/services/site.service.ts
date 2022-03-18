import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Site } from 'src/app/shared/models/site';
import { TableLabels } from 'src/app/shared/models/TableLabel.mode';
import { NetworkService } from './network.service';
import { ResourcesService } from './resources.service';

@Injectable({
  providedIn: 'root'
})
export class SiteService extends ResourcesService<Site> {

  public labels: TableLabels<Site>[];

  constructor(
    public networkService: NetworkService
  ) {
    super(
      'site',
      networkService
    );
  }

  public getRandomNews(): Observable<any[]> {
    return this.networkService.get(`${this.endpoint}/lastNews`);
  }

  public getSiteConfig(): Observable<Site> {
    return this.list().pipe(
      map((configs: Site[]) => configs[0])
    );
  }

  public searchNameOnResource(resource: Site): string {
    throw new Error('Method not implemented.');
  }
}
