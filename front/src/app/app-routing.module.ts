import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListUsersComponent} from './pages/list-users/list-users.component';
import {AddUserComponent} from './pages/add-user/add-user.component';
import {ListKittensComponent} from './pages/list-kittens/list-kittens.component';
import {AddKittenComponent} from './pages/add-kitten/add-kitten.component';


const routes: Routes = [
  { path: '', component: ListUsersComponent },
  { path: 'users', component: ListUsersComponent },
  { path: 'add-user', component: AddUserComponent },
  { path: 'kittens', component: ListKittensComponent },
  { path: 'add-kitten', component: AddKittenComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
