import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TechnologyRoutingModule } from './technology-routing.module';
import { TechnologyEditComponent } from './components/technology-edit/technology-edit.component';
import { SharedAdministrationModule } from '../../shared/shared-administration.module';
import { TechnologyComponent } from './components/technology/technology.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { TabViewModule } from 'primeng/tabview';


@NgModule({
  declarations: [
    TechnologyEditComponent,
    TechnologyComponent
  ],
  imports: [
    CommonModule,
    TechnologyRoutingModule,
    SharedAdministrationModule,
    ReactiveFormsModule,
    FormsModule,
    InputTextModule,
    ButtonModule,
    InputTextareaModule,
    TabViewModule
  ]
})
export class TechnologyModule { }
