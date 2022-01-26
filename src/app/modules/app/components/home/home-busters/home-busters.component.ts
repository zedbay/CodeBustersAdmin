import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { imgPath } from 'src/app/shared/constants/imgPath';
import { Site } from 'src/app/shared/models/site';

@Component({
  selector: 'app-home-busters',
  templateUrl: './home-busters.component.html',
  styleUrls: ['./home-busters.component.scss']
})
export class HomeBustersComponent implements OnInit {

  public site: Site = this.activatedRoute.snapshot.data.site;

  public imgPath = imgPath;

  constructor(
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
  }



}
