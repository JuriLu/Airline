import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PassengerDashboardModule } from './passenger-dashboard/passenger-dashboard.module';
import { PassengerViewComponent } from './passenger-dashboard/containers/passenger-view/passenger-view.component';

@NgModule({
  declarations: [
    AppComponent,
    PassengerViewComponent
  ],
  imports: [
    //ng Modules
    BrowserModule,
    AppRoutingModule,
    //custom Modules
    PassengerDashboardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
