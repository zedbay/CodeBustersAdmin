import { animate, AUTO_STYLE, state, style, transition, trigger } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';
import { fadeInOnEnterAnimation, fadeOutOnLeaveAnimation, zoomInOnEnterAnimation, zoomOutOnLeaveAnimation } from 'angular-animations';
import { imgPath } from 'src/app/shared/constants/imgPath';
import { Rank } from 'src/app/shared/models/rank';
import { Site } from 'src/app/shared/models/site';

const duration = 300;

@Component({
  selector: 'app-community-talent',
  templateUrl: './community-talent.component.html',
  styleUrls: ['./community-talent.component.scss'],
  animations: [
    zoomInOnEnterAnimation({ duration }),
    zoomOutOnLeaveAnimation({ duration }),
    fadeInOnEnterAnimation({ duration }),
    fadeOutOnLeaveAnimation({ duration }),
    trigger('zoomIn', [
      state('false', style({ fontSize: AUTO_STYLE })),
      state('true', style({ fontSize: '40px' })),
      transition('false => true', animate(duration + 'ms ease-in')),
      transition('true => false', animate(100 + 'ms ease-out'))
    ]),
    trigger('widthIn', [
      state('false', style({ width: AUTO_STYLE, opacity: 0.9 })),
      state('true', style({ width: '100%', opacity: AUTO_STYLE })),
      transition('false => true', animate(duration + 'ms ease-in')),
      transition('true => false', animate(100 + 'ms ease-out'))
    ]),
  ]
})
export class CommunityTalentComponent implements OnInit {

  @Input() site: Site;

  ranks: typeof Rank = Rank;

  public imgPath = imgPath;

  public selectedRank: Rank = Rank.Bronze;

  public rankOptions: { [key in Rank]: { description: string } } = {
    [Rank.Bronze]: { description: '' },
    [Rank.Diamond]: { description: '' },
    [Rank.Gold]: { description: '' },
    [Rank.Silver]: { description: '' }
  };

  public rankImgs: { imgPath: string, rank: Rank }[] = [
    {
      imgPath: imgPath.ranks.bronze,
      rank: this.ranks.Bronze
    },
    {
      imgPath: imgPath.ranks.silver,
      rank: this.ranks.Silver
    },
    {
      imgPath: imgPath.ranks.gold,
      rank: this.ranks.Gold
    },
    {
      imgPath: imgPath.ranks.diamond,
      rank: this.ranks.Diamond
    }
  ];

  constructor(
  ) { }

  ngOnInit(): void {
    this.rankOptions.Bronze.description = this.site.bronzeDescription;
    this.rankOptions.Diamond.description = this.site.diamondDescription;
    this.rankOptions.Gold.description = this.site.goldDescription;
    this.rankOptions.Silver.description = this.site.silverDescription;
  }

  public selectRank(rank: Rank) {
    this.selectedRank = rank;
  }

}
