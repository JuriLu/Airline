import { Route } from "@angular/router";
import { PassengerDashboardComponent } from "./containers/passenger-dashboard/passenger-dashboard.component";
import {PassengerDialogDetailComponent} from "./components/passenger-dialog-detail/passenger-dialog-detail.component";
import {PassengerFormComponent} from "./components/passenger-form/passenger-form.component";
import {passengerDetailsResolver} from "./resolvers/passenger-details.resolver";

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
        path:'new',
        component:PassengerFormComponent
      },
      {
        path:':passengerId',
        component:PassengerDialogDetailComponent,
        resolve:{
          passenger: passengerDetailsResolver
        }
        }
      ]
  },
  {
    path:'**',
    component:PassengerDashboardComponent
  }

]
