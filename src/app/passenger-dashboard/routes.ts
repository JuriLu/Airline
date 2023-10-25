import { Route } from "@angular/router";
import { PassengerDashboardComponent } from "./containers/passenger-dashboard/passenger-dashboard.component";
import { PassengerViewComponent } from "./containers/passenger-view/passenger-view.component";

export const ROUTES: Route[] = [
  {
    path: '',
    redirectTo: 'passengers',
    pathMatch: 'full'
  },
  {
    path:'passengers',
    component:PassengerDashboardComponent,
    children:[
      {
        path:':passengerId',
        component:PassengerViewComponent
      }
      ]
  },

]
