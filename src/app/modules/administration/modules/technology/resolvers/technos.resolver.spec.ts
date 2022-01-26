import { TestBed } from '@angular/core/testing';

import { TechnosResolver } from './technos.resolver';

describe('TechnosResolver', () => {
  let resolver: TechnosResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(TechnosResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
