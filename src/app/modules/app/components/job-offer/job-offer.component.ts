import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RankService } from 'src/app/core/services/rank.service';
import { imgPath } from 'src/app/shared/constants/imgPath';
import { Job } from 'src/app/shared/models/job';

@Component({
  selector: 'app-job-offer',
  templateUrl: './job-offer.component.html',
  styleUrls: ['./job-offer.component.scss']
})
export class JobOfferComponent implements OnInit {

  public job: Job = this.route.snapshot.data.job;
  public imgPath = imgPath;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public rankService: RankService
  ) { }

  ngOnInit(): void { }

  public candidacyForThisJob() {
    this.router.navigate(['/candidacy'], { queryParams: { jobId: this.job.id } });
  }

}
