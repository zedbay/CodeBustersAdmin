import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BustersComponent } from 'src/app/modules/app/components/busters/busters/busters.component';
import { HomeComponent } from 'src/app/modules/app/components/home/home/home.component';
import { JobResolver } from 'src/app/shared/resolvers/job.resolver';
import { JobsResolver } from 'src/app/shared/resolvers/jobs.resolver';
import { SiteResolver } from 'src/app/shared/resolvers/site.resolver';
import { BustersResolver } from '../../shared/resolvers/busters.resolver';
import { ProjectsResolver } from '../../shared/resolvers/projects.resolver';
import { EventsResolver } from '../../shared/resolvers/events.resolver';
import { AppComponent } from './components/app/app.component';
import { CandidacyComponent } from './components/candidacy/candidacy.component';
import { CommunityComponent } from './components/community/community/community.component';
import { JobOfferComponent } from './components/busters/job-offer/job-offer.component';
import { NewsComponent } from './components/news/news/news.component';
import { NewsDisplayElementComponent } from './components/news/news-display-element/news-display-element.component';

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
        component: NewsComponent,
        resolve: {
          projects: ProjectsResolver,
          busters: BustersResolver,
          events: EventsResolver,
          jobs: JobsResolver
        }
      },
      {
        path: 'news/display',
        component: NewsDisplayElementComponent
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