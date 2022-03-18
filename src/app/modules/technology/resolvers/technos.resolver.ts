import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { TechnoService } from 'src/app/core/services/techno.service';
import { Techno } from 'src/app/shared/models/techno';

@Injectable({
  providedIn: 'root'
})
export class TechnosResolver implements Resolve<Techno[]> {

  constructor(
    private technoService: TechnoService
  ) { }


  resolve(): Observable<Techno[]> {
    return this.technoService.list();
  }
}
