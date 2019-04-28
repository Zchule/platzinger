import { Injectable } from '@angular/core';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

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
       uid: '2'
     };

     const user3: User = {
       nick: 'Freddy',
       subNick: ' hola',
       edad: 28,
       email: 'dasd@as.com',
       friend: false,
       uid: '3'
     };
     this.friends = [user1, user2, user3];
   }

   getFriends() {
     return this.friends;
   }

}
