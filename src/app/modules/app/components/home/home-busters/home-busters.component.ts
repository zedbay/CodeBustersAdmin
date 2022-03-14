import { animate, AUTO_STYLE, state, style, transition, trigger } from '@angular/animations';
import { Component, HostListener, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { fadeInAnimation, fadeOutAnimation } from 'angular-animations';
import { imgPath } from 'src/app/shared/constants/imgPath';
import { screenSize, ScreenSizeType } from 'src/app/shared/constants/screenSize';
import { Site } from 'src/app/shared/models/site';
import { HomeContainer } from '../home/home.component';

export type ContainerType = 'start' | 'staff' | 'client';

@Component({
  selector: 'app-home-busters',
  templateUrl: './home-busters.component.html',
  styleUrls: ['./home-busters.component.scss'],
  animations: [
    fadeInAnimation({ duration: 200 }),
    fadeOutAnimation({ duration: 200 }),
    trigger('textZoomIn', [
      state('false', style({ fontSize: AUTO_STYLE })),
      state('true', style({ fontSize: AUTO_STYLE })),
      transition('false => true', animate(50 + 'ms ease-in')),
      transition('true => false', animate(50 + 'ms ease-out'))
    ]),
    trigger('opacityDown', [
      state('false', style({ opacity: AUTO_STYLE })),
      state('true', style({ opacity: 0.4 })),
      transition('false => true', animate(250 + 'ms ease-in')),
      transition('true => false', animate(250 + 'ms ease-out'))
    ]),
  ]
})
export class HomeBustersComponent implements OnInit {

  public site: Site = this.activatedRoute.snapshot.data.site;

  public imgPath = imgPath;

  public homeContainer = HomeContainer;

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.isMobileVersion = window.innerWidth < screenSize[ScreenSizeType.MD];
  }

  public selectedContainer: ContainerType[] = [];

  public isMobileVersion: boolean;

  public startBusterHover = false;
  public staffBusterHover = false;
  public clientBusterHover = false;

  constructor(
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.isMobileVersion = window.innerWidth < screenSize[ScreenSizeType.MD];
  }

  public selectContainer(container: ContainerType): void {
    if (this.selectedContainer.some((c) => c === container)) {
      this.selectedContainer = this.selectedContainer.filter((c) => c !== container);
    } else {
      this.selectedContainer.push(container);
    }
  }

}

