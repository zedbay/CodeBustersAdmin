import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BusterService } from 'src/app/core/services/buster.service';
import { ClientService } from 'src/app/core/services/client.service';
import { ProjectService } from 'src/app/core/services/project.service';
import { TableAction } from 'src/app/shared/models/TableActions.model';
import { Client } from 'src/app/shared/models/client';
import { Project } from 'src/app/shared/models/project';

@Component({
  selector: 'app-buster-edit-activity',
  templateUrl: './buster-edit-activity.component.html',
  styleUrls: ['./buster-edit-activity.component.scss']
})
export class BusterEditActivityComponent implements OnInit {

  @Input('currentClient') set setCurrentClient(client: Client) {
    this.setClientInComponent(client);
  }

  public currentClient: Client;

  @Input() projects: Project[] = [];

  @Input() resourceId: number;

  public projectsListingAction: TableAction = {
    onDelete: (projectId: number) => this.removeProject(projectId),
    onConsult: (projectId: number) => this.router.navigate(['/admin/project'], { queryParams: { resourceId: projectId } })
  }

  public busterCurrentClientForm: FormGroup = this.formBuilder.group({
    name: [{ value: '', disabled: true }, [Validators.required]]
  });

  constructor(
    private formBuilder: FormBuilder,
    private busterService: BusterService,
    private router: Router,
    public projectService: ProjectService,
    public clientService: ClientService
  ) { }

  ngOnInit(): void { }

  private setClientInComponent(currentClient: Client): void {
    this.currentClient = currentClient;
    if (currentClient) {
      this.busterCurrentClientForm.controls.name.setValue(currentClient.name);
    } else {
      this.busterCurrentClientForm.controls.name.setValue('');
    }
  }

  public removeCurrentClient(clienId: number) {
    this.busterService.removeCurrentClient(this.resourceId, clienId).subscribe(
      () => this.currentClient = undefined
    );
  }

  public addCurrentClient(client: Client) {
    this.busterService.addCurrentClient(this.resourceId, client.id).subscribe(
      () => this.setClientInComponent(client)
    );
  }

  public addingProject(project: Project) {
    this.projectService.addWorker(project.id, this.resourceId).subscribe(
      () => this.projects.push(project)
    );
  }

  public removeProject(projectId: number) {
    this.projectService.deleteWorker(projectId, this.resourceId).subscribe(
      () => this.projects = this.projects.filter((r) => r.id !== projectId)
    );
  }

}
