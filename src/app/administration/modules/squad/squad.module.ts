import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SquadRoutingModule } from './squad-routing.module';
import { SquadComponent } from './components/squad/squad.component';
import { ButtonModule } from 'primeng/button';
import { SquadListingComponent } from './components/squad-listing/squad-listing.component';
import { SquadEditComponent } from './components/squad-edit/squad-edit.component';
import { SharedAdministrationModule } from '../../shared-administration/shared-administration.module';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SquadSearchComponent } from './components/squad-search/squad-search.component';
import { BusterModule } from '../buster/buster.module';
import { AutoCompleteModule } from 'primeng/autocomplete';


@NgModule({
  declarations: [SquadComponent, SquadListingComponent, SquadEditComponent, SquadSearchComponent],
  imports: [
    CommonModule,
    SquadRoutingModule,
    ButtonModule,
    SharedAdministrationModule,
    InputTextModule,
    ReactiveFormsModule,
    FormsModule,
    AutoCompleteModule
  ],
  exports: [
    SquadSearchComponent
  ]
})
export class SquadModule { }
