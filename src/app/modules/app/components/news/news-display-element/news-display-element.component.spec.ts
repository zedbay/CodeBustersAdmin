import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsDisplayElementComponent } from './news-display-element.component';

describe('NewsDisplayElementComponent', () => {
  let component: NewsDisplayElementComponent;
  let fixture: ComponentFixture<NewsDisplayElementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewsDisplayElementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsDisplayElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
