import { Component, Input, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { userInterface } from 'src/app/interfaces/user.interface';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-box-iii',
  templateUrl: './box-iii.component.html',
})
export class BoxIIIComponent implements OnDestroy {

  constructor(private userService: UserService){}
  suscription: Subscription = new Subscription();
  currentUser: userInterface = {} as userInterface;
  @Input() age: number = 0;

  ngOnInit(): void {
    this.suscription = this.userService.userObsB.subscribe((user: userInterface) => {
      this.currentUser = user;
    });
  }

  ngOnDestroy(): void {
    this.suscription.unsubscribe();
  }

}
