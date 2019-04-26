import { Component } from '@angular/core';
import { User } from '../interfaces/user';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
 constructor() {
   let myUser: User = {
     nick: 'Eduardo',
     subNick: ' hola',
     edad: 28,
     email: 'dasd@as.com',
     friend: true,
     uid: '1'
   };
 }
}
