import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BecameBusterComponent } from './became-buster.component';

describe('BecameBusterComponent', () => {
  let component: BecameBusterComponent;
  let fixture: ComponentFixture<BecameBusterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BecameBusterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BecameBusterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
