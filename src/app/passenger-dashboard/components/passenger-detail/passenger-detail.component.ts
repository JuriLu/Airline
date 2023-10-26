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

  onNameChange(value: string):void {
    this.detail.fullname = value
  }

  toggleEdit(event:Event):void{
    event.stopPropagation()  // stopPropagation function => **
    if(this.editing){
      this.edit.emit(this.detail)
    }
      this.editing = !this.editing

  }

  onRemove(event:Event):void{
      event.stopPropagation()
      this.remove.emit(this.detail)
  }
}

// ** Toggle edit button is inside this component, this component is inside li element in passenger-dashboard comonent
//    both li and this button are clickable with their own function when clicked, li opens passenger-view component
//    and toggleEdit edits the name in this component. When button clicked , the click function in li is also
//    triggered because theoretically that is also clicked too. stopPropagation stops that
