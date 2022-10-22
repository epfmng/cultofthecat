import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AddReviewComponent} from '../add-review/add-review.component';
import {ListReviewsComponent} from '../list-reviews/list-reviews.component';
import {LoginComponent} from '../login/login.component';
import {HomeComponent} from '../home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'list-review', component: ListReviewsComponent },
  { path: 'add-review', component: AddReviewComponent },
  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class NavMenuUserRoutingModule { }
