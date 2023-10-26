import { Component } from '@angular/core';
import {PassengerDashboardService} from "../../services/passenger-dashboard.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-passenger-form',
  templateUrl: './passenger-form.component.html',
  styleUrls: ['./passenger-form.component.scss']
})
export class PassengerFormComponent {
  visible: boolean = true;
  isEdit: boolean = true;

  constructor(
    private router:Router,
  ) {
  }
  navBack():void{
    this.router.navigate(['../'])
  }
}
