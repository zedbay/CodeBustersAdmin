import { Injectable } from '@angular/core';
import { NetworkService } from './network.service';
import { map, tap } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  public storageTokenKey: string = 'token';

  constructor(
    private networkService: NetworkService,
    private router: Router
  ) { }

  public login(email: string, password: string) {
    return this.networkService.post('login', { email, password }).pipe(
      map((res: { token: string }) => res.token),
      tap((token: string) => localStorage.setItem(this.storageTokenKey, token))
    );
  }

  public isConnected(): boolean {
    const isConnected: boolean = !!localStorage.getItem(this.storageTokenKey);
    return isConnected;
  }

  public logout(): void {
    localStorage.removeItem(this.storageTokenKey);
    this.router.navigate(['admin/login']);
  }

}
