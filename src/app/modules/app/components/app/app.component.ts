import { ViewportScroller } from '@angular/common';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { fadeInOnEnterAnimation, fadeOutOnLeaveAnimation } from 'angular-animations';
import { filter } from 'rxjs/operators';
import { screenSize, ScreenSizeType } from 'src/app/shared/constants/screenSize';
import { videoPath } from 'src/app/shared/constants/videoPath';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    fadeInOnEnterAnimation(),
    fadeOutOnLeaveAnimation()
  ]
})
export class AppComponent implements OnInit {

  @ViewChild('video', { static: false }) videoplayer: ElementRef;

  public videoPath = videoPath;

  public showApp;

  public videoIsReady = false;

  constructor(
    private scroller: ViewportScroller,
    private router: Router
  ) {
    this.showApp = window.innerWidth > screenSize[ScreenSizeType.MD] && environment.showVideoAtStart;
  }

  ngOnInit(): void {
    this.router.events
      .pipe(
        filter((e) => e instanceof NavigationEnd),
      )
      .subscribe(() => {
        const anchor: string = window.innerWidth > screenSize[ScreenSizeType.MD] ? 'header' : 'anchor-point';
        this.scroller.scrollToAnchor(anchor);
      })
  }

  public playVideo() {
    const media = this.videoplayer.nativeElement;
    media.muted = true;
    media.play();
    setTimeout(() => {
      this.showApp = false;
    }, 8000);
  }

  public test() {
    this.showApp = false;
    console.log('hello wolrd');
  }


}
