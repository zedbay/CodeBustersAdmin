import { ViewportScroller } from '@angular/common';
import { Component, HostListener, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { fadeInOnEnterAnimation, fadeOutOnLeaveAnimation, slideInRightOnEnterAnimation, slideOutLeftOnLeaveAnimation, slideOutRightOnLeaveAnimation } from 'angular-animations';
import { filter } from 'rxjs/operators';
import { imgPath } from 'src/app/shared/constants/imgPath';
import { screenSize, ScreenSizeType } from 'src/app/shared/constants/screenSize';

const durationAnim = 200;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [
    slideInRightOnEnterAnimation({ duration: durationAnim }),
    slideOutRightOnLeaveAnimation({ duration: durationAnim }),
    fadeInOnEnterAnimation({ duration: durationAnim }),
    fadeOutOnLeaveAnimation({ duration: durationAnim })
  ]
})
export class HeaderComponent implements OnInit {

  public visible = true;

  public imgPath = imgPath;

  public isHorizontal = true;

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.isHorizontal = window.innerWidth > screenSize[ScreenSizeType.MD];
    this.visible = this.isHorizontal;
  }

  constructor(
    private scroller: ViewportScroller,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.isHorizontal = window.innerWidth > screenSize[ScreenSizeType.MD];
    this.visible = this.isHorizontal;
    this.router.events
      .pipe(
        filter((e) => e instanceof NavigationEnd),
        filter(() => !this.isHorizontal)
      )
      .subscribe(() => this.visible = false)
  }

  public toggleVisibility(): void {
    this.visible = !this.visible;
  }

  public scrollToAnchor() {
    if (!this.isHorizontal) {
      this.scroller.scrollToAnchor('header')
    }
  }

}
