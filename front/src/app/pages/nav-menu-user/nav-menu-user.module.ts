import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {NavMenuUserRoutingModule} from './nav-menu-user-routing.module';
import {HttpClientModule} from '@angular/common/http';
import {AddReviewComponent} from '../add-review/add-review.component';
import {NavMenuUserComponent} from './nav-menu-user.component';
import {ListReviewsModule} from '../list-reviews/list-reviews.module';
import {LoginModule} from '../login/login.module';
import {FormsModule} from '@angular/forms';
import {HomeModule} from '../home/home.module';

@NgModule({
    declarations: [
        AddReviewComponent
    ],
    imports: [
        BrowserModule,
        NavMenuUserRoutingModule,
        HttpClientModule,
        ListReviewsModule,
        LoginModule,
        FormsModule,
        HomeModule
    ],
    providers: [],
    bootstrap: [NavMenuUserComponent]
})
export class NavMenuUserModule { }