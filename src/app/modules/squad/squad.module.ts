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
import { TabViewModule } from 'primeng/tabview';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { CustomNgxModule } from 'src/app/shared/modules/custom-ngx/custom-ngx.module';
import { SquadEditMembersComponent } from './components/squad-edit/squad-edit-members/squad-edit-members.component';


@NgModule({
  declarations: [SquadComponent, SquadEditComponent, SquadEditMembersComponent],
  imports: [
    CommonModule,
    SquadRoutingModule,
    ButtonModule,
    SharedAdministrationModule,
    InputTextModule,
    ReactiveFormsModule,
    FormsModule,
    AutoCompleteModule,
    TabViewModule,
    InputTextareaModule,
    CustomNgxModule
  ],
  exports: []
})
export class SquadModule { }
