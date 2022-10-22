import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule} from '@angular/common/http';
import {ListReviewsComponent} from './list-reviews.component';
import {ListReviewsRoutingModule} from './list-reviews-routing.module';

@NgModule({
    declarations: [
    ],
    imports: [
        BrowserModule,
        ListReviewsRoutingModule,
        HttpClientModule
    ],
    providers: [],
    bootstrap: [ListReviewsComponent]
})
export class ListReviewsModule { }