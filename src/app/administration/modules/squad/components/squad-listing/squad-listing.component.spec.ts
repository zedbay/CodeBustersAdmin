import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SquadListingComponent } from './squad-listing.component';

describe('SquadListingComponent', () => {
  let component: SquadListingComponent;
  let fixture: ComponentFixture<SquadListingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SquadListingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SquadListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
