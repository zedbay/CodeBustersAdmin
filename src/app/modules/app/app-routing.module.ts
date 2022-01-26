import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BustersComponent } from 'src/app/modules/app/components/busters/busters/busters.component';
import { HomeComponent } from 'src/app/modules/app/components/home/home/home.component';
import { NewsComponent } from 'src/app/modules/app/components/news/news.component';
import { JobResolver } from 'src/app/shared/resolvers/job.resolver';
import { JobsResolver } from 'src/app/shared/resolvers/jobs.resolver';
import { SiteResolver } from 'src/app/shared/resolvers/site.resolver';
import { AppComponent } from './components/app/app.component';
import { CandidacyComponent } from './components/candidacy/candidacy.component';
import { CommunityComponent } from './components/community/community/community.component';
import { JobOfferComponent } from './components/job-offer/job-offer.component';

const routes: Routes = [
  {
    path: '',
    component: AppComponent,
    resolve: {
      site: SiteResolver
    },
    children: [
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'candidacy',
        component: CandidacyComponent
      },
      {
        path: 'community',
        component: CommunityComponent,
        resolve: {
          site: SiteResolver
        }
      },
      {
        path: 'news',
        component: NewsComponent
      },
      {
        path: 'busters',
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
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
