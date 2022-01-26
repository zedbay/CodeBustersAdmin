import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectComponent } from './components/project/project.component';
import { ProjectsResolver } from './resolvers/projects.resolver';

const routes: Routes = [
  {
    path: '',
    component: ProjectComponent,
    resolve: {
      resources: ProjectsResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectRoutingModule { }
