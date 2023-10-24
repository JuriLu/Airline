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
    fullname: 'Stephen',
    checkedIn: true,
    checkInDate: 1687501476000,
    children:[
      {
        name:'Jasmine',
        age:4
    }]
  },
  {
    id:2,
    fullname: 'Rose',
    checkedIn: false,
    checkInDate: 11697490148000  
  },
  {
    id:3,
    fullname: 'James',
    checkedIn: true,
    checkInDate: 1702581969000,
    children:[
      {
        name:'David',
        age:5
    }] 

  },
  {
    id:4,
    fullname: 'Louise',
    checkedIn: true,
    checkInDate: 1684349763000 

  },
  {
    id:5,
    fullname: 'Tina',
    checkedIn: false,
    checkInDate: 1687857663000,
    children:[
      {
        name:'Julia',
        age:6
    }] 

  }
    ]
  }

}
