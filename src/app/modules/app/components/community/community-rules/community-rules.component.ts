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

  public rules: { title: string, content: string }[] = [];

  public imgPath = imgPath;

  constructor() { }

  ngOnInit(): void {
    this.rules = [
      {
        title: 'La Passion du Dév - tu auras.',
        content: this.site.devRule
      },
      {
        title: 'Ensemble - nous serons.',
        content: this.site.togetherRule
      },
      {
        title: 'Une ambition d’être à la pointe - nous avons.',
        content: this.site.ambitiousRule
      },
      {
        title: 'Prendre du plaisir - sans cesse.',
        content: this.site.pleasureRule
      }
    ]
  }

}
