import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ResourceEditComponent } from 'src/app/modules/administration/shared/components/resource-edit/resource-edit.component';
import { TableAction } from 'src/app/modules/administration/shared/models/TableActions.model';
import { BusterService } from 'src/app/core/services/buster.service';
import { ProjectService } from 'src/app/core/services/project.service';
import { TechnoService } from 'src/app/core/services/techno.service';
import { Buster } from 'src/app/shared/models/buster';
import { Project } from 'src/app/shared/models/project';
import { Rank } from 'src/app/shared/models/rank';
import { Techno } from 'src/app/shared/models/techno';

@Component({
  selector: 'app-project-edit',
  templateUrl: './project-edit.component.html',
  styleUrls: ['./project-edit.component.scss']
})
export class ProjectEditComponent extends ResourceEditComponent<Project> implements OnInit {

  public resourceForm: FormGroup = this.formBuilder.group({
    name: ['', [Validators.required]],
    rank: ['', [Validators.required]],
    description: ['', Validators.required]
  });

  public technologiesListingAction: TableAction = {
    onDelete: (technoId: number) => this.removingTechno(technoId)
  }

  public bustersListingAction: TableAction = {
    onDelete: (busterId: number) => this.removingWorker(busterId)
  }

  constructor(
    public projectService: ProjectService,
    private formBuilder: FormBuilder,
    public technoService: TechnoService,
    public busterService: BusterService
  ) {
    super(projectService);
  }

  ngOnInit(): void { }

  protected onChangeCreateMode(): void {
    this.resourceForm.controls.name.setValue('');
    this.resourceForm.controls.rank.setValue(Rank.Bronze);
    this.resourceForm.controls.description.setValue('');
  }

  protected onChangeResource(project: Project): void {
    this.resourceForm.controls.name.setValue(project.name);
    this.resourceForm.controls.rank.setValue(project.rank);
    this.resourceForm.controls.description.setValue(project.description);
  }

  public addingTechno(techno: Techno): void {
    this.projectService.addRelatedTechno(this._resource.id, techno.id).subscribe(
      () => this._resource.technologies.push(techno)
    );
  }

  public removingTechno(technoId: number): void {
    this.projectService.deleteRelatedTechno(this._resource.id, technoId).subscribe(
      () => this._resource.technologies = this._resource.technologies.filter((r) => r.id !== technoId)
    );
  }

  public addingWorker(buster: Buster): void {
    this.projectService.addWorker(this._resource.id, buster.id).subscribe(
      () => this._resource.workers.push(buster)
    );
  }

  public removingWorker(busterId: number): void {
    this.projectService.deleteWorker(this._resource.id, busterId).subscribe(
      () => this._resource.workers = this._resource.workers.filter((r) => r.id !== busterId)
    );
  }

}
