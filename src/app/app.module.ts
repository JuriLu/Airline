import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PassengerDashboardModule } from './passenger-dashboard/passenger-dashboard.module';
import { PassengerViewComponent } from './passenger-dashboard/containers/passenger-view/passenger-view.component';
import {DialogModule} from "primeng/dialog";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";


@NgModule({
  declarations: [
    AppComponent,
    PassengerViewComponent
  ],
    imports: [
        //ng Modules
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        //custom Modules
        PassengerDashboardModule,
        DialogModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
