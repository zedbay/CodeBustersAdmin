import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdministrationComponent } from './components/administration/administration.component';
import { LoginComponent } from './components/login/login.component';
import { WebsiteComponent } from './components/website/website.component';
import { AuthGuardService } from './core/guards/auth-guard.service';
import { LoginGuardService } from './core/guards/login-guard.service';
import { WhoamiResolver } from './shared/resolvers/whoami.resolver';
import { SiteResolver } from './shared/resolvers/site.resolver';

const routes: Routes = [
  {
    path: 'admin/login',
    component: LoginComponent,
    canActivate: [LoginGuardService]
  },
  {
    path: 'admin',
    component: AdministrationComponent,
    canActivate: [AuthGuardService],
    resolve: {
      whoami: WhoamiResolver
    },
    children: [
      {
        path: '',
        loadChildren: () => import('./modules/buster/buster.module').then(m => m.BusterModule)
      },
      {
        path: 'squad',
        loadChildren: () => import('./modules/squad/squad.module').then(m => m.SquadModule)
      },
      {
        path: 'client',
        loadChildren: () => import('./modules/client/client.module').then(m => m.ClientModule)
      },
      {
        path: 'technology',
        loadChildren: () => import('./modules/technology/technology.module').then(m => m.TechnologyModule)
      },
      {
        path: 'job',
        loadChildren: () => import('./modules/job/job.module').then(m => m.JobModule)
      },
      {
        path: 'project',
        loadChildren: () => import('./modules/project/project.module').then(m => m.ProjectModule)
      },
      {
        path: 'event',
        loadChildren: () => import('./modules/event/event.module').then(m => m.EventModule)
      },
      {
        path: 'contact',
        loadChildren: () => import('./modules/contact/contact.module').then(m => m.ContactModule)
      },
      {
        path: 'website',
        component: WebsiteComponent,
        resolve: {
          site: SiteResolver
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RootRoutingModule { }
