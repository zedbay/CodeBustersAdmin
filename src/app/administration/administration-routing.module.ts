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
