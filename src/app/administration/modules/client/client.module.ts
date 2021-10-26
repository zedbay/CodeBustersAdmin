import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientRoutingModule } from './client-routing.module';
import { ClientComponent } from './components/client/client.component';
import { SharedAdministrationModule } from '../../shared/shared-administration.module';
import { ButtonModule } from 'primeng/button';
import { ClientEditComponent } from './components/client-edit/client-edit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { AutoCompleteModule } from 'primeng/autocomplete';


@NgModule({
  declarations: [
    ClientComponent,
    ClientEditComponent,
  ],
  imports: [
    CommonModule,
    ClientRoutingModule,
    SharedAdministrationModule,
    ButtonModule,
    ReactiveFormsModule,
    FormsModule,
    InputTextModule,
    AutoCompleteModule
  ],
  exports: [
    ClientComponent
  ]
})
export class ClientModule { }
