import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Contact } from 'src/app/shared/models/contact';
import { TableLabels } from 'src/app/shared/models/TableLabel.mode';
import { NetworkService } from './network.service';
import { ResourcesService } from './resources.service';

@Injectable({
  providedIn: 'root'
})
export class ContactService extends ResourcesService<Contact> {

  public labels: TableLabels<Contact>[] = [
    { key: 'mail', value: 'Email' }
  ];

  constructor(
    public networkService: NetworkService
  ) {
    super(
      'contact',
      networkService
    );
  }

  public addRelationWithJob(contactId: number, jobId: number): Observable<boolean> {
    return this.networkService.put(
      `${this.endpoint}/${contactId}/job/${jobId}`
    );
  }

  public searchNameOnResource(contact: Contact): string {
    return contact.firstname;
  }

  public downloadCV(contact: Contact): Observable<File> {
    return this.networkService.downloadFile(`${this.endpoint}/${contact.id}/cv?fileName=${contact.cv}`)
  }

  public uploadCV(contactId: number, file: File): Observable<Contact> {
    const formData = new FormData();
    formData.append('file', file);
    return this.networkService.post(`${this.endpoint}/${contactId}/cv`, formData);
  }
}
