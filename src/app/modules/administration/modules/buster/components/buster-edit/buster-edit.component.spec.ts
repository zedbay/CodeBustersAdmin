import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusterEditComponent } from './buster-edit.component';

describe('BusterEditComponent', () => {
  let component: BusterEditComponent;
  let fixture: ComponentFixture<BusterEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BusterEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BusterEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
