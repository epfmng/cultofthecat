import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {HomeComponent} from './pages/home/home.component';
import {NavMenuAdminComponent} from './pages/nav-menu-admin/nav-menu-admin.component';
import {NavMenuUserComponent} from './pages/nav-menu-user/nav-menu-user.component';
import {ListUsersComponent} from './pages/list-users/list-users.component';
import {AddUserComponent} from './pages/add-user/add-user.component';
import {ListKittensComponent} from './pages/list-kittens/list-kittens.component';
import {AddKittenComponent} from './pages/add-kitten/add-kitten.component';
import {ListReviewsComponent} from './pages/list-reviews/list-reviews.component';
import {LoginComponent} from './pages/login/login.component';
import {AddReviewComponent} from './pages/add-review/add-review.component';
import {MyReviewsComponent} from './pages/my-reviews/my-reviews.component';
import {ListFilesComponent} from './pages/list-files/list-files.component';


const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'nav-menu-admin', component: NavMenuAdminComponent},
    {path: 'nav-menu-user', component: NavMenuUserComponent},
    {path: 'users', component: ListUsersComponent},
    {path: 'add-user', component: AddUserComponent},
    {path: 'kittens', component: ListKittensComponent},
    {path: 'add-kitten', component: AddKittenComponent},
    {path: 'list-review', component: ListReviewsComponent},
    {path: 'add-review', component: AddReviewComponent},
    {path: 'my-review', component: MyReviewsComponent},
    {path: 'login', component: LoginComponent},
    {path: 'images', component: ListFilesComponent},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
