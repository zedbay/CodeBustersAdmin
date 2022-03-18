import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BusterService } from 'src/app/core/services/buster.service';
import { SquadService } from 'src/app/core/services/squad.service';
import { Squad } from 'src/app/shared/models/squad';

@Component({
  selector: 'app-buster-edit-squad',
  templateUrl: './buster-edit-squad.component.html',
  styleUrls: ['./buster-edit-squad.component.scss']
})
export class BusterEditSquadComponent implements OnInit {

  @Input('squad') set setSquad(squad: Squad) {
    this.setSquadInComponent(squad);
  }

  @Input() resourceId: number;

  public squad: Squad;

  public busterSquadForm: FormGroup = this.formBuilder.group({
    name: [{ value: '', disabled: true }, [Validators.required]]
  });

  constructor(
    private formBuilder: FormBuilder,
    private busterService: BusterService,
    public squadService: SquadService
  ) { }

  ngOnInit(): void { }

  private setSquadInComponent(squad: Squad) {
    this.squad = squad;
    if (squad) {
      this.busterSquadForm.controls.name.setValue(squad.name);
    } else {
      this.busterSquadForm.controls.name.setValue('');
    }
  }

  public removeMembershipOfSquad(squadId: number) {
    this.busterService.removeMembershipOfSquad(this.resourceId, squadId).subscribe(() => this.squad = undefined)
  }

  public addMembership(squad: Squad) {
    this.busterService.addMembership(this.resourceId, squad.id).subscribe(() => this.setSquadInComponent(squad));
  }

}
