import { Component, Input, OnInit } from '@angular/core';
import { Passenger } from '../../interfaces/passenger.interface';

@Component({
  selector: 'app-passenger-count',
  template: `<div class="container-fluid">
    <h3>Airline Count</h3>
    <div class="h6">
      Total checked in: {{this.checkedInCount()}}/{{this.items.length}}
    </div>
  </div>`,
  styleUrls: ['./passenger-count.component.scss']
})
export class PassengerCountComponent implements OnInit{
  @Input() items!:Passenger[]

  constructor(){
    
  }

  ngOnInit(){
  }

  checkedInCount(): number{
    return this.items.filter((passenger:Passenger) => passenger.checkedIn).length
  }
}
