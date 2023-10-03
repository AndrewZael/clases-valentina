import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject, Observable, of } from 'rxjs';
import { userInterface } from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  user: userInterface = { name: 'Andres', lasname: 'Valdes', age: 30} as userInterface;
  userObs: Subject<userInterface> = new Subject();
  userObsB: BehaviorSubject<userInterface> = new BehaviorSubject(this.user);

  getCurrentUser(): userInterface{
    return this.user;
  }

  setCurrentUser(user: userInterface){
    this.userObsB.next(user);
    this.user = user;  
  }

  getData(): Observable<userInterface>{
    return of(this.user);
  }


}