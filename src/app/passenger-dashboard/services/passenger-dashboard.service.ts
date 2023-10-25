import { Injectable } from '@angular/core';
import { Passenger } from '../interfaces/passenger.interface';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PassengerDashboardService {

  constructor(private http: HttpClient) { }

  getPassengers():Passenger[] {
  
    return [
      {
        id:1,
        fullname: 'Stephen Curry',
        checkedIn: true,
        checkInDate: 1687501476000,
        children:[
          {
            name:'Jasmine Curry',
            age:4
        }]
      },
      {
        id:2,
        fullname: 'Rose Chillingham',
        checkedIn: false,
        checkInDate: 11697490148000  
      },
      {
        id:3,
        fullname: 'James Brown',
        checkedIn: true,
        checkInDate: 1702581969000,
        children:[
          {
            name:'David Brown',
            age:5
        }] 
    
      },
      {
        id:4,
        fullname: 'Louise Sumon',
        checkedIn: true,
        checkInDate: 1684349763000 
    
      },
      {
        id:5,
        fullname: 'Tina Craig',
        checkedIn: false,
        checkInDate: 1687857663000,
        children:[
          {
            name:'Julia Craig',
            age:6
        }] 
    
      }
      ]
  }
}
