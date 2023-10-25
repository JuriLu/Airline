import { Component, OnInit } from '@angular/core';
import { PassengerDashboardService } from '../../services/passenger-dashboard.service';
import { Passenger } from '../../interfaces/passenger.interface';
import {Observable, map, switchMap, tap} from 'rxjs';
import {ActivatedRoute, ParamMap,Router} from "@angular/router";
import {Child} from "../../interfaces/child.interface";

@Component({
  selector: 'app-passenger-view',
  templateUrl:'./passenger-view.component.html' ,
  styleUrls: ['./passenger-view.component.scss']
})
export class PassengerViewComponent implements OnInit {

  passenger$!:Observable<Passenger>;
  visible: boolean = true;
  Children:Child[] = []

  constructor(
    private passengerService: PassengerDashboardService,
    private router:Router,
    private route:ActivatedRoute
    ){

  }

  ngOnInit(): void {
    this.showingDetails().subscribe()
  }

  navBack(){
    this.router.navigate(['../'])
  }

  showingDetails():Observable<Passenger>{
    return this.route.paramMap.pipe(
      switchMap((p:ParamMap)=>{
        let passengerId = p.get('passengerId') as string
        return this.passenger$ = this.passengerService.getPassenger(passengerId).pipe(
          map((response:Passenger)=> { return response }),
        )
      }),
      tap((response:Passenger)=>{
        if (response.children)
          this.Children = response.children
        console.log(this.Children)
      })
    )
  }
}
