import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { BusterService } from 'src/app/core/services/buster.service';
import { EventService } from 'src/app/core/services/event.service';
import { JobService } from 'src/app/core/services/job.service';
import { ProjectService } from 'src/app/core/services/project.service';
import { Buster } from 'src/app/shared/models/buster';
import { Event } from 'src/app/shared/models/event';
import { Job } from 'src/app/shared/models/job';
import { Project } from 'src/app/shared/models/project';
import { News, NewsId } from '../models/news.mode';



@Injectable({
  providedIn: 'root'
})
export class NewsDisplayResolver implements Resolve<News> {

  public callToActions: { [key in NewsId]: (elementId: number) => Observable<News> } = {
    jobId: (jobId: number) => this.jobService
      .read(jobId)
      .pipe(
        map((job: Job) => this.objectToNews['jobId'](job))
      ),
    busterId: (busterId: number) => this.busterService
      .read(busterId)
      .pipe(
        map((buster: Buster) => this.objectToNews['busterId'](buster))
      ),
    eventId: (eventId: number) => this.eventService
      .read(eventId)
      .pipe(
        map((event: Event) => this.objectToNews['eventId'](event))
      ),
    projectId: (projectId: number) => this.projectService
      .read(projectId)
      .pipe(
        map((project: Project) => this.objectToNews['projectId'](project))
      )
  }

  public objectToNews: { [key in NewsId]: (element: any) => News } = {
    jobId: (job: Job) => ({ content: job.description, title: job.title }),
    busterId: (buster: Buster) => ({ content: buster.description, title: `${buster.firstName} ${buster.lastName}` }),
    eventId: (event: Event) => ({ content: event.name, title: event.name }),
    projectId: (project: Project) => ({ content: project.description, title: project.name })
  };

  constructor(
    private busterService: BusterService,
    private eventService: EventService,
    private jobService: JobService,
    private projectService: ProjectService,
    private router: Router
  ) { }

  resolve(route: ActivatedRouteSnapshot): Observable<News> {
    const keyNewsId: string = Object.keys(route.queryParams)[0];
    const elementId: number = Number(route.queryParams[keyNewsId]);
    if (!this.callToActions[keyNewsId]) {
      this.router.navigate(['/error/404']);
    }
    return this.callToActions[keyNewsId](elementId);
  }
}
