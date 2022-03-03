import { ViewportScroller } from '@angular/common';
import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { fadeInOnEnterAnimation, fadeOutOnLeaveAnimation } from 'angular-animations';
import { filter } from 'rxjs/operators';
import { videoPath } from 'src/app/shared/constants/videoPath';
import { environment } from '../../../../../environments/environment';

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

  public showApp = environment.showVideoAtStart;

  public videoIsReady = false;

  constructor(
    private scroller: ViewportScroller,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.router.events
      .pipe(
        filter((e) => e instanceof NavigationEnd),
      )
      .subscribe(() => this.scroller.scrollToAnchor('header'))
  }

  public playVideo() {
    const media = this.videoplayer.nativeElement;
    media.muted = true;
    media.play();
    setTimeout(() => {
      this.showApp = false;
    }, 8000);
  }


}
