import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { ContactService } from 'src/app/core/services/contact.service';
import { Contact } from '../models/contact';

@Injectable({
  providedIn: 'root'
})
export class ContactsResolver implements Resolve<Contact[]> {

  constructor(
    private contactService: ContactService
  ) { }

  resolve(): Observable<Contact[]> {
    return this.contactService.list();
  }

}
