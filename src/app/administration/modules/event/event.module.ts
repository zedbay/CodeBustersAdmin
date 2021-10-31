import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventRoutingModule } from './event-routing.module';
import { EventComponent } from './components/event/event.component';
import { EventEditComponent } from './components/event-edit/event-edit.component';
import { SharedAdministrationModule } from '../../shared/shared-administration.module';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    EventComponent,
    EventEditComponent
  ],
  imports: [
    CommonModule,
    EventRoutingModule,
    SharedAdministrationModule,
    ButtonModule,
    InputTextModule,
    ReactiveFormsModule,
    FormsModule,
  ]
})
export class EventModule { }
