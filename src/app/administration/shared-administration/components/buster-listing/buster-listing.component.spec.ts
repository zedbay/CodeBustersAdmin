import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusterListingComponent } from './buster-listing.component';

describe('BusterListingComponent', () => {
  let component: BusterListingComponent;
  let fixture: ComponentFixture<BusterListingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BusterListingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BusterListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
