import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomNgxQuillComponent } from './custom-ngx-quill.component';

describe('CustomNgxQuillComponent', () => {
  let component: CustomNgxQuillComponent;
  let fixture: ComponentFixture<CustomNgxQuillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomNgxQuillComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomNgxQuillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
