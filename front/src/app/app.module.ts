import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListUsersComponent } from './pages/list-users/list-users.component';
import { AddUserComponent } from './pages/add-user/add-user.component';
import { ListKittensComponent } from './pages/list-kittens/list-kittens.component';
import { AddKittenComponent } from './pages/add-kitten/add-kitten.component';
import { HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {AddReviewComponent} from './pages/add-review/add-review.component';
import {ListReviewsComponent} from './pages/list-reviews/list-reviews.component';
import {LoginComponent} from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    ListUsersComponent,
    AddUserComponent,
    ListKittensComponent,
    AddKittenComponent,
    ListReviewsComponent,
    AddReviewComponent,
    LoginComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
