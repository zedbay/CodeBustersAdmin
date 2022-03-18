import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusterEditTechnologiesComponent } from './buster-edit-technologies.component';

describe('BusterEditTechnologiesComponent', () => {
  let component: BusterEditTechnologiesComponent;
  let fixture: ComponentFixture<BusterEditTechnologiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BusterEditTechnologiesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BusterEditTechnologiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
