import { Component } from '@angular/core';
import { User } from '../interfaces/user';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  friends: User[];

 constructor() {
   const user1: User = {
     nick: 'Eduardo',
     subNick: ' hola',
     edad: 28,
     email: 'dasd@as.com',
     friend: true,
     uid: '1'
   };

   const user2: User = {
      nick: 'Mireya',
      subNick: ' hola',
      edad: 28,
      email: 'dasd@as.com',
      friend: true,
      uid: '1'
    };

    const user3: User = {
      nick: 'Freddy',
      subNick: ' hola',
      edad: 28,
      email: 'dasd@as.com',
      friend: false,
      uid: '1'
    };

    this.friends = [user1, user2, user3];
 }
}
