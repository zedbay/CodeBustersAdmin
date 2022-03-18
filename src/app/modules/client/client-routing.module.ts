import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientComponent } from './components/client/client.component';
import { ClientsResolver } from './resolvers/clients.resolver';

const routes: Routes = [
  {
    path: '',
    component: ClientComponent,
    resolve: {
      resources: ClientsResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule { }
