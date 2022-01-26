import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ResourceEditComponent } from 'src/app/modules/administration/shared/components/resource-edit/resource-edit.component';
import { ContactService } from 'src/app/core/services/contact.service';
import { Contact } from 'src/app/shared/models/contact';

@Component({
  selector: 'app-contact-edit',
  templateUrl: './contact-edit.component.html',
  styleUrls: ['./contact-edit.component.scss']
})
export class ContactEditComponent extends ResourceEditComponent<Contact> implements OnInit {

  public resourceForm: FormGroup = this.formBuilder.group({
    firstname: [{ value: '', disabled: true }, [Validators.required]],
    lastname: [{ value: '', disabled: true }, [Validators.required]],
    mail: [{ value: '', disabled: true }, [Validators.required]],
    phone: [{ value: '', disabled: true }, [Validators.required]],
    answer: [{ value: '', disabled: true }, [Validators.required]],
    createdDate: [{ value: '', disabled: true }],
    freeField: [{ value: '', disabled: true }]
  });

  public jobForm: FormGroup = this.formBuilder.group({
    title: [{ value: '', disabled: true }, [Validators.required]],
    underTitle: [{ value: '', disabled: true }, [Validators.required]],
    description: [{ value: '', disabled: true }, [Validators.required]],
    rank: [{ value: '', disabled: true }, [Validators.required]]
  });

  public responses: string[] = [];

  constructor(
    private formBuilder: FormBuilder,
    public contactService: ContactService
  ) {
    super(contactService);
  }

  ngOnInit(): void {
  }

  public downloadCV(): void {
    this.contactService.downloadCV(this._resource).subscribe(
      (res: any) => {
        const ab = new ArrayBuffer(res.data.length);
        const view = new Uint8Array(ab);
        for (let i = 0; i < res.data.length; i++) {
          view[i] = res.data[i];
        }
        const cv = new Blob([ab], { type: res.ContentType });
        const link = document.createElement('a');
        link.href = window.URL.createObjectURL(cv);
        link.download = this._resource.cv;
        link.click();
      }
    );
  }

  protected onChangeCreateMode(): void { }

  protected onChangeResource(contact: Contact): void {
    this.responses = contact.answer ? contact.answer.split('//') : [];
    contact.freeField ?
      this.resourceForm.controls.freeField.setValue(contact.freeField) :
      this.resourceForm.controls.freeField.setValue('');
    this.resourceForm.controls.firstname.setValue(contact.firstname);
    this.resourceForm.controls.lastname.setValue(contact.lastname);
    this.resourceForm.controls.mail.setValue(contact.mail);
    this.resourceForm.controls.phone.setValue(contact.phone);
    this.resourceForm.controls.answer.setValue(contact.answer);
    this.resourceForm.controls.createdDate.setValue(contact.createdDate);

    this.jobForm.controls.title.setValue(
      contact.job ? contact.job.title : ''
    );
    this.jobForm.controls.underTitle.setValue(
      contact.job ? contact.job.underTitle : ''
    );
    this.jobForm.controls.description.setValue(
      contact.job ? contact.job.description : ''
    );
    this.jobForm.controls.rank.setValue(
      contact.job ? contact.job.rank : ''
    );
  }

}
