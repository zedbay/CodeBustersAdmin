import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { HomeCommunityComponent } from './components/home-community/home-community.component';
import { HomeBustersComponent } from './components/home-busters/home-busters.component';
import { HomeContactComponent } from './components/home-contact/home-contact.component';
import { HomeNewsComponent } from './components/home-news/home-news.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    HomeComponent,
    HomeCommunityComponent,
    HomeBustersComponent,
    HomeContactComponent,
    HomeNewsComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule
  ]
})
export class HomeModule { }
