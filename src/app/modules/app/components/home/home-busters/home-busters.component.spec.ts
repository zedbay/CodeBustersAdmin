import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeBustersComponent } from './home-busters.component';

describe('HomeBustersComponent', () => {
  let component: HomeBustersComponent;
  let fixture: ComponentFixture<HomeBustersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeBustersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeBustersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
