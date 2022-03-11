import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SiteService } from 'src/app/core/services/site.service';
import { News, NewsTypeLiteral, typeNewsToCallToAction, typeNewsToProperties } from '../../../models/news.mode';

@Component({
  selector: 'app-news-display-element',
  templateUrl: './news-display-element.component.html',
  styleUrls: ['./news-display-element.component.scss']
})
export class NewsDisplayElementComponent implements OnInit {

  public news: News = this.activatedRoute.snapshot.data.data;
  public lastNews: News[] = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private siteService: SiteService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.siteService.getRandomNews().subscribe(
      (r: { type: NewsTypeLiteral }[]) => this.lastNews = r.map((e) => typeNewsToCallToAction[e.type].tranformToNews(e as any))
    );
  }

  public goTo(n: News) {
    const queryParams = {
      [typeNewsToProperties[n.newsType].queryParam]: n.objectId
    };
    this.router.navigate(['news', { skipLocationChange: true }]).then(
      () => this.router.navigate(['/news/display'], { queryParams }));
  }

}
