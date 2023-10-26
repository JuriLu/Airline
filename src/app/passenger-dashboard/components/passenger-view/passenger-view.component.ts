import {Component, OnDestroy, OnInit} from '@angular/core';
import {Passenger} from '../../interfaces/passenger.interface';
import {ActivatedRoute, Data, Router} from "@angular/router";
import {Child} from "../../interfaces/child.interface";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-passenger-view',
  templateUrl:'./passenger-view.component.html' ,
  styleUrls: ['./passenger-view.component.scss']
})
export class PassengerViewComponent implements OnInit, OnDestroy {

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

  showingDetails():void{
   this.Data$ = this.activatedRoute.data.subscribe((data:Data | any):void=>{
      this.passenger = data['passenger']
      this.passenger.children ? this.Children = this.passenger.children : []
      console.log(data)
    })
  }
}
