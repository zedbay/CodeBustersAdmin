import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BustersJobsOfferComponent } from './busters-jobs-offer.component';


describe('JobsOfferComponent', () => {
  let component: BustersJobsOfferComponent;
  let fixture: ComponentFixture<BustersJobsOfferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BustersJobsOfferComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BustersJobsOfferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
