import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JobComponent } from './components/job/job.component';
import { JobsResolver } from './resolvers/jobs.resolver';

const routes: Routes = [
  {
    path: '',
    component: JobComponent,
    resolve: {
      resources: JobsResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JobRoutingModule { }
