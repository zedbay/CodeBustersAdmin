import { Injectable } from '@angular/core';
import {
  Resolve
} from '@angular/router';
import { Observable } from 'rxjs';
import { SquadService } from 'src/app/core/services/squad.service';
import { Squad } from 'src/app/shared/models/squad';

@Injectable({
  providedIn: 'root'
})
export class SquadsResolver implements Resolve<Squad[]> {

  constructor(
    private squadService: SquadService
  ) { }


  resolve(): Observable<Squad[]> {
    return this.squadService.list();
  }


}
