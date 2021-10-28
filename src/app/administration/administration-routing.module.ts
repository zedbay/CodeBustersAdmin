import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdministrationComponent } from './components/administration/administration.component';
import { WebsiteComponent } from './components/website/website.component';

const routes: Routes = [
  {
    path: '',
    component: AdministrationComponent,
    children: [
      {
        path: 'buster',
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
        path: 'website',
        component: WebsiteComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministrationRoutingModule { }
