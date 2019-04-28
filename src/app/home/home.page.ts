import { Component } from '@angular/core';
import { User } from '../interfaces/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  friends: User[];

 constructor(
   private userService: UserService
 ) {
   this.friends = this.userService.getFriends();
 }
}
