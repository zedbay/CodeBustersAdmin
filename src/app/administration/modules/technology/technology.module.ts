import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TechnologyRoutingModule } from './technology-routing.module';
import { TechnologyListingComponent } from './components/technology-listing/technology-listing.component';
import { TechnologyEditComponent } from './components/technology-edit/technology-edit.component';
import { SharedAdministrationModule } from '../../shared-administration/shared-administration.module';
import { TechnologyComponent } from './components/technology/technology.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';


@NgModule({
  declarations: [
    TechnologyListingComponent,
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
    ButtonModule
  ]
})
export class TechnologyModule { }
