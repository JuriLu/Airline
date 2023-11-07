import {Component, OnDestroy, OnInit} from '@angular/core';
import {Passenger} from '../../interfaces/passenger.interface';
import {ActivatedRoute, Data, Router} from "@angular/router";
import {Child} from "../../interfaces/child.interface";
import {filter, map, Subscription} from "rxjs";

@Component({
  selector: 'app-passenger-dialog-detail',
  templateUrl:'./passenger-dialog-detail.component.html' ,
  styleUrls: ['./passenger-dialog-detail.component.scss']
})
export class PassengerDialogDetailComponent implements OnInit, OnDestroy {

  passenger!:Passenger;
  visible: boolean = true;
  Children:Child[] = []
  Data$!:Subscription

  constructor(
    private router:Router,
    private activatedRoute:ActivatedRoute
    ){}

  ngOnDestroy(): void {
      this.Data$.unsubscribe()
    }

  ngOnInit(): void {
    this.showingDetails()
  }

  navBack():void{
    this.router.navigate(['../'])
  }

  showingDetails():void {
   this.Data$ = this.activatedRoute.data
     .pipe(
       map((data:Data | any ) : Passenger=>{
          return data['passenger'] as Passenger
         }
       ),
       filter((passenger:Passenger | any)=> {
         if (passenger) return passenger
       })
     )
     .subscribe((passengerRes:Passenger):void=>{
      this.passenger = passengerRes
      this.passenger.children ? this.Children = passengerRes.children as Child[] : []
     })
  }
}
