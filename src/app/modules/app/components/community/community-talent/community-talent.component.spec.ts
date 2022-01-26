import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommunityTalentComponent } from './community-talent.component';

describe('CommunityTalentComponent', () => {
  let component: CommunityTalentComponent;
  let fixture: ComponentFixture<CommunityTalentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommunityTalentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommunityTalentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
