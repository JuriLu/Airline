import { Component, OnInit } from '@angular/core';
import { Passenger } from '../../interfaces/passenger.interface';
import { TestBed } from '@angular/core/testing';



@Component({
  selector: 'app-passenger-dashboard',
  templateUrl: './passenger-dashboard.component.html',
  styleUrls: ['./passenger-dashboard.component.scss']
})
export class PassengerDashboardComponent implements OnInit {

  Passengers: Passenger[] = []

  constructor(){

  }

  ngOnInit(): void {
    this.Passengers = [
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

  handleRemove(event:Passenger){
    console.log('Delete Event',event)
    this.Passengers = this.Passengers.filter((passenger:Passenger) => {
      return passenger.id !== event.id
    })
  }

  handleEdit(event:Passenger){
    this.Passengers = this.Passengers.map((passenger: Passenger) => {
      if(passenger.id === event.id){
        passenger = Object.assign({},passenger,event)  // Merges the changes coming from the Output to our Current Array
      }

      return passenger
    })
    console.log('Edited Passengers',this.Passengers)
  }

}
