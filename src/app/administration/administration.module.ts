import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdministrationRoutingModule } from './administration-routing.module';
import { AdministrationComponent } from './components/administration/administration.component';
import { MenuModule, } from 'primeng/menu';
import { MenubarModule } from 'primeng/menubar';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { WebsiteComponent } from './components/website/website.component';
import { SharedAdministrationModule } from './shared-administration/shared-administration.module';

@NgModule({
  declarations: [
    AdministrationComponent,
    WebsiteComponent,
  ],
  imports: [
    CommonModule,
    AdministrationRoutingModule,
    MenuModule,
    MenubarModule,
    RouterModule,
    ButtonModule,
    SharedAdministrationModule
  ]
})
export class AdministrationModule { }
