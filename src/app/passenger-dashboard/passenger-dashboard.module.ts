import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PassengerDashboardComponent} from './containers/passenger-dashboard/passenger-dashboard.component';
import {RouterModule} from '@angular/router';
import {ROUTES} from './routes';
import {PassengerCountComponent} from './components/passenger-count/passenger-count.component';
import {HttpClientModule} from "@angular/common/http";
import {PassengerFormComponent} from './components/passenger-form/passenger-form.component';
import {PassengerDialogDetailComponent} from "./components/passenger-dialog-detail/passenger-dialog-detail.component";
import {DialogModule} from "primeng/dialog";
import {ToastModule} from "primeng/toast";
import {CardModule} from "primeng/card";
import {PassengerCardComponent} from "./components/passenger-card/passenger-card.component";
import {InputTextModule} from "primeng/inputtext";

@NgModule({
  declarations: [
    PassengerDashboardComponent,
    PassengerCountComponent,
    PassengerCardComponent,
    PassengerFormComponent,
    PassengerDialogDetailComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES),
    HttpClientModule,
    DialogModule,
    ToastModule,
    CardModule,
    InputTextModule
  ],
  providers:[]
})
export class PassengerDashboardModule { }
