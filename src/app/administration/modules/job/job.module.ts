import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JobRoutingModule } from './job-routing.module';
import { JobComponent } from './components/job/job.component';
import { JobEditComponent } from './components/job-edit/job-edit.component';
import { SharedAdministrationModule } from '../../shared/shared-administration.module';
import { ButtonModule } from 'primeng/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { TabViewModule } from 'primeng/tabview';


@NgModule({
  declarations: [
    JobComponent,
    JobEditComponent
  ],
  imports: [
    CommonModule,
    JobRoutingModule,
    SharedAdministrationModule,
    ButtonModule,
    ReactiveFormsModule,
    FormsModule,
    InputTextModule,
    TabViewModule
  ]
})
export class JobModule { }
