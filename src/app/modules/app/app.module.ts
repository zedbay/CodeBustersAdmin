import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/app/app.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { AdministrationModule } from '../administration/administration.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { ToastModule } from 'primeng/toast';
import { BustersComponent } from './components/busters/busters/busters.component';
import { BustersJobsOfferComponent } from './components/busters/busters-jobs-offer/busters-jobs-offer.component';
import { CandidacyComponent } from './components/candidacy/candidacy.component';
import { CommunityComponent } from './components/community/community/community.component';
import { CommunityDescriptionComponent } from './components/community/community-description/community-description.component';
import { CommunityRulesComponent } from './components/community/community-rules/community-rules.component';
import { CommunityTalentComponent } from './components/community/community-talent/community-talent.component';
import { HomeComponent } from './components/home/home/home.component';
import { HomeBustersComponent } from './components/home/home-busters/home-busters.component';
import { HomeCommunityComponent } from './components/home/home-community/home-community.component';
import { HomeContactComponent } from './components/home/home-contact/home-contact.component';
import { HomeNewsComponent } from './components/home/home-news/home-news.component';
import { JobOfferComponent } from './components/busters/job-offer/job-offer.component';
import { SincePipe } from './pipes/since.pipe';
import { NewsComponent } from './components/news/news/news.component';
import { NewsDisplayElementComponent } from './components/news/news-display-element/news-display-element.component';
import { HomeNavigationIndicatorComponent } from './components/home/home-navigation-indicator/home-navigation-indicator.component';
import { CarouselModule } from 'primeng/carousel';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    BustersComponent,
    BustersJobsOfferComponent,
    CandidacyComponent,
    CommunityComponent,
    CommunityDescriptionComponent,
    CommunityRulesComponent,
    CommunityTalentComponent,
    HomeComponent,
    HomeBustersComponent,
    HomeCommunityComponent,
    HomeContactComponent,
    HomeNewsComponent,
    JobOfferComponent,
    NewsComponent,
    SincePipe,
    NewsDisplayElementComponent,
    HomeNavigationIndicatorComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    AdministrationModule,
    HttpClientModule,
    RouterModule,
    ToastModule,
    ReactiveFormsModule,
    FormsModule,
    CarouselModule
  ]
})
export class AppModule { }
