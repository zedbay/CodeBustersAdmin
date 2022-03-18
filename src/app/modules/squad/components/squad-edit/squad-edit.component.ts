import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ResourceEditComponent } from 'src/app/shared/components/resource-edit/resource-edit.component';
import { SquadService } from 'src/app/core/services/squad.service';
import { Squad } from 'src/app/shared/models/squad';

@Component({
  selector: 'app-squad-edit',
  templateUrl: './squad-edit.component.html',
  styleUrls: ['./squad-edit.component.scss']
})
export class SquadEditComponent extends ResourceEditComponent<Squad> implements OnInit {

  public resourceForm: FormGroup = this.formBuilder.group({
    name: ['', [Validators.required]],
    description: ['', [Validators.required]],
  });

  constructor(
    private formBuilder: FormBuilder,
    public squadService: SquadService
  ) {
    super(squadService);
  }

  ngOnInit(): void { }

  protected onChangeCreateMode(): void {
    this.resourceForm.controls.name.setValue('');
    this.resourceForm.controls.description.setValue('');
  }

  protected onChangeResource(squad: Squad): void {
    this.resourceForm.controls.name.setValue(squad.name);
    this.resourceForm.controls.description.setValue(squad.description);
  }

}
