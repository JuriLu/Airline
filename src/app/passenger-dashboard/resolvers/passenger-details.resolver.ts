import {ActivatedRouteSnapshot, ResolveFn, RouterStateSnapshot} from '@angular/router';
import {delay, Observable} from "rxjs";
import {Passenger} from "../interfaces/passenger.interface";
import {PassengerDashboardService} from "../services/passenger-dashboard.service";
import {inject} from "@angular/core";
import {RxJS_CatchError} from "../reusablePipes/catchError";

export const passengerDetailsResolver : ResolveFn<Observable<Passenger>> = (route:ActivatedRouteSnapshot,state: RouterStateSnapshot):Observable<Passenger> | any => {
  const passengerService:PassengerDashboardService = inject(PassengerDashboardService)
  let passengerId:string = route.paramMap.get('passengerId') as string

  return passengerService.getPassenger(passengerId).pipe(
    delay(250),
    RxJS_CatchError('ERROR IN FETCH - RESOLVER-PASSENGER-DETAILS'),
  )

};
