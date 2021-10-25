import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NetworkService {
  constructor(
    private http: HttpClient
  ) { }

  public get<T>(ressource: string): Observable<T> {
    return this.http.get<T>(`${environment.api}/${ressource}`);
  }

  public delete<T>(ressource: string): Observable<T> {
    return this.http.delete<T>(`${environment.api}/${ressource}`);
  }

  public post<T>(ressource: string, body: any): Observable<T> {
    return this.http.post<T>(`${environment.api}/${ressource}`, body);
  }

  public put<T>(ressource: string, body: any = {}): Observable<T> {
    return this.http.put<T>(`${environment.api}/${ressource}`, body);
  }
}
