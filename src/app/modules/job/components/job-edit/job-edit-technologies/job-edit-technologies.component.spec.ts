import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobEditTechnologiesComponent } from './job-edit-technologies.component';

describe('JobEditTechnologiesComponent', () => {
  let component: JobEditTechnologiesComponent;
  let fixture: ComponentFixture<JobEditTechnologiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobEditTechnologiesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JobEditTechnologiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
