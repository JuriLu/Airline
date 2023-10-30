import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {PassengerDashboardModule} from './passenger-dashboard/passenger-dashboard.module';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MessageService} from "primeng/api";
import {PreloadAllModules, RouterModule} from "@angular/router";
import {MAIN_ROUTES} from "./mainRoutes";
import {MatProgressBarModule} from "@angular/material/progress-bar";


@NgModule({
  declarations: [
    AppComponent,
  ],
    imports: [
        //ANGULAR Modules
        BrowserModule,
        BrowserAnimationsModule,
        RouterModule.forRoot(MAIN_ROUTES ,{preloadingStrategy: PreloadAllModules}),
        //CUSTOM Modules
        PassengerDashboardModule,
        //ANGULAR Material
        MatProgressBarModule
    ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
