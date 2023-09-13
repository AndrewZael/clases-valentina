import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-padre',
  templateUrl: './padre.component.html'
})
export class PadreComponent {

  edad: number = 18;

  changeAge(){
    this.edad = this.edad * 2;
  }

  getDataChild(data: any){
    console.log(data);
    this.edad = data[2].age;
  }

}
