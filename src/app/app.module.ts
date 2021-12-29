import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { AdministrationModule } from './administration/administration.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { FooterComponent } from './components/footer/footer.component';
import { CodeBustersComponent } from './components/home/code-busters/code-busters.component';
import { BecameBusterComponent } from './components/home/became-buster/became-buster.component';
import { HeaderComponent } from './components/header/header.component';
import { RootComponent } from './components/root/root.component';
import { CommunityModule } from './modules/community/community.module';
import { NewsModule } from './modules/news/news.module';
import { BustersModule } from './modules/busters/busters.module';
import { HomeModule } from './modules/home/home.module';
import { ToastModule } from 'primeng/toast';
import { CandidacyComponent } from './components/candidacy/candidacy.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    CodeBustersComponent,
    BecameBusterComponent,
    HeaderComponent,
    RootComponent,
    CandidacyComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AdministrationModule,
    CoreModule,
    HttpClientModule,
    RouterModule,
    CommunityModule,
    NewsModule,
    BustersModule,
    HomeModule,
    ToastModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
