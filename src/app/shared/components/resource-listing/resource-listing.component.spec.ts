import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResourceListingComponent } from './resource-listing.component';

describe('ResourceListingComponent', () => {
  let component: ResourceListingComponent;
  let fixture: ComponentFixture<ResourceListingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResourceListingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResourceListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
