import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../interfaces/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-conversation',
  templateUrl: './conversation.page.html',
  styleUrls: ['./conversation.page.scss'],
})
export class ConversationPage implements OnInit {

  friendId = '';
  friends: User[];
  friend: User;

  price = 78.31432143241324;
  today: any = Date.now();

  constructor(
    private activeRoute: ActivatedRoute,
    private userService: UserService
  ) {
    this.friendId = this.activeRoute.snapshot.paramMap.get('uid');
    console.log(this.friendId);
    this.friends = this.userService.getFriends();

    this.friend = this.friends.find( (record) => {
      return record.uid === this.friendId;
    });
    console.log(this.friend);
  }

  ngOnInit() {
  }

}
