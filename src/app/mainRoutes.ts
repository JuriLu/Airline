import {Routes} from "@angular/router";

export const MAIN_ROUTES: Routes = [
  {
    path:'',
    loadChildren: ()=> import('./passenger-dashboard/passenger-dashboard.module').then((m)=>m.PassengerDashboardModule)
  }
]
