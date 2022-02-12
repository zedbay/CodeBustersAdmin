import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RankService } from 'src/app/core/services/rank.service';
import { SquadService } from 'src/app/core/services/squad.service';
import { imgPath } from 'src/app/shared/constants/imgPath';
import { Job, NeededRelation } from 'src/app/shared/models/job';
import { Squad } from 'src/app/shared/models/squad';
import { Techno } from 'src/app/shared/models/techno';

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
    public rankService: RankService,
    private squadService: SquadService
  ) { }

  ngOnInit(): void {
    this.squadService.read(this.job.squad.id).subscribe(
      (s: Squad) => this.job.squad = s
    );
  }

  public candidacyForThisJob() {
    this.router.navigate(['/candidacy'], { queryParams: { jobId: this.job.id } });
  }

  public getSkillCapImg(techno: Techno): string {
    const skillCapLevel = (techno.NEEDED as NeededRelation).skillCap;
    if (skillCapLevel < 37) {
      return this.imgPath.level.one;
    }
    if (skillCapLevel < 63) {
      return this.imgPath.level.two;
    }
    return this.imgPath.level.three;
  }

}
