import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {PassengerDashboardModule} from './passenger-dashboard/passenger-dashboard.module';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MessageService} from "primeng/api";


@NgModule({
  declarations: [
    AppComponent,
  ],
    imports: [
        //ANGULAR Modules
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,

        //CUSTOM Modules
        PassengerDashboardModule,
    ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
