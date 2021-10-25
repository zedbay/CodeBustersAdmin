import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusterSearchComponent } from './buster-search.component';

describe('BusterSearchComponent', () => {
  let component: BusterSearchComponent;
  let fixture: ComponentFixture<BusterSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BusterSearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BusterSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
