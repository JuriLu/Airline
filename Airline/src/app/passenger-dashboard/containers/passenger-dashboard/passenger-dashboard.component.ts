import { Component, OnInit } from '@angular/core';
import { Passenger } from '../../interfaces/passenger.interface';
import { TestBed } from '@angular/core/testing';
import { PassengerDashboardService } from '../../services/passenger-dashboard.service';



@Component({
  selector: 'app-passenger-dashboard',
  templateUrl: './passenger-dashboard.component.html',
  styleUrls: ['./passenger-dashboard.component.scss']
})
export class PassengerDashboardComponent implements OnInit {

  Passengers: Passenger[] = []

  constructor(
    private passengerService :PassengerDashboardService
  ){

  }

  ngOnInit(): void {
    this.Passengers = this.passengerService.getPassengers()
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
