import { TestBed } from '@angular/core/testing';

import { NewsDisplayResolver } from './news-display.resolver';

describe('NewsDisplayResolver', () => {
  let resolver: NewsDisplayResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(NewsDisplayResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
