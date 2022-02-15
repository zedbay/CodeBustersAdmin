import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { imgPath } from 'src/app/shared/constants/imgPath';
import { Site } from 'src/app/shared/models/site';

interface Principle {
  title: string,
  underTitle: string,
  content: string,
  img: string
}

@Component({
  selector: 'app-community-description',
  templateUrl: './community-description.component.html',
  styleUrls: ['./community-description.component.scss']
})
export class CommunityDescriptionComponent implements OnInit {

  public imgPath = imgPath;

  public site: Site = this.activeRoute.snapshot.data.site;

  public principles: Principle[] = [
    {
      title: this.site.communityDescriptionTitle1,
      underTitle: this.site.communityDescriptionUnderTitle1,
      content: this.site.communityDescriptionText1,
      img: imgPath.cog
    },
    {
      title: this.site.communityDescriptionTitle2,
      underTitle: this.site.communityDescriptionUnderTitle2,
      content: this.site.communityDescriptionText2,
      img: imgPath.friends
    },
    {
      img: imgPath.rubiks,
      title: this.site.communityDescriptionTitle3,
      underTitle: this.site.communityDescriptionUnderTitle3,
      content: this.site.communityDescriptionText3
    }
  ];

  constructor(
    private activeRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
  }

}
