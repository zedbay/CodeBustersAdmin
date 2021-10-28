import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventRoutingModule } from './event-routing.module';
import { EventComponent } from './components/event/event.component';
import { EventEditComponent } from './components/event-edit/event-edit.component';


@NgModule({
  declarations: [
    EventComponent,
    EventEditComponent
  ],
  imports: [
    CommonModule,
    EventRoutingModule
  ]
})
export class EventModule { }
