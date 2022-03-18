import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactRoutingModule } from './contact-routing.module';
import { ContactComponent } from './components/contact/contact.component';
import { ContactEditComponent } from './components/contact-edit/contact-edit.component';
import { SharedAdministrationModule } from '../../shared/shared-administration.module';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TabViewModule } from 'primeng/tabview';
import { InputTextareaModule } from 'primeng/inputtextarea';


@NgModule({
  declarations: [
    ContactComponent,
    ContactEditComponent
  ],
  imports: [
    CommonModule,
    SharedAdministrationModule,
    ButtonModule,
    InputTextModule,
    ReactiveFormsModule,
    FormsModule,
    TabViewModule,
    ContactRoutingModule,
    InputTextareaModule
  ]
})
export class ContactModule { }
