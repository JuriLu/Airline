import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Passenger } from '../../interfaces/passenger.interface';

@Component({
  selector: 'app-passenger-detail',
  templateUrl: './passenger-detail.component.html',
  styleUrls: ['./passenger-detail.component.scss']
})
export class PassengerDetailComponent {
  @Input() detail!: Passenger
  @Output() remove:EventEmitter<any> = new EventEmitter()
  @Output() edit:EventEmitter<any> = new EventEmitter()

  editing: boolean = false;

  constructor(){}
  
  onNameChange(value: string) {
    this.detail.fullname = value
  }

  toggleEdit(){
    if(this.editing){
      this.edit.emit(this.detail)
    }
      this.editing = !this.editing
      
  }

  onRemove(){
      this.remove.emit(this.detail)
  }

}

