import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { imgPath } from 'src/app/shared/constants/imgPath';
import { Buster } from 'src/app/shared/models/buster';
import { Event } from 'src/app/shared/models/event';
import { Job } from 'src/app/shared/models/job';
import { Project } from 'src/app/shared/models/project';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

  public imgPath = imgPath;

  public busters: Buster[] = this.activatedRoute.snapshot.data.busters;

  public events: Event[] = this.activatedRoute.snapshot.data.events;

  public projects: Project[] = this.activatedRoute.snapshot.data.projects;

  public jobs: Job[] = this.activatedRoute.snapshot.data.jobs;

  public sections: {
    title: string;
    elements: { name: string, createdDate: string, }[];
    imgLink: string
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
        elements: this.projects.map((p) => ({ name: p.name, createdDate: p.createdDate })).slice(0, 3)
      },
      {
        title: 'New Busters',
        imgLink: imgPath.sweat,
        elements: this.busters.map((b) => ({ name: `${b.firstName} ${b.lastName}`, createdDate: b.createdDate })).slice(0, 3)
      },
      {
        title: 'New Jobs',
        imgLink: imgPath.hat,
        elements: this.jobs.map((j) => ({ name: j.title, createdDate: j.createdDate })).slice(0, 3)
      },
      {
        title: 'New Events',
        imgLink: imgPath.calendar,
        elements: this.events.map((e) => ({ name: e.name, createdDate: e.createdDate })).slice(0, 3)
      }
    ];
  }

  public displayElement(element: Buster | Event | Project | Job): void {
    this.router.navigate(['news/display']);
  }

}
