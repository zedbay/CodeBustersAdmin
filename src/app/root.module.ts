import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RootRoutingModule } from './root-routing.module';
import { CoreModule } from './core/core.module';
import { RootComponent } from './root.component';
import { AdministrationComponent } from './components/administration/administration.component';
import { WebsiteComponent } from './components/website/website.component';
import { LoginComponent } from './components/login/login.component';
import { ChangePasswordComponent } from './components/change-password/change-password.component';
import { CommonModule } from '@angular/common';
import { MenuModule, } from 'primeng/menu';
import { MenubarModule } from 'primeng/menubar';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { SharedAdministrationModule } from './shared/shared-administration.module';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PasswordModule } from 'primeng/password';
import { TabViewModule } from 'primeng/tabview';
import { PanelModule } from 'primeng/panel';
import { ToastModule } from 'primeng/toast';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { ProgressSpinnerModule } from 'primeng/progressspinner';

@NgModule({
  declarations: [
    RootComponent,
    AdministrationComponent,
    WebsiteComponent,
    LoginComponent,
    ChangePasswordComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RootRoutingModule,
    CoreModule,
    HttpClientModule,
    CommonModule,
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
    DynamicDialogModule,
    ProgressSpinnerModule
  ],
  providers: [],
  bootstrap: [RootComponent]
})
export class RootModule { }
