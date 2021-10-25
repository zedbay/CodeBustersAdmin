import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnologyListingComponent } from './technology-listing.component';

describe('TechnologyListingComponent', () => {
  let component: TechnologyListingComponent;
  let fixture: ComponentFixture<TechnologyListingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TechnologyListingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TechnologyListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
