import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-observables',
  templateUrl: './observables.component.html',
})
export class ObservablesComponent implements OnInit {

  constructor(private userService: UserService){}
  age: number = 20;
  
  ngOnInit(): void {
    
  }

}
