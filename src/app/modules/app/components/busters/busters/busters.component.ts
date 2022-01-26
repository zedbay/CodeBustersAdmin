import { Component, OnInit } from '@angular/core';
import { imgPath } from 'src/app/shared/constants/imgPath';
import { Rank } from 'src/app/shared/models/rank';

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
