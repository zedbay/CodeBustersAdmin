import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BustersComponent } from './busters.component';

describe('BustersComponent', () => {
  let component: BustersComponent;
  let fixture: ComponentFixture<BustersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BustersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BustersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
