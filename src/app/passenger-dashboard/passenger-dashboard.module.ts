import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PassengerDashboardComponent} from './containers/passenger-dashboard/passenger-dashboard.component';
import {RouterModule} from '@angular/router';
import {ROUTES} from './routes';
import {PassengerDetailComponent} from './components/passenger-detail/passenger-detail.component';
import {PassengerCountComponent} from './components/passenger-count/passenger-count.component';
import {HttpClientModule} from "@angular/common/http";
import {PassengerFormComponent} from './components/passenger-form/passenger-form.component';
import {PassengerViewComponent} from "./components/passenger-view/passenger-view.component";
import {DialogModule} from "primeng/dialog";
import {ToastModule} from "primeng/toast";

@NgModule({
  declarations: [
    PassengerDashboardComponent,
    PassengerDetailComponent,
    PassengerCountComponent,
    PassengerFormComponent,
    PassengerViewComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES),
    HttpClientModule,
    DialogModule,
    ToastModule
  ],
  providers:[]
})
export class PassengerDashboardModule { }
