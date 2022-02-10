import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventComponent } from './components/event/event.component';
import { EventsResolver } from '../../../../shared/resolvers/events.resolver';

const routes: Routes = [
  {
    path: '',
    component: EventComponent,
    resolve: {
      resources: EventsResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EventRoutingModule { }
