import { Component, OnInit } from '@angular/core';
import { fadeInOnEnterAnimation, fadeOutOnLeaveAnimation, slideInRightOnEnterAnimation, slideOutLeftOnLeaveAnimation, slideOutRightOnLeaveAnimation } from 'angular-animations';
import { imgPath } from 'src/app/shared/constants/imgPath';

const durationAnim = 400;

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

  constructor() { }

  ngOnInit(): void {
  }

  public toggleVisibility(): void {
    this.visible = !this.visible;
  }

}
