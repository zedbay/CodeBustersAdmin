import { Component, HostListener, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { imgPath } from 'src/app/shared/constants/imgPath';
import { screenSize, ScreenSizeType } from 'src/app/shared/constants/screenSize';
import { Site } from 'src/app/shared/models/site';

interface Principle {
  title: string,
  underTitle: string,
  content: string,
  img: string
  selected: boolean;
}


@Component({
  selector: 'app-community-description',
  templateUrl: './community-description.component.html',
  styleUrls: ['./community-description.component.scss']
})
export class CommunityDescriptionComponent implements OnInit {

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.isMobileVersion = window.innerWidth < screenSize[ScreenSizeType.MD];
  }

  public isMobileVersion;

  public imgPath = imgPath;

  public site: Site = this.activeRoute.snapshot.data.site;

  public principles: Principle[] = [
    {
      title: this.site.communityDescriptionTitle1,
      underTitle: this.site.communityDescriptionUnderTitle1,
      content: this.site.communityDescriptionText1,
      img: imgPath.cog,
      selected: false
    },
    {
      title: this.site.communityDescriptionTitle2,
      underTitle: this.site.communityDescriptionUnderTitle2,
      content: this.site.communityDescriptionText2,
      img: imgPath.friends,
      selected: false
    },
    {
      img: imgPath.rubiks,
      title: this.site.communityDescriptionTitle3,
      underTitle: this.site.communityDescriptionUnderTitle3,
      content: this.site.communityDescriptionText3,
      selected: false
    }
  ];

  constructor(
    private activeRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.isMobileVersion = window.innerWidth < screenSize[ScreenSizeType.MD];
  }

}
