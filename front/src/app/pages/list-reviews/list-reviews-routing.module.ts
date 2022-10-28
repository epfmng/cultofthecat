import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ListReviewsComponent} from './list-reviews.component';

const routes: Routes = [
    {path: '', component: ListReviewsComponent},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class ListReviewsRoutingModule {
}
