import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ListUsersComponent } from '../list-users/list-users.component';
import { AddUserComponent } from '../add-user/add-user.component';
import { ListKittensComponent } from '../list-kittens/list-kittens.component';
import { AddKittenComponent } from '../add-kitten/add-kitten.component';
import { HttpClientModule} from '@angular/common/http';
import {ListReviewsComponent} from '../list-reviews/list-reviews.component';
import {LoginComponent} from '../login/login.component';
import {NavMenuAdminComponent} from './nav-menu-admin.component';
import {NavMenuAdminRoutingModule} from './nav-menu-admin-routing.module';
import {FormsModule} from '@angular/forms';
import {HomeModule} from '../home/home.module';
import {ListFilesComponent} from '../list-files/list-files.component';

@NgModule({
    declarations: [
        ListUsersComponent,
        AddUserComponent,
        ListKittensComponent,
        AddKittenComponent,
        ListReviewsComponent,
        LoginComponent,
        ListFilesComponent
    ],
    imports: [
        BrowserModule,
        NavMenuAdminRoutingModule,
        HttpClientModule,
        FormsModule,
        HomeModule
    ],
    providers: [],
    bootstrap: [NavMenuAdminComponent]
})
export class NavMenuAdminModule { }