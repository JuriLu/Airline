import { Injectable } from '@angular/core';
import { Passenger } from '../interfaces/passenger.interface';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PassengerDashboardService {

  constructor(private http: HttpClient) { }

  getPassengers():Passenger[] {
  
    return 
  }
}
