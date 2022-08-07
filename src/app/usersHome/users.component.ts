import { Component, OnInit } from '@angular/core';
import { ResponseUsers } from '../shared/model/user.model';
import { UserService } from '../shared/service/user.service';
interface dataForm {
  position: number;
  nome: string;
  email: string;
  telefone: string;
  receita: number;
  termos: boolean;
  status: boolean;
}
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  responseUsers: ResponseUsers;
  users: dataForm[];

  displayedColumns: string[] = ['position', 'nome', 'email', 'telefone', 'receita', 'termos', 'status', 'actions'];

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.loadData()
  }

  private loadData() {
    this.userService.getUsers()
      .subscribe(res => {
        const result = {
          data: Object.values(res)
        }
        this.responseUsers = result
        this.users = result.data.map((value, index) => {
          return { position: ++index, ...value } as dataForm
        })
      })
  }

  deleteElement(element: any) {
    this.userService.deleteUser(element).subscribe(res => {
      this.loadData();
      alert('Deletado com sucesso!');
    })
  }
}
