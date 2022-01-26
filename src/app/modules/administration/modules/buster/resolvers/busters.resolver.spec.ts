import { TestBed } from '@angular/core/testing';

import { BustersResolver } from './busters.resolver';

describe('BustersResolver', () => {
  let resolver: BustersResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(BustersResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
