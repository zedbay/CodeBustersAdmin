import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JobResolver } from 'src/app/shared/resolvers/job.resolver';
import { JobsResolver } from 'src/app/shared/resolvers/jobs.resolver';
import { SiteResolver } from 'src/app/shared/resolvers/site.resolver';
import { BustersComponent } from './components/busters/busters.component';
import { JobOfferComponent } from './components/job-offer/job-offer.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: BustersComponent,
        resolve: {
          site: SiteResolver,
          jobs: JobsResolver
        }
      },
      {
        path: ':jobId',
        component: JobOfferComponent,
        resolve: {
          job: JobResolver
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BustersRoutingModule { }
