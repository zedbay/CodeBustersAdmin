import { Component, Input, OnInit } from '@angular/core';
import { imgPath } from 'src/app/shared/constants/imgPath';
import { Rank } from 'src/app/shared/models/rank';
import { Site } from 'src/app/shared/models/site';


@Component({
  selector: 'app-community-talent',
  templateUrl: './community-talent.component.html',
  styleUrls: ['./community-talent.component.scss']
})
export class CommunityTalentComponent implements OnInit {

  @Input() site: Site;

  rank: typeof Rank = Rank;

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
      rank: this.rank.Bronze
    },
    {
      imgPath: imgPath.ranks.silver,
      rank: this.rank.Silver
    },
    {
      imgPath: imgPath.ranks.gold,
      rank: this.rank.Gold
    },
    {
      imgPath: imgPath.ranks.diamond,
      rank: this.rank.Diamond
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
