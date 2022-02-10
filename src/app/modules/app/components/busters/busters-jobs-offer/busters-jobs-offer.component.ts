import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RankService } from 'src/app/core/services/rank.service';
import { imgPath } from 'src/app/shared/constants/imgPath';
import { Job } from 'src/app/shared/models/job';
import { Rank } from 'src/app/shared/models/rank';
import { Site } from 'src/app/shared/models/site';

interface Grade {
  rank: Rank;
  imgPath: string;
  name: string;
  description: string;
}

@Component({
  selector: 'app-busters-jobs-offer',
  templateUrl: './busters-jobs-offer.component.html',
  styleUrls: ['./busters-jobs-offer.component.scss']
})
export class BustersJobsOfferComponent implements OnInit {

  public imgPath = imgPath;

  public jobs: Job[] = this.activatedRoute.snapshot.data.jobs;
  public site: Site = this.activatedRoute.snapshot.data.site;

  public selectedRank: Rank = undefined;

  public grades: Grade[] = [
    {
      rank: Rank.Bronze,
      imgPath: imgPath.ranks.bronze,
      name: 'Bronze',
      description: this.site.bronzeDescription
    },
    {
      rank: Rank.Silver,
      imgPath: imgPath.ranks.silver,
      name: 'Silver',
      description: this.site.silverDescription
    },
    {
      rank: Rank.Gold,
      imgPath: imgPath.ranks.gold,
      name: 'Gold',
      description: this.site.goldDescription
    },
    {
      rank: Rank.Diamond,
      imgPath: imgPath.ranks.diamond,
      name: 'Diamond',
      description: this.site.diamondDescription
    }
  ];

  constructor(
    private activatedRoute: ActivatedRoute,
    public rankService: RankService
  ) { }

  ngOnInit(): void { }
}
