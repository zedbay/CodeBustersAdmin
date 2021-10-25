import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientRoutingModule } from './client-routing.module';
import { ClientComponent } from './components/client/client.component';
import { SharedAdministrationModule } from '../../shared-administration/shared-administration.module';
import { ButtonModule } from 'primeng/button';
import { ClientListingComponent } from './components/client-listing/client-listing.component';
import { ClientEditComponent } from './components/client-edit/client-edit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { ClientSearchComponent } from './components/client-search/client-search.component';
import { AutoCompleteModule } from 'primeng/autocomplete';


@NgModule({
  declarations: [
    ClientComponent,
    ClientListingComponent,
    ClientEditComponent,
    ClientSearchComponent
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
    ClientComponent,
    ClientListingComponent,
    ClientSearchComponent
  ]
})
export class ClientModule { }
