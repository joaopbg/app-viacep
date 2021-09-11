import { Component, OnInit , Input } from '@angular/core';

@Component({
  selector: 'app-friends-list',
  templateUrl: './friends-list.component.html',
  styleUrls: ['./friends-list.component.scss']
})
export class FriendsListComponent implements OnInit {

  @Input("address") address: any

  constructor() { }


  ngOnInit(): void {
  }

}
