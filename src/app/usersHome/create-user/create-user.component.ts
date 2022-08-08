import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RequestCreate, ResponseCreate } from 'src/app/shared/model/user.model';
import { UserService } from 'src/app/shared/service/user.service';
@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss']
})
export class CreateUserComponent implements OnInit {

  request: RequestCreate = {
    name: '',
    email: '',
    isActive: false,
    phone: "",
    revenue: 0,
    agreedTerms: false,
  }

  response: ResponseCreate

  constructor(
    private userService: UserService,
    private rota: Router,

  ) { }

  ngOnInit(): void {
  }

  save() {
    this.userService.createUser(this.request).subscribe(res => {
      this.rota.navigate(['/'])
    })
  }

  exit() {
    this.rota.navigate(['/'])
  }
}
