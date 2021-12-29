import { Injectable } from '@angular/core';
import { Resolve, } from '@angular/router';
import { Observable } from 'rxjs';
import { SiteService } from 'src/app/core/services/site.service';
import { Site } from '../models/site';

@Injectable({
  providedIn: 'root'
})
export class SiteResolver implements Resolve<Site> {

  constructor(
    private siteService: SiteService
  ) { }


  resolve(): Observable<Site> {
    return this.siteService.getSiteConfig();
  }
}
