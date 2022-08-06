import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RequestUpdate } from 'src/app/shared/model/user.model';
import { UserService } from 'src/app/shared/service/user.service';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.scss']
})
export class UpdateUserComponent implements OnInit {

  id: string;
  request: RequestUpdate;

  constructor(private userService: UserService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.userService.getUser(this.id).subscribe(res => {
      this.request = {
        name: res.name,
        email: res.email,
        isActive: res.isActive,
        phone: res.phone,
        revenue: res.revenue,
        agreedTerms: res.agreedTerms,
      }
    })
  }

  update() {
    this.userService.updateUser(this.id, this.request).subscribe(res => {
      alert('Atualizado com sucesso!')
    })
  }
  delete() {
    this.userService.deleteUser(this.id,).subscribe(res => {
      alert('Deletado com sucesso!');
    })
  }

}
