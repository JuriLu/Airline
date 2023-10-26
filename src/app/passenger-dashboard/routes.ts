import { Route } from "@angular/router";
import { PassengerDashboardComponent } from "./containers/passenger-dashboard/passenger-dashboard.component";
import {PassengerViewComponent} from "./components/passenger-view/passenger-view.component";
import {PassengerFormComponent} from "./components/passenger-form/passenger-form.component";

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
      },
      {
        path:'new',
        component:PassengerFormComponent
      }
      ]
  },

]
