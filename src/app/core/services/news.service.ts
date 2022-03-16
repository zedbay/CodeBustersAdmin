import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { News, NewsId, typeNewsToCallToAction } from 'src/app/modules/app/models/news.mode';
import { Buster } from 'src/app/shared/models/buster';
import { Job } from 'src/app/shared/models/job';
import { BusterService } from './buster.service';
import { EventService } from './event.service';
import { JobService } from './job.service';
import { ProjectService } from './project.service';
import { Event } from 'src/app/shared/models/event';
import { Project } from 'src/app/shared/models/project';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  public callToActions: { [key in NewsId]: (elementId: number) => Observable<News> } = {
    jobId: (jobId: number) => this.jobService
      .read(jobId)
      .pipe(
        map((job: Job) => typeNewsToCallToAction.Job.tranformToNews(job))
      ),
    busterId: (busterId: number) => this.busterService
      .read(busterId)
      .pipe(
        map((buster: Buster) => typeNewsToCallToAction.Buster.tranformToNews(buster))
      ),
    eventId: (eventId: number) => this.eventService
      .read(eventId)
      .pipe(
        map((event: Event) => typeNewsToCallToAction.Event.tranformToNews(event))
      ),
    projectId: (projectId: number) => this.projectService
      .read(projectId)
      .pipe(
        map((project: Project) => typeNewsToCallToAction.Project.tranformToNews(project))
      )
  }

  constructor(
    private busterService: BusterService,
    private eventService: EventService,
    private jobService: JobService,
    private projectService: ProjectService
  ) { }

  public getNewsFromObject(key: NewsId, elementId: number): Observable<News> {
    return this.callToActions[key](elementId);
  }

}
