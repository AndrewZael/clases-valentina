import { Component, Input } from '@angular/core';
import { userInterface } from 'src/app/interfaces/user.interface';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-box-ii',
  templateUrl: './box-ii.component.html',
})
export class BoxIIComponent {

  constructor(private userService: UserService){}
  currentUser: userInterface = {} as userInterface;
  @Input() age: number = 0;

  ngOnInit(): void {
    this.userService.userObsB.subscribe((user: userInterface) => {
      console.log(user);
      this.currentUser = user;
    });
  }

}
