import { animate, AUTO_STYLE, state, style, transition, trigger } from '@angular/animations';
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

const DEFAULT_DURATION = 300;
const MIDDLE_DURATION = 200;

@Component({
  selector: 'app-busters-jobs-offer',
  templateUrl: './busters-jobs-offer.component.html',
  styleUrls: ['./busters-jobs-offer.component.scss'],
  animations: [
    trigger('collapse', [
      state('false', style({ opacity: AUTO_STYLE, width: AUTO_STYLE, visibility: AUTO_STYLE })),
      state('true', style({ opacity: 0, width: '0', visibility: 'hidden' })),
      transition('false => true', animate(DEFAULT_DURATION + 'ms ease-in')),
      transition('true => false', animate(DEFAULT_DURATION + 'ms ease-out'))
    ]),
    trigger('zoomIn', [
      state('false', style({ width: AUTO_STYLE })),
      state('true', style({ width: '64px' })),
      transition('false => true', animate(MIDDLE_DURATION + 'ms ease-in')),
      transition('true => false', animate(MIDDLE_DURATION + 'ms ease-out'))
    ]),
  ]
})
export class BustersJobsOfferComponent implements OnInit {

  public imgPath = imgPath;

  public jobs: Job[] = this.activatedRoute.snapshot.data.jobs;
  public site: Site = this.activatedRoute.snapshot.data.site;

  public selectedRank: Rank = undefined;

  public currentHoverRank: Rank = undefined;

  public collapsed = true;

  public grades: Grade[] = [
    {
      rank: Rank.Bronze,
      imgPath: imgPath.ranks.bronze,
      name: 'Bronze',
      description: this.site.bronzeShortDescription
    },
    {
      rank: Rank.Silver,
      imgPath: imgPath.ranks.silver,
      name: 'Silver',
      description: this.site.silverShortDescription
    },
    {
      rank: Rank.Gold,
      imgPath: imgPath.ranks.gold,
      name: 'Gold',
      description: this.site.goldShortDescription
    },
    {
      rank: Rank.Diamond,
      imgPath: imgPath.ranks.diamond,
      name: 'Diamond',
      description: this.site.diamondShortDescription
    }
  ];

  constructor(
    private activatedRoute: ActivatedRoute,
    public rankService: RankService
  ) { }

  ngOnInit(): void { }
}
