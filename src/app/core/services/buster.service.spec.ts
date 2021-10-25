import { TestBed } from '@angular/core/testing';

import { BusterService } from './buster.service';

describe('BusterService', () => {
  let service: BusterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BusterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
