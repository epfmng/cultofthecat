import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {MyReviewsComponent} from './my-reviews.component';

const routes: Routes = [
    {path: '', component: MyReviewsComponent},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class MyReviewsRoutingModule {
}
