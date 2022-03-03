import { Component, Input, OnInit } from '@angular/core';
import { imgPath } from 'src/app/shared/constants/imgPath';
import { Site } from 'src/app/shared/models/site';

@Component({
  selector: 'app-community-rules',
  templateUrl: './community-rules.component.html',
  styleUrls: ['./community-rules.component.scss']
})
export class CommunityRulesComponent implements OnInit {

  @Input() public site: Site;

  public rules: { title: string, content: string, pictoPath: string, pictoPathHover: string }[] = [];

  public imgPath = imgPath;

  constructor() { }

  ngOnInit(): void {
    this.rules = [
      {
        title: 'La Passion du Dév - tu auras.',
        content: this.site.devRule,
        pictoPath: this.imgPath.picto.picto1,
        pictoPathHover: this.imgPath.picto.pictohover1
      },
      {
        title: 'Ensemble - nous serons.',
        content: this.site.togetherRule,
        pictoPath: this.imgPath.picto.picto2,
        pictoPathHover: this.imgPath.picto.pictohover2
      },
      {
        title: 'Une ambition d’être à la pointe - nous avons.',
        content: this.site.ambitiousRule,
        pictoPath: this.imgPath.picto.picto3,
        pictoPathHover: this.imgPath.picto.pictohover3
      },
      {
        title: 'Prendre du plaisir - sans cesse.',
        content: this.site.pleasureRule,
        pictoPath: this.imgPath.picto.picto4,
        pictoPathHover: this.imgPath.picto.pictohover4
      }
    ]
  }

}
