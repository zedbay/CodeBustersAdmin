import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { LoginService } from '../services/login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(
    private router: Router,
    private loginService: LoginService
  ) { }

  public canActivate(): boolean {
    if (this.loginService.isConnected()) {
      return true;
    }
    this.router.navigate(['admin/login']);
    return false;
  }

}


