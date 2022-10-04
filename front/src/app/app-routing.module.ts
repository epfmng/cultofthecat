import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListUsersComponent} from './pages/list-users/list-users.component';
import {AddUserComponent} from './pages/add-user/add-user.component';
import {ListKittensComponent} from './pages/list-kittens/list-kittens.component';
import {AddKittenComponent} from './pages/add-kitten/add-kitten.component';
import {AddReviewComponent} from './pages/add-review/add-review.component';
import {ListReviewsComponent} from './pages/list-reviews/list-reviews.component';

const routes: Routes = [
  { path: '', component: ListUsersComponent },
  { path: 'users', component: ListUsersComponent },
  { path: 'add-user', component: AddUserComponent },
  { path: 'kittens', component: ListKittensComponent },
  { path: 'add-kitten', component: AddKittenComponent },
  { path: 'list-review', component: ListReviewsComponent },
  { path: 'add-review', component: AddReviewComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
