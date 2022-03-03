import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { imgPath } from 'src/app/shared/constants/imgPath';
import { Buster } from 'src/app/shared/models/buster';
import { Event } from 'src/app/shared/models/event';
import { NewsId } from '../../../models/news.mode';

@Component({
  selector: 'app-home-news',
  templateUrl: './home-news.component.html',
  styleUrls: ['./home-news.component.scss']
})
export class HomeNewsComponent implements OnInit {

  public imgPath = imgPath;

  public homeContainers: {
    title: string,
    underTitle: string,
    callToAction: (elementId?: number) => void,
    imgPath: string,
    elementId?: number
  }[] = [
      {
        title: 'New Job',
        underTitle: 'Plusieurs Squad a rejoindre',
        callToAction: () => this.router.navigate(['/busters']),
        imgPath: this.imgPath.hat
      },
      {
        title: 'New Event',
        underTitle: '',
        callToAction: (eventId: number) => this.goToElement({ eventId }),
        imgPath: this.imgPath.calendar,
        elementId: this.activatedRoute.snapshot.data.data.event.id
      },
      {
        title: 'New Buster',
        underTitle: '',
        callToAction: (busterId: number) => this.goToElement({ busterId }),
        imgPath: this.imgPath.sweat,
        elementId: this.activatedRoute.snapshot.data.data.buster.id
      }
    ];

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    const buster: Buster = this.activatedRoute.snapshot.data.data.buster;
    this.homeContainers[2].underTitle = `${buster.firstName} ${buster.lastName}`;
    const event: Event = this.activatedRoute.snapshot.data.data.event;
    this.homeContainers[1].underTitle = event.name;
  }

  public goToElement(queryParams: Partial<{ [key in NewsId]: number }>): void {
    this.router.navigate(['news/display'], { queryParams });
  }



}
