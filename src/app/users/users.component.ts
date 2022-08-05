import { Component, OnInit } from '@angular/core';
import { ResponseUsers } from './user.model';
import { UserService } from './user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  responseUsers: ResponseUsers;

  constructor(public userService: UserService) {  }

  ngOnInit(): void {
    this.userService.getUsers().subscribe(res => this.responseUsers = res)
  }

}
