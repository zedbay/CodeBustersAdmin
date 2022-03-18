import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusterEditSquadComponent } from './buster-edit-squad.component';

describe('BusterEditSquadComponent', () => {
  let component: BusterEditSquadComponent;
  let fixture: ComponentFixture<BusterEditSquadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BusterEditSquadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BusterEditSquadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
