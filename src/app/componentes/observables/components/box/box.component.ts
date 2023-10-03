import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { userInterface } from 'src/app/interfaces/user.interface';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-box',
  templateUrl: './box.component.html',
})
export class BoxComponent implements OnInit {

  constructor(private userService: UserService){}
  currentUser: userInterface = {} as userInterface;
  age: number = 20;
  user$: Observable<userInterface> = new Observable();

  ngOnInit(): void {
    setTimeout(() => {
      this.currentUser = this.userService.getCurrentUser();
      this.user$ = this.userService.getData();
    },2000);

    this.userService.userObs.subscribe((user: userInterface) => {
      this.currentUser = user;
    });
  }

  setUser(e: any){
    this.currentUser.name = e.target.value;
    this.userService.setCurrentUser(this.currentUser);
  }

}
