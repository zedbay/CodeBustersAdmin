import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BusterService } from 'src/app/core/services/buster.service';
import { SquadService } from 'src/app/core/services/squad.service';
import { Buster } from 'src/app/shared/models/buster';
import { Squad } from 'src/app/shared/models/squad';

@Component({
  selector: 'app-squad-edit',
  templateUrl: './squad-edit.component.html',
  styleUrls: ['./squad-edit.component.scss']
})
export class SquadEditComponent implements OnInit {

  @Output() newSquadEmit = new EventEmitter<Squad>();
  @Output() updateSquadEmit = new EventEmitter<Squad>();

  @Input() set createMode(createMode: boolean) {
    this._createMode = createMode;
    if (createMode) {
      this.resetSquadForm();
    }
  }

  @Input() set squad(squad: Squad) {

    if (squad) {

      this._squad = squad;
      this.squadForm.controls.name.setValue(squad.name);

      if (squad.manager) {
        this.initManagerForm(squad.manager);
      }
    }

  };

  public squadForm: FormGroup = this.formBuilder.group({
    name: ['', [Validators.required]]
  });

  public managerForm: FormGroup = this.formBuilder.group({
    firstName: [{ value: '', disabled: true }, [Validators.required]],
    lastName: [{ value: '', disabled: true }, [Validators.required]],
    email: [{ value: '', disabled: true }, [Validators.required]],
    rank: [{ value: '', disabled: true }, [Validators.required]]
  })

  public _squad: Squad;
  public _createMode: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private squadService: SquadService,
    private busterService: BusterService
  ) { }

  ngOnInit(): void {
  }

  private initManagerForm(manager: Buster) {
    this.managerForm.controls.firstName.setValue(manager.firstName);
    this.managerForm.controls.lastName.setValue(manager.lastName);
    this.managerForm.controls.email.setValue(manager.email);
    this.managerForm.controls.rank.setValue(manager.rank);
  }

  private resetSquadForm() {
    this.squadForm.controls.name.setValue('');
  }

  public updateSquad() {
    this.squadService.update({
      ...this._squad,
      ...this.squadForm.value
    }).subscribe(
      (s: Squad) => this.updateSquadEmit.emit(s)
    )
  }

  public createSquad() {
    this.squadService.create({
      ...this.squadForm.value
    }).subscribe(
      (s: Squad) => this.newSquadEmit.emit(s)
    )
  }

  public removeManagement(busterId: number) {
    this.busterService.removeManagement(busterId, this._squad.id).subscribe(
      () => this._squad.manager = undefined
    );
  }

  public addManagement(buster: Buster) {
    this.busterService.addManagement(buster.id, this._squad.id).subscribe(
      () => {
        this._squad.manager = buster;
        this.initManagerForm(buster);
      }
    );
  }

  public removeBusterInSquad(busterId: number) {
    this.busterService.removeMembershipOfSquad(busterId, this._squad.id).subscribe(
      () => this._squad.members = this._squad.members.filter((b) => b.id !== busterId)
    );
  }

  public addMemberInSquad(buster: Buster) {
    this.busterService.addMembership(buster.id, this._squad.id).subscribe(
      () => this._squad.members.push(buster)
    );
  }

}
