import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PassengerDashboardModule } from './passenger-dashboard/passenger-dashboard.module';
import {HeaderComponent} from "./header/header.component";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    //ng Modules
    BrowserModule,
    AppRoutingModule,
    //custom Modules
    PassengerDashboardModule,
    HeaderComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
