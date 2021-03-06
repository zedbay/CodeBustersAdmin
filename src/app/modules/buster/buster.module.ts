import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { BusterRoutingModule } from './buster-routing.module';
import { BusterEditComponent } from './components/buster-edit/buster-edit.component';
import { BusterComponent } from './components/buster/buster.component';
import { SharedAdministrationModule } from '../../shared/shared-administration.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ClientModule } from '../client/client.module';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { SquadModule } from '../squad/squad.module';
import { TabViewModule } from 'primeng/tabview';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { BusterProfilPictureComponent } from './components/buster-profil-picture/buster-profil-picture.component';
import { CalendarModule } from 'primeng/calendar';
import { CustomNgxModule } from 'src/app/shared/modules/custom-ngx/custom-ngx.module';
import { CheckboxModule } from 'primeng/checkbox';
import { BusterEditTechnologiesComponent } from './components/buster-edit-technologies/buster-edit-technologies.component';
import { BusterEditSquadComponent } from './components/buster-edit-squad/buster-edit-squad.component';
import { BusterEditActivityComponent } from './components/buster-edit-activity/buster-edit-activity.component';


@NgModule({
  declarations: [
    BusterEditComponent,
    BusterComponent,
    BusterProfilPictureComponent,
    BusterEditTechnologiesComponent,
    BusterEditSquadComponent,
    BusterEditActivityComponent
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
    SquadModule,
    TabViewModule,
    InputTextareaModule,
    CalendarModule,
    CustomNgxModule,
    CheckboxModule
  ],
  exports: [
    BusterComponent
  ]
})
export class BusterModule { }
