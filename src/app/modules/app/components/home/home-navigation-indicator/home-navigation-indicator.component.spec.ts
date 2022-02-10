import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeNavigationIndicatorComponent } from './home-navigation-indicator.component';

describe('HomeNavigationIndicatorComponent', () => {
  let component: HomeNavigationIndicatorComponent;
  let fixture: ComponentFixture<HomeNavigationIndicatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeNavigationIndicatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeNavigationIndicatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
