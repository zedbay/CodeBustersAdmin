import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SquadEditMembersComponent } from './squad-edit-members.component';

describe('SquadEditMembersComponent', () => {
  let component: SquadEditMembersComponent;
  let fixture: ComponentFixture<SquadEditMembersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SquadEditMembersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SquadEditMembersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
