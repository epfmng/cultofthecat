import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {HttpClientModule} from '@angular/common/http';
import {HomeRoutingModule} from './home-routing.module';
import {HomeComponent} from './home.component';

@NgModule({
    declarations: [],
    imports: [
        BrowserModule,
        HomeRoutingModule,
        HttpClientModule
    ],
    providers: [],
    bootstrap: [HomeComponent]
})
export class HomeModule {
}