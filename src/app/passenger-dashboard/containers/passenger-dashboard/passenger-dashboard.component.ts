import {Component, OnDestroy, OnInit} from '@angular/core';
import {Passenger} from '../../interfaces/passenger.interface';
import {PassengerDashboardService} from '../../services/passenger-dashboard.service';
import {Subscription} from 'rxjs';
import {ActivatedRoute, Router} from "@angular/router";
import {RxJS_CatchError} from "../../reusablePipes/catchError";


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
      RxJS_CatchError('ERROR IN FETCHING DATA - PASSENGER-DASHBOARD-COMPONENT')
    )
    .subscribe((response:Passenger[] | any):void=>{this.Passengers = response})
    )
  }

  ngOnDestroy(): void {
      this.subscriptions.length > 0 && this.subscriptions.forEach((s:Subscription)=>s.unsubscribe())
  }

  handleRemove(event:Passenger){
    console.log('Delete Event',event)
    this.subscriptions.push(this.passengerService.deletePassenger(event)
    .pipe(
      RxJS_CatchError('ERROR IN DELETE')
    )
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
          RxJS_CatchError('ERROR IN UPDATE')
        )
      .subscribe((response:Passenger | any)=>{
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

  showDialog(id:number):void {
    this.router.navigate([id],{relativeTo:this.route})
  }

  newPass():void{
    this.router.navigate(['new'],{relativeTo:this.route})
  }

}
