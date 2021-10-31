import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ResourceComponent } from 'src/app/administration/shared/components/resource/resource.component';
import { TableAction } from 'src/app/administration/shared/models/TableActions.model';
import { ProjectService } from 'src/app/core/services/project.service';
import { Project } from 'src/app/shared/models/project';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent extends ResourceComponent<Project> {

  public projectsListingAction: TableAction = {
    onDelete: (projectId: number) => this.deleteResource(projectId),
    onRowClick: (projectId: number) => this.selectResource(projectId)
  }

  constructor(
    public activeRoute: ActivatedRoute,
    public projectService: ProjectService
  ) {
    super(
      activeRoute,
      projectService
    );
  }

}
