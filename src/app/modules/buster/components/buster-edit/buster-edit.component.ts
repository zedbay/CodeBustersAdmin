import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ResourceEditComponent } from 'src/app/shared/components/resource-edit/resource-edit.component';
import { BusterService } from 'src/app/core/services/buster.service';
import { Buster } from 'src/app/shared/models/buster';

type BusterEditTab = 'Main' | 'ProfilPicture' | 'BusterSquad' | 'BusterActivity' | 'BusterTechnologies';

@Component({
  selector: 'app-buster-edit',
  templateUrl: './buster-edit.component.html',
  styleUrls: ['./buster-edit.component.scss']
})
export class BusterEditComponent extends ResourceEditComponent<Buster> implements OnInit {

  public resourceForm: FormGroup = this.formBuilder.group({
    firstName: ['', [Validators.required]],
    lastName: ['', [Validators.required]],
    email: ['', [Validators.required]],
    rank: ['', [Validators.required]],
    description: [''],
    title: ['', [Validators.required]],
    startingDate: ['', [Validators.required]],
    isAdmin: [false]
  });

  constructor(
    private formBuilder: FormBuilder,
    public busterService: BusterService
  ) {
    super(busterService);
  }

  ngOnInit(): void { }

  protected onChangeCreateMode(): void {
    this.resourceForm.controls.email.setValue('');
    this.resourceForm.controls.firstName.setValue('');
    this.resourceForm.controls.lastName.setValue('');
    this.resourceForm.controls.rank.setValue('');
    this.resourceForm.controls.description.setValue('');
    this.resourceForm.controls.title.setValue('');
    this.resourceForm.controls.startingDate.setValue('');
    this.resourceForm.controls.isAdmin.setValue(false);
  }

  protected onChangeResource(buster: Buster): void {
    this._resource = buster;
    this.resourceForm.controls.email.setValue(buster.email);
    this.resourceForm.controls.firstName.setValue(buster.firstName);
    this.resourceForm.controls.lastName.setValue(buster.lastName);
    this.resourceForm.controls.rank.setValue(buster.rank);
    this.resourceForm.controls.description.setValue(buster.description);
    this.resourceForm.controls.title.setValue(buster.title);
    this.resourceForm.controls.isAdmin.setValue(buster.isAdmin);
    this.resourceForm.controls.startingDate.setValue(
      buster.startingDate ? new Date(buster.startingDate) : undefined
    );
  }

}
