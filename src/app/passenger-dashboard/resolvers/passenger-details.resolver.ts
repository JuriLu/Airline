import {ActivatedRouteSnapshot, ResolveFn, Router, RouterStateSnapshot} from '@angular/router';
import {catchError, EMPTY, Observable} from "rxjs";
import {Passenger} from "../interfaces/passenger.interface";
import {PassengerDashboardService} from "../services/passenger-dashboard.service";
import {inject} from "@angular/core";
import {MessageService} from "primeng/api";

export const passengerDetailsResolver : ResolveFn<Observable<Passenger> | boolean> =
  (route:ActivatedRouteSnapshot,state: RouterStateSnapshot):Observable<Passenger> | any => {


  const passengerService:PassengerDashboardService = inject(PassengerDashboardService)
  const router:Router = inject(Router)
  const messageService:MessageService = inject(MessageService)

  let passengerId:string = route.paramMap.get('passengerId') as string

  if ( Number(passengerId) ){   //This check is neccessary so, it will throw an error only the dynamic parameter is a number and its not one of the IDs of the passenger
    return passengerService.getPassenger(passengerId).pipe(
      // delay(500),
      catchError((err)=>{
        router.navigate(['passengers'])
        console.log("ERROR IN FETCH - RESOLVER-PASSENGER-DETAILS",err)
        messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: `PASSENGER DOESN'T EXISTS`
        })
        return EMPTY
      })
    )
  } else {
        router.navigate(['passengers'])
        console.log('ID IS NOT NUMBER - RESOLVER-PASSENGER-DETAILS')
        messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: `WRONG ID FORMAT - CONTACT SUPPORT`
        })
        return EMPTY
  }
};


