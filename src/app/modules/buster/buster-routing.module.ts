import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BusterComponent } from './components/buster/buster.component';
import { BustersResolver } from '../../shared/resolvers/busters.resolver';

const routes: Routes = [
  {
    path: '',
    component: BusterComponent,
    resolve: {
      resources: BustersResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BusterRoutingModule { }
