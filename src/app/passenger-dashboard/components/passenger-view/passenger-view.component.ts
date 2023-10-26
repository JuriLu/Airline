import {Component, OnInit} from '@angular/core';
import {Passenger} from '../../interfaces/passenger.interface';
import {ActivatedRoute, Data, Router} from "@angular/router";
import {Child} from "../../interfaces/child.interface";

@Component({
  selector: 'app-passenger-view',
  templateUrl:'./passenger-view.component.html' ,
  styleUrls: ['./passenger-view.component.scss']
})
export class PassengerViewComponent implements OnInit {

  passenger!:Passenger;
  visible: boolean = true;
  Children:Child[] = []

  constructor(
    private router:Router,
    private activatedRoute:ActivatedRoute
    ){}

  ngOnInit(): void {
    this.showingDetails()
  }

  navBack():void{
    this.router.navigate(['../'])
  }

  showingDetails():void{
    this.activatedRoute.data.subscribe((data:Data | any):void=>{
      this.passenger = data['passenger']
      this.passenger.children ? this.Children = this.passenger.children : []
      console.log(data)
    })
  }
}
