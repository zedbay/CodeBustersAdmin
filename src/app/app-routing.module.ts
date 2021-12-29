import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CandidacyComponent } from './components/candidacy/candidacy.component';
import { RootComponent } from './components/root/root.component';
import { CommunityComponent } from './modules/community/components/community/community.component';
import { HomeComponent } from './modules/home/components/home/home.component';
import { NewsComponent } from './modules/news/components/news/news.component';
import { SiteResolver } from './shared/resolvers/site.resolver';

const routes: Routes = [
  {
    path: '',
    component: RootComponent,
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
        loadChildren: () => import('./modules/busters/busters-routing.module').then(m => m.BustersRoutingModule)
      }
    ]
  },
  {
    path: 'admin',
    loadChildren: () => import('./administration/administration.module').then(m => m.AdministrationModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
