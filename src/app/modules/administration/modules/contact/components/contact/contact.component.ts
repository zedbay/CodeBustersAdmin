import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ResourceComponent } from 'src/app/modules/administration/shared/components/resource/resource.component';
import { TableAction } from 'src/app/modules/administration/shared/models/TableActions.model';
import { ContactService } from 'src/app/core/services/contact.service';
import { Contact } from 'src/app/shared/models/contact';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent extends ResourceComponent<Contact> {

  public eventsListingAction: TableAction = {
    onDelete: (eventId: number) => this.deleteResource(eventId),
    onRowClick: (eventId: number) => this.selectResource(eventId)
  }

  constructor(
    public activeRoute: ActivatedRoute,
    public contactService: ContactService,
    public router: Router
  ) {
    super(activeRoute, contactService, router);
  }

}
