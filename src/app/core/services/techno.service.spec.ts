import { TestBed } from '@angular/core/testing';

import { TechnoService } from './techno.service';

describe('TechnoService', () => {
  let service: TechnoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TechnoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
