import { Injectable } from '@angular/core';
import { NetworkService } from 'src/app/core/services/network.service';
import { ResourcesService } from 'src/app/core/services/resources.service';
import { Techno } from 'src/app/shared/models/techno';

@Injectable({
  providedIn: 'root'
})
export class TechnoService extends ResourcesService<Techno> {

  constructor(
    public networkService: NetworkService
  ) {
    super(
      'techno',
      networkService
    );
  }

}
