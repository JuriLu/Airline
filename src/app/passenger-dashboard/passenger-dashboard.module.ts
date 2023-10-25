import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PassengerDashboardComponent } from './containers/passenger-dashboard/passenger-dashboard.component';
import { RouterModule } from '@angular/router';
import { ROUTES } from './routes';
import { PassengerDetailComponent } from './components/passenger-detail/passenger-detail.component';
import { PassengerCountComponent } from './components/passenger-count/passenger-count.component';
import {HttpClientModule} from "@angular/common/http";




@NgModule({
  declarations: [
    PassengerDashboardComponent,
    PassengerDetailComponent,
    PassengerCountComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES),
    HttpClientModule
  ]
})
export class PassengerDashboardModule { }
