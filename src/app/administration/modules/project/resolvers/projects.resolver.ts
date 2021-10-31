import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { ProjectService } from 'src/app/core/services/project.service';
import { Project } from 'src/app/shared/models/project';

@Injectable({
  providedIn: 'root'
})
export class ProjectsResolver implements Resolve<Project[]> {

  constructor(
    private projectService: ProjectService
  ) { }

  resolve(): Observable<Project[]> {
    return this.projectService.list();
  }

}
