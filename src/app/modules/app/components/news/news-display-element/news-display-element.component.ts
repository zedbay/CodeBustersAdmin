import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { imgPath } from 'src/app/shared/constants/imgPath';
import { News } from '../../../models/news.mode';

@Component({
  selector: 'app-news-display-element',
  templateUrl: './news-display-element.component.html',
  styleUrls: ['./news-display-element.component.scss']
})
export class NewsDisplayElementComponent implements OnInit {

  public imgPath = imgPath;

  public news: News = this.activatedRoute.snapshot.data.data;

  constructor(
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    console.log(this.activatedRoute.snapshot.data.data)
  }

}
