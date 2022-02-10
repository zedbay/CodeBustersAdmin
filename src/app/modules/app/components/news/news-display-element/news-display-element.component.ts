import { Component, OnInit } from '@angular/core';
import { imgPath } from 'src/app/shared/constants/imgPath';

@Component({
  selector: 'app-news-display-element',
  templateUrl: './news-display-element.component.html',
  styleUrls: ['./news-display-element.component.scss']
})
export class NewsDisplayElementComponent implements OnInit {

  public imgPath = imgPath;

  constructor() { }

  ngOnInit(): void {
  }

}
