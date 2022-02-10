import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AdministrationModule } from './modules/administration/administration.module';
import { RootRoutingModule } from './root-routing.module';
import { CoreModule } from './core/core.module';
import { RootComponent } from './root.component';
import { AppModule } from './modules/app/app.module';

@NgModule({
  declarations: [
    RootComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RootRoutingModule,
    AdministrationModule,
    AppModule,
    CoreModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [RootComponent]
})
export class RootModule { }
