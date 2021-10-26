import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TableAction } from 'src/app/administration/shared/models/TableActions.model';
import { technologyLabels } from 'src/app/administration/shared/utils/labelsResource';
import { resourceNameFunctionClient, resourceNameFunctionSquad, resourceNameFunctionTechno } from 'src/app/administration/shared/utils/searchResource';
import { BusterService } from 'src/app/core/services/buster.service';
import { ClientService } from 'src/app/core/services/client.service';
import { SquadService } from 'src/app/core/services/squad.service';
import { TechnoService } from 'src/app/core/services/techno.service';
import { Buster } from 'src/app/shared/models/buster';
import { Client } from 'src/app/shared/models/client';
import { Squad } from 'src/app/shared/models/squad';
import { Techno } from 'src/app/shared/models/techno';

@Component({
  selector: 'app-buster-edit',
  templateUrl: './buster-edit.component.html',
  styleUrls: ['./buster-edit.component.scss']
})
export class BusterEditComponent implements OnInit {

  public resourceNameFunctionTechno = resourceNameFunctionTechno;
  public resourceNameFunctionClient = resourceNameFunctionClient;
  public resourceNameFunctionSquad = resourceNameFunctionSquad;

  public technologyLabels = technologyLabels;

  @Output() newBuster = new EventEmitter<Buster>();
  @Output() updateBusterEmit = new EventEmitter<Buster>();

  @Input() set createMode(createMode: boolean) {
    this._createMode = createMode;
    if (createMode) {
      this.busterForm.controls.email.setValue('');
      this.busterForm.controls.firstName.setValue('');
      this.busterForm.controls.lastName.setValue('');
      this.busterForm.controls.rank.setValue('');
    }
  }

  @Input() set buster(buster: Buster) {
    if (buster) {
      this._buster = buster;
      this.busterForm.controls.email.setValue(buster.email);
      this.busterForm.controls.firstName.setValue(buster.firstName);
      this.busterForm.controls.lastName.setValue(buster.lastName);
      this.busterForm.controls.rank.setValue(buster.rank);
      if (buster.squad) {
        this.busterSquadForm.controls.name.setValue(buster.squad.name);
      }
      if (buster.currentClient) {
        this.busterCurrentClientForm.controls.name.setValue(buster.currentClient.name);
      }
    }
  };

  public _createMode: boolean = false;
  public _buster: Buster;

  public busterForm: FormGroup = this.formBuilder.group({
    firstName: ['', [Validators.required]],
    lastName: ['', [Validators.required]],
    email: ['', [Validators.required]],
    rank: ['', [Validators.required]]
  });

  public busterSquadForm: FormGroup = this.formBuilder.group({
    name: [{ value: '', disabled: true }, [Validators.required]]
  });

  public busterCurrentClientForm: FormGroup = this.formBuilder.group({
    name: [{ value: '', disabled: true }, [Validators.required]]
  });

  public technologiesListingAction: TableAction = {
    onDelete: (technoId: number) => this.onDeleteTechno(technoId)
  }

  constructor(
    private formBuilder: FormBuilder,
    private busterService: BusterService,
    public technoService: TechnoService,
    public clientService: ClientService,
    public squadService: SquadService
  ) { }

  ngOnInit(): void {
  }


  public createBuster() {
    this.busterService.create({
      ...this.busterForm.value,
      password: 'admin'
    }).subscribe(
      (buster: Buster) => this.newBuster.emit(buster)
    );
  }

  public updateBuster() {
    this.busterService.update({
      ...this._buster,
      ...this.busterForm.value
    }).subscribe(
      (buster: Buster) => this.updateBusterEmit.emit(buster)
    )
  }

  public removeMembershipOfSquad(squadId: number) {
    this.busterService.removeMembershipOfSquad(this._buster.id, squadId).subscribe(() => this._buster.squad = undefined)
  }

  public addMembership(squad: Squad) {
    this.busterService.addMembership(this._buster.id, squad.id).subscribe(() => this._buster.squad = squad);
  }

  public removeCurrentClient(clienId: number) {
    this.busterService.removeCurrentClient(this._buster.id, clienId).subscribe(
      () => this._buster.currentClient = undefined
    );
  }

  public addCurrentClient(client: Client) {
    this.busterService.addCurrentClient(this._buster.id, client.id).subscribe(
      () => this._buster.currentClient = client
    );
  }

  public onDeleteTechno(technoId: number) {
    this.technoService.removeKnowledgeForBuster(technoId, this._buster.id).subscribe(
      () => this._buster.technologies = this._buster.technologies.filter((t) => t.id !== technoId)
    );
  }

  public onAddingTechno(techno: Techno) {
    this.technoService.setTechnoToBuster(techno.id, this._buster.id).subscribe(
      () => this._buster.technologies.push(techno)
    );
  }




}
