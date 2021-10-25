import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { BusterRoutingModule } from './buster-routing.module';
import { BusterEditComponent } from './components/buster-edit/buster-edit.component';
import { BusterComponent } from './components/buster/buster.component';
import { SharedAdministrationModule } from '../../shared-administration/shared-administration.module';
import { BusterListingComponent } from '../../shared-administration/components/buster-listing/buster-listing.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ClientModule } from '../client/client.module';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { SquadModule } from '../squad/squad.module';
import { SquadListingComponent } from '../squad/components/squad-listing/squad-listing.component';


@NgModule({
  declarations: [
    BusterEditComponent,
    BusterComponent
  ],
  imports: [
    CommonModule,
    BusterRoutingModule,
    SharedAdministrationModule,
    ButtonModule,
    InputTextModule,
    ReactiveFormsModule,
    FormsModule,
    ClientModule,
    AutoCompleteModule,
    SquadModule
  ],
  exports: [
    BusterComponent
  ]
})
export class BusterModule { }
