import { Component, OnDestroy, OnInit } from '@angular/core';
import { Passenger } from '../../interfaces/passenger.interface';
import { TestBed } from '@angular/core/testing';
import { PassengerDashboardService } from '../../services/passenger-dashboard.service';
import { EMPTY, Subscription, catchError } from 'rxjs';
import {ActivatedRoute, Router} from "@angular/router";



@Component({
  selector: 'app-passenger-dashboard',
  templateUrl: './passenger-dashboard.component.html',
  styleUrls: ['./passenger-dashboard.component.scss']
})
export class PassengerDashboardComponent implements OnInit, OnDestroy {

  Passengers: Passenger[] = []
  subscriptions: Subscription[] = []

  constructor(
    private passengerService :PassengerDashboardService,
    private router:Router,
    private route:ActivatedRoute
  ){

  }

  ngOnInit(): void {
    this.subscriptions.push(this.passengerService.getPassengers()
    .pipe(
      catchError((err)=>{
      console.log('ERROR IN GET: ',err)
      return EMPTY
    }))
    .subscribe((response:Passenger[])=>{
      this.Passengers = response
    })
    )
  }

  ngOnDestroy(): void {
      this.subscriptions.length > 0 && this.subscriptions.forEach((s:Subscription)=>s.unsubscribe())
  }

  handleRemove(event:Passenger){
    console.log('Delete Event',event)
    this.subscriptions.push(this.passengerService.deletePassenger(event)
    .pipe(
      catchError((err)=>{
      console.log('ERROR IN DELETE',err)
      return EMPTY
    }))
    .subscribe(()=>{
      this.Passengers = this.Passengers.filter((passenger:Passenger) => {
        return passenger.id !== event.id
      })
    })
    )
  }

  handleEdit(event:Passenger){
    this.subscriptions.push( this.passengerService.updatePassenger(event)
    .pipe(
      catchError((err)=>{
      console.log('ERROR IN UPDATE',err)
      return EMPTY
    }))
    .subscribe((response:Passenger)=>{
      this.Passengers = this.Passengers.map((passenger: Passenger) => {
        if(passenger.id === event.id){
          passenger = Object.assign({},passenger,response)  // Merges the changes coming from the Output to our Current Array
        }
        return passenger
      })
    })
    )

    console.log('Edited Passengers',this.Passengers)
  }

  showDialog(id:number) {
    this.router.navigate([id],{relativeTo:this.route})
  }

}
