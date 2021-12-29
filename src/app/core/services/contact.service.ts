import { Injectable } from '@angular/core';
import { TableLabels } from 'src/app/administration/shared/models/TableLabel.mode';
import { Contact } from 'src/app/shared/models/contact';
import { NetworkService } from './network.service';
import { ResourcesService } from './resources.service';

@Injectable({
  providedIn: 'root'
})
export class ContactService extends ResourcesService<Contact> {

  public labels: TableLabels<Contact>[] = [
    { key: 'mail', value: 'Email' },
    { key: 'phone', value: 'Phone' }
  ];

  constructor(
    public networkService: NetworkService
  ) {
    super(
      'contact',
      networkService
    );
  }

  public searchNameOnResource(contact: Contact): string {
    return contact.firstname;
  }
}
