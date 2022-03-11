import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomNgxQuillViewComponent } from './custom-ngx-quill-view.component';

describe('CustomNgxQuillViewComponent', () => {
  let component: CustomNgxQuillViewComponent;
  let fixture: ComponentFixture<CustomNgxQuillViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomNgxQuillViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomNgxQuillViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
