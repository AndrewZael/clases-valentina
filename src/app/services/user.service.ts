import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject, Observable, of } from 'rxjs';
import { userInterface } from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  user: userInterface = { name: 'Andres', lastname: 'Valdes', age: 30} as userInterface;
  userObs: Subject<userInterface> = new Subject();
  userObsB: BehaviorSubject<userInterface> = new BehaviorSubject(this.user);

  getCurrentUser(): userInterface{
    return this.user;
  }

  setCurrentUser(user: userInterface){
    this.user = user;
    this.userObsB.next(this.user);  
  }

  getData(): Observable<userInterface>{
    // Esta forma solo estoy retornando un observable, pero no puedo cambiarlo más adelante
    //return of(this.user);

    // De esta forma puedo retornar un observable que este afecto a cambios utilizando el pipe async
    // Aquí estoy retornado el observable de la variable userObsB
    return this.userObsB.asObservable();
  }


}