import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { imgPath } from 'src/app/shared/constants/imgPath';
import { Buster } from 'src/app/shared/models/buster';
import { Event } from 'src/app/shared/models/event';
import { Job } from 'src/app/shared/models/job';
import { Project } from 'src/app/shared/models/project';
import { NewsId, NewsType } from '../../../models/news.mode';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

  public imgPath = imgPath;

  public busters: Required<Buster>[] = this.activatedRoute.snapshot.data.busters;

  public events: Required<Event>[] = this.activatedRoute.snapshot.data.events;

  public projects: Required<Project>[] = this.activatedRoute.snapshot.data.projects;

  public jobs: Required<Job>[] = this.activatedRoute.snapshot.data.jobs;

  public sections: {
    title: string;
    elements: Pick<any, 'name' | 'createdDate' | 'id'>[];
    imgLink: string;
    callToAction: (element: NewsType) => void;
  }[] = []

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.sections = [
      {
        title: 'New Projects',
        imgLink: imgPath.earth,
        elements: this.projects.slice(0, 3),
        callToAction: (p: Project) => this.displayElement({ projectId: p.id })
      },
      {
        title: 'New Busters',
        imgLink: imgPath.sweat,
        elements: this.busters.map((b) => ({ ...b, name: `${b.firstName} ${b.lastName}` })).slice(0, 3),
        callToAction: (b: Buster) => this.displayElement({ busterId: b.id })
      },
      {
        title: 'New Jobs',
        imgLink: imgPath.hat,
        elements: this.jobs.map((j) => ({ ...j, name: j.title })).slice(0, 3),
        callToAction: (j: Job) => this.displayElement({ jobId: j.id })
      },
      {
        title: 'New Events',
        imgLink: imgPath.calendar,
        elements: this.events.slice(0, 3),
        callToAction: (e: Event) => this.displayElement({ eventId: e.id })
      }
    ];
  }

  public displayElement(queryParams: Partial<{ [key in NewsId]: number }>): void {
    this.router.navigate(['news/display'], { queryParams });
  }

}
