import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {MyReviewsComponent} from './my-reviews.component';
import {MyReviewsRoutingModule} from './my-reviews-routing.module';

@NgModule({
    declarations: [],
    imports: [
        BrowserModule,
        MyReviewsRoutingModule,
        HttpClientModule
    ],
    providers: [],
    bootstrap: [MyReviewsComponent]
})
export class MyReviewsModule {
}