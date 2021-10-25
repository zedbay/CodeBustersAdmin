import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SquadComponent } from './components/squad/squad.component';
import { SquadsResolver } from './resolvers/squads.resolver';

const routes: Routes = [
  {
    path: '',
    component: SquadComponent,
    resolve: {
      squads: SquadsResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SquadRoutingModule { }
