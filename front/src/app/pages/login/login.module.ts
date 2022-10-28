import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {HttpClientModule} from '@angular/common/http';
import {LoginRoutingModule} from './login-routing.module';
import {LoginComponent} from './login.component';

@NgModule({
    declarations: [],
    imports: [
        BrowserModule,
        LoginRoutingModule,
        HttpClientModule
    ],
    providers: [],
    bootstrap: [LoginComponent]
})
export class LoginModule {
}