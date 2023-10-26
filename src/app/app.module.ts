import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PassengerDashboardModule } from './passenger-dashboard/passenger-dashboard.module';
import {DialogModule} from "primeng/dialog";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";


@NgModule({
  declarations: [
    AppComponent,
  ],
    imports: [
        //ng Modules
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        //custom Modules
        PassengerDashboardModule,
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
