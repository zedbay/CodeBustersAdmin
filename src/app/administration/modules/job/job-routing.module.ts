import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JobsResolver } from 'src/app/shared/resolvers/jobs.resolver';
import { JobComponent } from './components/job/job.component';

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
