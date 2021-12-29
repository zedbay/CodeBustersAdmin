import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ResourceEditComponent } from 'src/app/administration/shared/components/resource-edit/resource-edit.component';
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
    answer: [{ value: '', disabled: true }, [Validators.required]]
  });

  public responses: string[] = [];

  constructor(
    private formBuilder: FormBuilder,
    public contactService: ContactService
  ) {
    super(contactService);
  }

  ngOnInit(): void { }

  protected onChangeCreateMode(): void { }

  protected onChangeResource(contact: Contact): void {
    this.responses = contact.answer.split('//');
    this.resourceForm.controls.firstname.setValue(contact.firstname);
    this.resourceForm.controls.lastname.setValue(contact.lastname);
    this.resourceForm.controls.mail.setValue(contact.mail);
    this.resourceForm.controls.phone.setValue(contact.phone);
    this.resourceForm.controls.answer.setValue(contact.answer);
  }

}
