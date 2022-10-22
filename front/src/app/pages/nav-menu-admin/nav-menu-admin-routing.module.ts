import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListUsersComponent} from '../list-users/list-users.component';
import {AddUserComponent} from '../add-user/add-user.component';
import {ListKittensComponent} from '../list-kittens/list-kittens.component';
import {AddKittenComponent} from '../add-kitten/add-kitten.component';
import {ListReviewsComponent} from '../list-reviews/list-reviews.component';
import {LoginComponent} from '../login/login.component';
import {HomeComponent} from '../home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'users', component: ListUsersComponent },
  { path: 'add-user', component: AddUserComponent },
  { path: 'kittens', component: ListKittensComponent },
  { path: 'add-kitten', component: AddKittenComponent },
  { path: 'list-review', component: ListReviewsComponent },
  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class NavMenuAdminRoutingModule { }
