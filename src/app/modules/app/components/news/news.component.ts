import { Component, OnInit } from '@angular/core';
import { imgPath } from 'src/app/shared/constants/imgPath';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

  public imgPath = imgPath;

  constructor() { }

  ngOnInit(): void {
  }

}
