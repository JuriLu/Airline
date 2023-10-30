import {Component, OnDestroy, OnInit} from '@angular/core';
import {Passenger} from '../../interfaces/passenger.interface';
import {PassengerDashboardService} from '../../services/passenger-dashboard.service';
import {Subscription} from 'rxjs';
import {ActivatedRoute, Router} from "@angular/router";
import {RxJS_ReusablePipesService} from "../../reusablePipes/RxJS_ReusablePipes.service";
import {MessageService} from "primeng/api";


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
    private route:ActivatedRoute,
    private rxJS_ReusablePipesService:RxJS_ReusablePipesService,
    private messageService:MessageService
  ){

  }

  ngOnInit(): void {
    this.subscriptions.push(this.passengerService.getPassengers()
    .pipe(
      this.rxJS_ReusablePipesService.RxJS_CatchError('ERROR IN FETCH')
    )
    .subscribe((response:Passenger[] | any):void=>{this.Passengers = response})
    )
  }

  ngOnDestroy(): void {
      this.subscriptions.length > 0 && this.subscriptions.forEach((s:Subscription)=>s.unsubscribe())
  }

  handleRemove(event:Passenger):void {
    this.subscriptions.push(this.passengerService.deletePassenger(event)
      .pipe(
        this.rxJS_ReusablePipesService.RxJS_CatchError('ERROR IN DELETE')
      )
      .subscribe(():void=>{
        this.Passengers = this.deleteFilter(event)
        this.successToaster('SUCCESSFUL DELETE')
      })
    )
  }

  handleEdit(event:Passenger):void {

    this.subscriptions.push( this.passengerService.updatePassenger(event)
      .pipe(
        this.rxJS_ReusablePipesService.RxJS_CatchError('ERROR IN UPDATE')
      )
      .subscribe((response:Passenger | any):void=>{
       this.Passengers =  this.updateFunction(response,event)
        this.successToaster('SUCCESSFUL UPDATE')
      })
    )
    console.log('Edited Passengers',this.Passengers)
  }

  showDialog(id:number):void {
    this.router.navigate([id],{relativeTo:this.route})
  }

  newPassenger():void{
    this.router.navigate(['new'],{relativeTo:this.route})
  }

  test():void{
    this.router.navigate(['test'],{relativeTo:this.route})
  }

  test123():void{
    this.router.navigate(['123'],{relativeTo:this.route})
  }

  successToaster(successMessage:string):void{
    return this.messageService.add({
      severity: 'success',
      summary: 'Success',
      detail: successMessage
    })
  }

  deleteFilter = (passedEvent:Passenger) => {
    return this.Passengers.filter((passenger:Passenger):boolean => {
      return passenger.id !== passedEvent.id
    })
  }

  updateFunction = (responsePassenger:Passenger,passedEvent:Passenger) => {
   return this.Passengers.map((passenger: Passenger) => {
      if(passenger.id === passedEvent.id){
        passenger = Object.assign({},passenger,responsePassenger)  // Merges the changes coming from the Output to our Current Array
      }
      return passenger
    })
  }

}
