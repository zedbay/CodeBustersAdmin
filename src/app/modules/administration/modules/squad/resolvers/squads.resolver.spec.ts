import { TestBed } from '@angular/core/testing';

import { SquadsResolver } from './squads.resolver';

describe('SquadsResolver', () => {
  let resolver: SquadsResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(SquadsResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
