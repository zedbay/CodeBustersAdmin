import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { BusterService } from 'src/app/core/services/buster.service';
import { LoginService } from 'src/app/core/services/login.service';
import { Buster } from 'src/app/shared/models/buster';

@Injectable({
  providedIn: 'root'
})
export class WhoamiResolver implements Resolve<Buster> {

  constructor(
    private busterService: BusterService
  ) { }

  resolve(): Observable<Buster> {
    return this.busterService.whoami();
  }
}
