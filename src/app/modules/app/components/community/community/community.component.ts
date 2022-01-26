import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Site } from 'src/app/shared/models/site';

@Component({
  selector: 'app-community',
  templateUrl: './community.component.html',
  styleUrls: ['./community.component.scss']
})
export class CommunityComponent implements OnInit {

  public site: Site = this.activeRoute.snapshot.data.site;

  constructor(
    public activeRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void { }

}
