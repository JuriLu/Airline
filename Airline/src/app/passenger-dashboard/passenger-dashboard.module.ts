import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PassengerDashboardComponent } from './containers/passenger-dashboard/passenger-dashboard.component';
import { RouterModule } from '@angular/router';
import { ROUTES } from './routes';



@NgModule({
  declarations: [
    PassengerDashboardComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES)
  ]
})
export class PassengerDashboardModule { }
