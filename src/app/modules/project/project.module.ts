import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectRoutingModule } from './project-routing.module';
import { ProjectComponent } from './components/project/project.component';
import { SharedAdministrationModule } from '../../shared/shared-administration.module';
import { ButtonModule } from 'primeng/button';
import { ProjectEditComponent } from './components/project-edit/project-edit.component';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TabViewModule } from 'primeng/tabview';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { CustomNgxModule } from 'src/app/shared/modules/custom-ngx/custom-ngx.module';


@NgModule({
  declarations: [
    ProjectComponent,
    ProjectEditComponent
  ],
  imports: [
    CommonModule,
    ProjectRoutingModule,
    SharedAdministrationModule,
    ButtonModule,
    InputTextModule,
    ReactiveFormsModule,
    FormsModule,
    TabViewModule,
    InputTextareaModule,
    CustomNgxModule
  ]
})
export class ProjectModule { }
