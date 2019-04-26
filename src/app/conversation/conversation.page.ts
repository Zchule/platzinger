import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-conversation',
  templateUrl: './conversation.page.html',
  styleUrls: ['./conversation.page.scss'],
})
export class ConversationPage implements OnInit {

  user = '';

  constructor(
    private route: ActivatedRoute
  ) {
    this.user = this.route.snapshot.paramMap.get('uid');
    console.log(this.user);
  }

  ngOnInit() {
  }

}
