import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { imgPath } from 'src/app/shared/constants/imgPath';
import { Rank } from 'src/app/shared/models/rank';
import { Site } from 'src/app/shared/models/site';

@Component({
  selector: 'app-busters',
  templateUrl: './busters.component.html',
  styleUrls: ['./busters.component.scss']
})
export class BustersComponent implements OnInit {

  public imgPath = imgPath;
  rank: typeof Rank = Rank;

  constructor() { }

  ngOnInit(): void {
  }



}
