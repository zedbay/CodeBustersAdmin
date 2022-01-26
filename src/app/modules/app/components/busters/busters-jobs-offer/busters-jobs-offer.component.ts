import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RankService } from 'src/app/core/services/rank.service';
import { imgPath } from 'src/app/shared/constants/imgPath';
import { Job } from 'src/app/shared/models/job';
import { Rank } from 'src/app/shared/models/rank';
import { Site } from 'src/app/shared/models/site';

@Component({
  selector: 'app-busters-jobs-offer',
  templateUrl: './busters-jobs-offer.component.html',
  styleUrls: ['./busters-jobs-offer.component.scss']
})
export class BustersJobsOfferComponent implements OnInit {

  public imgPath = imgPath;
  rank: typeof Rank = Rank;

  public jobs: Job[] = this.activatedRoute.snapshot.data.jobs;
  public site: Site = this.activatedRoute.snapshot.data.site;

  public selectedRank: Rank = undefined;

  constructor(
    private activatedRoute: ActivatedRoute,
    public rankService: RankService
  ) { }

  ngOnInit(): void { }
}
