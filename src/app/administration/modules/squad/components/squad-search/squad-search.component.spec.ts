import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SquadSearchComponent } from './squad-search.component';

describe('SquadSearchComponent', () => {
  let component: SquadSearchComponent;
  let fixture: ComponentFixture<SquadSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SquadSearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SquadSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
