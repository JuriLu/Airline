import { Component, OnInit } from '@angular/core';
import { PassengerDashboardService } from '../../services/passenger-dashboard.service';
import { Passenger } from '../../interfaces/passenger.interface';
import { Observable, map } from 'rxjs';
import {Router} from "@angular/router";

@Component({
  selector: 'app-passenger-view',
  templateUrl:'./passenger-view.component.html' ,
  styleUrls: ['./passenger-view.component.scss']
})
export class PassengerViewComponent implements OnInit {

  passenger$!:Observable<Passenger>;
  visible: boolean = true;

  constructor(
    private passengerService: PassengerDashboardService,
    private router:Router
    ){

  }

  ngOnInit(): void {
    this.passenger$ = this.passengerService.getPassenger(2).pipe(
      map((response:Passenger)=> {return response})
    )
  }

  navBack(){
    this.router.navigate(['../'])
  }
}
