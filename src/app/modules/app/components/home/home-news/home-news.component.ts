import { Component, OnInit } from '@angular/core';
import { imgPath } from 'src/app/shared/constants/imgPath';

@Component({
  selector: 'app-home-news',
  templateUrl: './home-news.component.html',
  styleUrls: ['./home-news.component.scss']
})
export class HomeNewsComponent implements OnInit {

  public imgPath = imgPath;

  constructor() { }

  ngOnInit(): void {
  }

}
