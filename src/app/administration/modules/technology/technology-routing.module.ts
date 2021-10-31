import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TechnologyComponent } from './components/technology/technology.component';
import { TechnosResolver } from './resolvers/technos.resolver';

const routes: Routes = [
  {
    path: '',
    component: TechnologyComponent,
    resolve: {
      resources: TechnosResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TechnologyRoutingModule { }
