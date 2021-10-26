import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SquadRoutingModule } from './squad-routing.module';
import { SquadComponent } from './components/squad/squad.component';
import { ButtonModule } from 'primeng/button';
import { SquadEditComponent } from './components/squad-edit/squad-edit.component';
import { SharedAdministrationModule } from '../../shared/shared-administration.module';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AutoCompleteModule } from 'primeng/autocomplete';


@NgModule({
  declarations: [SquadComponent, SquadEditComponent],
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
  exports: []
})
export class SquadModule { }
