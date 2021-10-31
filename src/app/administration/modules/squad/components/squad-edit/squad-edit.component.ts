import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ResourceEditComponent } from 'src/app/administration/shared/components/resource-edit/resource-edit.component';
import { TableAction } from 'src/app/administration/shared/models/TableActions.model';
import { BusterService } from 'src/app/core/services/buster.service';
import { SquadService } from 'src/app/core/services/squad.service';
import { Buster } from 'src/app/shared/models/buster';
import { Squad } from 'src/app/shared/models/squad';

@Component({
  selector: 'app-squad-edit',
  templateUrl: './squad-edit.component.html',
  styleUrls: ['./squad-edit.component.scss']
})
export class SquadEditComponent extends ResourceEditComponent<Squad> implements OnInit {

  public resourceForm: FormGroup = this.formBuilder.group({
    name: ['', [Validators.required]]
  });

  public managerForm: FormGroup = this.formBuilder.group({
    firstName: [{ value: '', disabled: true }, [Validators.required]],
    lastName: [{ value: '', disabled: true }, [Validators.required]],
    email: [{ value: '', disabled: true }, [Validators.required]],
    rank: [{ value: '', disabled: true }, [Validators.required]]
  })

  public bustersListingAction: TableAction = {
    onDelete: (busterId: number) => this.removeBusterInSquad(busterId)
  }

  constructor(
    private formBuilder: FormBuilder,
    public squadService: SquadService,
    public busterService: BusterService
  ) {
    super(squadService);
  }

  ngOnInit(): void {
  }

  protected onChangeCreateMode(): void {
    this.resourceForm.controls.name.setValue('');
  }

  protected onChangeResource(squad: Squad): void {
    this.resourceForm.controls.name.setValue(squad.name);
  }

  private initManagerForm(manager: Buster) {
    this.managerForm.controls.firstName.setValue(manager.firstName);
    this.managerForm.controls.lastName.setValue(manager.lastName);
    this.managerForm.controls.email.setValue(manager.email);
    this.managerForm.controls.rank.setValue(manager.rank);
  }

  public removeManagement(busterId: number) {
    this.busterService.removeManagement(busterId, this._resource.id).subscribe(
      () => this._resource.manager = undefined
    );
  }

  public addManagement(buster: Buster) {
    this.busterService.addManagement(buster.id, this._resource.id).subscribe(
      () => {
        this._resource.manager = buster;
        this.initManagerForm(buster);
      }
    );
  }

  public removeBusterInSquad(busterId: number) {
    this.busterService.removeMembershipOfSquad(busterId, this._resource.id).subscribe(
      () => this._resource.members = this._resource.members.filter((b) => b.id !== busterId)
    );
  }

  public addMemberInSquad(buster: Buster) {
    this.busterService.addMembership(buster.id, this._resource.id).subscribe(
      () => this._resource.members.push(buster)
    );
  }

}
