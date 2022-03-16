import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { tap } from 'rxjs/operators';
import { NewsService } from 'src/app/core/services/news.service';
import { SiteService } from 'src/app/core/services/site.service';
import { News, NewsId, NewsTypeLiteral, typeNewsToCallToAction, typeNewsToProperties } from '../../../models/news.mode';

@Component({
  selector: 'app-news-display-element',
  templateUrl: './news-display-element.component.html',
  styleUrls: ['./news-display-element.component.scss']
})
export class NewsDisplayElementComponent implements OnInit {

  public news: News;
  public lastNews: News[] = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private siteService: SiteService,
    private newsService: NewsService
  ) { }

  ngOnInit(): void {
    const keyNewsId: NewsId = Object.keys(this.activatedRoute.snapshot.queryParams)[0] as NewsId;
    const elementId: number = Number(this.activatedRoute.snapshot.queryParams[keyNewsId]);
    this.fetchNews(keyNewsId, elementId);
    this.siteService.getRandomNews().subscribe(
      (r: { type: NewsTypeLiteral }[]) => this.lastNews = r.map((e) => typeNewsToCallToAction[e.type].tranformToNews(e as any))
    );
  }

  private fetchNews(keyNewsId: NewsId, elementId: number): void {
    this.newsService.getNewsFromObject(keyNewsId, elementId)
      .pipe(
        tap(() => window.scrollTo(0, 0))
      )
      .subscribe(
        (n: News) => this.news = n
      )
  }

  public goTo(n: News) {
    this.fetchNews(typeNewsToProperties[n.newsType].queryParam, n.objectId);
  }

}
