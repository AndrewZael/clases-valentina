import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html'
})
export class HijoComponent {

  constructor(){
  }

  @Input() edad: number = 0;
  arr: Array<any> = [
    {
      name: 'Usuario 1',
      age: 25
    },
    {
      name: 'Usuario 1',
      age: 40
    },
    {
      name: 'Usuario 1',
      age: 65
    }
  ];
  @Output() changeYear: EventEmitter<Array<any>> = new EventEmitter();

  changeAge(){
    this.changeYear.emit(this.arr);
  }

}
