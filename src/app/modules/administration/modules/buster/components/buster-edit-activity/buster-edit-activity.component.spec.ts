import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusterEditActivityComponent } from './buster-edit-activity.component';

describe('BusterEditActivityComponent', () => {
  let component: BusterEditActivityComponent;
  let fixture: ComponentFixture<BusterEditActivityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BusterEditActivityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BusterEditActivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
