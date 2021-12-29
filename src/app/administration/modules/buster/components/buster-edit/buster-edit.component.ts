import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ResourceEditComponent } from 'src/app/administration/shared/components/resource-edit/resource-edit.component';
import { TableAction } from 'src/app/administration/shared/models/TableActions.model';
import { BusterService } from 'src/app/core/services/buster.service';
import { ClientService } from 'src/app/core/services/client.service';
import { ProjectService } from 'src/app/core/services/project.service';
import { SquadService } from 'src/app/core/services/squad.service';
import { TechnoService } from 'src/app/core/services/techno.service';
import { Buster } from 'src/app/shared/models/buster';
import { Client } from 'src/app/shared/models/client';
import { Project } from 'src/app/shared/models/project';
import { Squad } from 'src/app/shared/models/squad';
import { Techno } from 'src/app/shared/models/techno';

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
    startingDate: ['', [Validators.required]]
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

  public projectsListingAction: TableAction = {
    onDelete: (projectId: number) => this.removeProject(projectId)
  }

  constructor(
    private formBuilder: FormBuilder,
    private busterService: BusterService,
    public technoService: TechnoService,
    public clientService: ClientService,
    public squadService: SquadService,
    public projectService: ProjectService
  ) {
    super(busterService);
  }

  ngOnInit(): void {
  }

  protected onChangeCreateMode(): void {
    this.resourceForm.controls.email.setValue('');
    this.resourceForm.controls.firstName.setValue('');
    this.resourceForm.controls.lastName.setValue('');
    this.resourceForm.controls.rank.setValue('');
    this.resourceForm.controls.description.setValue('');
    this.resourceForm.controls.title.setValue('');
    this.resourceForm.controls.startingDate.setValue('');
  }

  protected onChangeResource(buster: Buster): void {
    this._resource = buster;
    this.resourceForm.controls.email.setValue(buster.email);
    this.resourceForm.controls.firstName.setValue(buster.firstName);
    this.resourceForm.controls.lastName.setValue(buster.lastName);
    this.resourceForm.controls.rank.setValue(buster.rank);
    this.resourceForm.controls.description.setValue(buster.description);
    this.resourceForm.controls.title.setValue(buster.title);
    this.resourceForm.controls.startingDate.setValue(
      buster.startingDate ? new Date(buster.startingDate) : undefined
    );
    if (buster.squad) {
      this.busterSquadForm.controls.name.setValue(buster.squad.name);
    }
    if (buster.currentClient) {
      this.busterCurrentClientForm.controls.name.setValue(buster.currentClient.name);
    }
  }


  public removeMembershipOfSquad(squadId: number) {
    this.busterService.removeMembershipOfSquad(this._resource.id, squadId).subscribe(() => this._resource.squad = undefined)
  }

  public addMembership(squad: Squad) {
    this.busterService.addMembership(this._resource.id, squad.id).subscribe(() => this._resource.squad = squad);
  }

  public removeCurrentClient(clienId: number) {
    this.busterService.removeCurrentClient(this._resource.id, clienId).subscribe(
      () => this._resource.currentClient = undefined
    );
  }

  public addCurrentClient(client: Client) {
    this.busterService.addCurrentClient(this._resource.id, client.id).subscribe(
      () => this._resource.currentClient = client
    );
  }

  public onDeleteTechno(technoId: number) {
    this.technoService.removeKnowledgeForBuster(technoId, this._resource.id).subscribe(
      () => this._resource.technologies = this._resource.technologies.filter((t) => t.id !== technoId)
    );
  }

  public onAddingTechno(techno: Techno) {
    this.technoService.setTechnoToBuster(techno.id, this._resource.id).subscribe(
      () => this._resource.technologies.push(techno)
    );
  }

  public addingProject(project: Project) {
    this.projectService.addWorker(project.id, this._resource.id).subscribe(
      () => this._resource.projects.push(project)
    );
  }

  public removeProject(projectId: number) {
    this.projectService.deleteWorker(projectId, this._resource.id).subscribe(
      () => this._resource.projects = this._resource.projects.filter((r) => r.id !== projectId)
    );
  }

}
