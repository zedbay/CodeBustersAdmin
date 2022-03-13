import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdministrationRoutingModule } from './administration-routing.module';
import { AdministrationComponent } from './components/administration/administration.component';
import { MenuModule, } from 'primeng/menu';
import { MenubarModule } from 'primeng/menubar';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { WebsiteComponent } from './components/website/website.component';
import { SharedAdministrationModule } from './shared/shared-administration.module';
import { LoginComponent } from './components/login/login.component';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PasswordModule } from 'primeng/password';
import { TabViewModule } from 'primeng/tabview';
import { PanelModule } from 'primeng/panel';
import { ToastModule } from 'primeng/toast';
import { ChangePasswordComponent } from './components/change-password/change-password.component';
import { DynamicDialogModule } from 'primeng/dynamicdialog';

@NgModule({
  declarations: [
    AdministrationComponent,
    WebsiteComponent,
    LoginComponent,
    ChangePasswordComponent,
  ],
  imports: [
    CommonModule,
    AdministrationRoutingModule,
    MenuModule,
    MenubarModule,
    RouterModule,
    ButtonModule,
    SharedAdministrationModule,
    InputTextModule,
    ReactiveFormsModule,
    FormsModule,
    PasswordModule,
    TabViewModule,
    PanelModule,
    ToastModule,
    DynamicDialogModule
  ]
})
export class AdministrationModule { }
