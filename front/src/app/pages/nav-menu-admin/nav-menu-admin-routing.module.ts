import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ListUsersComponent} from '../list-users/list-users.component';
import {AddUserComponent} from '../add-user/add-user.component';
import {ListKittensComponent} from '../list-kittens/list-kittens.component';
import {AddKittenComponent} from '../add-kitten/add-kitten.component';
import {ListReviewsComponent} from '../list-reviews/list-reviews.component';
import {LoginComponent} from '../login/login.component';
import {HomeComponent} from '../home/home.component';
import {ListFilesComponent} from '../list-files/list-files.component';

const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'users', component: ListUsersComponent},
    {path: 'add-user', component: AddUserComponent},
    {path: 'kittens', component: ListKittensComponent},
    {path: 'add-kitten', component: AddKittenComponent},
    {path: 'list-review', component: ListReviewsComponent},
    {path: 'login', component: LoginComponent},
    {path: 'images', component: ListFilesComponent},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class NavMenuAdminRoutingModule {
}
