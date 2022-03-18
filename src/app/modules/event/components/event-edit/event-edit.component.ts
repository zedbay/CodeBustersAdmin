import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ResourceEditComponent } from 'src/app/shared/components/resource-edit/resource-edit.component';
import { EventService } from 'src/app/core/services/event.service';
import { Event } from 'src/app/shared/models/event';

@Component({
  selector: 'app-event-edit',
  templateUrl: './event-edit.component.html',
  styleUrls: ['./event-edit.component.scss']
})
export class EventEditComponent extends ResourceEditComponent<Event> implements OnInit {

  public resourceForm: FormGroup = this.formBuilder.group({
    name: ['', [Validators.required]],
    description: ['', [Validators.required]]
  });

  constructor(
    private formBuilder: FormBuilder,
    public eventService: EventService
  ) {
    super(eventService);
  }

  ngOnInit(): void {
  }

  protected onChangeCreateMode(): void {
    this.resourceForm.controls.name.setValue('');
    this.resourceForm.controls.description.setValue('');
  }

  protected onChangeResource(event: Event): void {
    this.resourceForm.controls.description.setValue(event.description);
    this.resourceForm.controls.name.setValue(event.name);
  }

}
