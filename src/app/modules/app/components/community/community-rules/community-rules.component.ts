import { Component, HostListener, Input, OnInit } from '@angular/core';
import { collapseOnLeaveAnimation, expandOnEnterAnimation } from 'angular-animations';
import { imgPath } from 'src/app/shared/constants/imgPath';
import { screenSize, ScreenSizeType } from 'src/app/shared/constants/screenSize';
import { Site } from 'src/app/shared/models/site';

interface Rule {
  title: string,
  content: string,
  pictoPath: string,
  pictoPathHover: string,
  selected: boolean
}

@Component({
  selector: 'app-community-rules',
  templateUrl: './community-rules.component.html',
  styleUrls: ['./community-rules.component.scss'],
  animations: [
    expandOnEnterAnimation({ duration: 300 }),
    collapseOnLeaveAnimation({ duration: 300 }),
  ]
})
export class CommunityRulesComponent implements OnInit {

  @Input() public site: Site;

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.isMobileVersion = window.innerWidth < screenSize[ScreenSizeType.MD];
  }

  public isMobileVersion: boolean;

  public rules: Rule[] = [];

  public imgPath = imgPath;

  constructor() { }

  ngOnInit(): void {
    this.isMobileVersion = window.innerWidth < screenSize[ScreenSizeType.MD];
    this.rules = [
      {
        title: 'La Passion du Dév - tu auras.',
        content: this.site.devRule,
        pictoPath: this.imgPath.picto.picto1,
        pictoPathHover: this.imgPath.picto.pictohover1,
        selected: false
      },
      {
        title: 'Ensemble - nous serons.',
        content: this.site.togetherRule,
        pictoPath: this.imgPath.picto.picto2,
        pictoPathHover: this.imgPath.picto.pictohover2,
        selected: false
      },
      {
        title: 'Une ambition d’être à la pointe - nous avons.',
        content: this.site.ambitiousRule,
        pictoPath: this.imgPath.picto.picto3,
        pictoPathHover: this.imgPath.picto.pictohover3,
        selected: false
      },
      {
        title: 'Prendre du plaisir - sans cesse.',
        content: this.site.pleasureRule,
        pictoPath: this.imgPath.picto.picto4,
        pictoPathHover: this.imgPath.picto.pictohover4,
        selected: false
      }
    ]
  }

  public selectRule(rule: Rule) {
    if (this.isMobileVersion) {
      rule.selected = !rule.selected;
    }
  }

}
