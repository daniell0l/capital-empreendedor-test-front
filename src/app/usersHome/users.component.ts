import { Component, OnInit } from '@angular/core';
import { ResponseUsers } from '../shared/model/user.model';
import { UserService } from '../shared/service/user.service';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  responseUsers: ResponseUsers;
  constructor(private userService: UserService) { }

  ngOnInit(): void {


    this.userService.getUsers()
      .subscribe(res => {
        const result = {
          data: Object.values(res)
        }
        this.responseUsers = result
      })
  }
}
