import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule} from '@angular/common/http';
import {NavMenuAdminComponent} from './pages/nav-menu-admin/nav-menu-admin.component';
import {NavMenuUserComponent} from './pages/nav-menu-user/nav-menu-user.component';
import {HomeComponent} from './pages/home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    NavMenuAdminComponent,
    NavMenuUserComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
