import { TestBed } from '@angular/core/testing';

import { EventEditResolver } from './event-edit.resolver';

describe('EventEditResolver', () => {
  let resolver: EventEditResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(EventEditResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
