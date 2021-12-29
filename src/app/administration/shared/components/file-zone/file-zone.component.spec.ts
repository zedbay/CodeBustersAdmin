import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FileZoneComponent } from './file-zone.component';

describe('FileZoneComponent', () => {
  let component: FileZoneComponent;
  let fixture: ComponentFixture<FileZoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FileZoneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FileZoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
