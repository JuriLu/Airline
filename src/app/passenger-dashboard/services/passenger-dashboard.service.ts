import { Injectable } from '@angular/core';
import { Passenger } from '../interfaces/passenger.interface';
import { HttpClient } from '@angular/common/http';
import { API } from '../enums/api.enum';
import { Observable } from 'rxjs';




@Injectable({
  providedIn: 'root'
})
export class PassengerDashboardService {

  constructor(private http: HttpClient) { }

  getPassengers():Observable<Passenger[]> {
    return this.http.get<Passenger[]>(API.HOST+API.PASSENGER)
  }

  updatePassenger(passenger:Passenger):Observable<Passenger>{
    return this.http.put<Passenger>(API.HOST + API.PASSENGER + `/${passenger.id}`,passenger)
  }

  deletePassenger(passenger:Passenger){
    return this.http.delete(API.HOST + API.PASSENGER + `/${passenger.id}`)
  }


  getPassenger(id:number):Observable<Passenger> {
    return this.http.get<Passenger>(API.HOST + API.PASSENGER + `/${id}`)
  }
}
