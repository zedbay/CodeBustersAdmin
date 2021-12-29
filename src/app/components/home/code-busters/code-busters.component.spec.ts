import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeBustersComponent } from './code-busters.component';

describe('CodeBustersComponent', () => {
  let component: CodeBustersComponent;
  let fixture: ComponentFixture<CodeBustersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CodeBustersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CodeBustersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
