import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BustersRoutingModule } from './busters-routing.module';
import { BustersComponent } from './components/busters/busters.component';
import { JobsOfferComponent } from './components/jobs-offer/jobs-offer.component';
import { JobOfferComponent } from './components/job-offer/job-offer.component';
import { AppRoutingModule } from 'src/app/app-routing.module';


@NgModule({
  declarations: [
    BustersComponent,
    JobsOfferComponent,
    JobOfferComponent
  ],
  imports: [
    CommonModule,
    BustersRoutingModule,
    AppRoutingModule
  ]
})
export class BustersModule { }
