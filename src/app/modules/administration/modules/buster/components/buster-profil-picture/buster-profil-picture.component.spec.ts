import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusterProfilPictureComponent } from './buster-profil-picture.component';

describe('BusterProfilPictureComponent', () => {
  let component: BusterProfilPictureComponent;
  let fixture: ComponentFixture<BusterProfilPictureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BusterProfilPictureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BusterProfilPictureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
