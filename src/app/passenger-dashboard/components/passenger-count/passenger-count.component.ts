import { Component, Input, OnInit } from '@angular/core';
import { Passenger } from '../../interfaces/passenger.interface';

@Component({
  selector: 'app-passenger-count',
  template: `<div class="box">
    <p class="h2">Airline Count</p>
    <div class="h6">
      Total checked in: {{this.checkedInCount()}}/{{this.items.length}}
    </div>
  </div>`,
  styles: [`
    .box {
      background: hsl(0, 0%, 100%);
      padding: 16px 24px;
      position: relative;
      border-radius: 8px;
      box-shadow: 0 0 0 1px rgba(0,0,0,.01);

      &::after {
        position: absolute;
        content: "";
        top: 15px;
        left: 0;
        right: 0;
        z-index: -1;
        height: 100%;
        width: 100%;
        transform: scale(0.9) translateZ(0);
        filter: blur(15px);
        background: linear-gradient(
            to left,
            #ff5770,
            #e4428d,
            #c42da8,
            #9e16c3,
            #6501de,
            #9e16c3,
            #c42da8,
            #e4428d,
            #ff5770
        );
        background-size: 200% 200%;
        animation: animateGlow 1.25s linear infinite;
      }
    }

    @keyframes animateGlow {
      0% {
        background-position: 0% 50%;
      }
      100% {
        background-position: 200% 50%;
      }
    }`]
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
