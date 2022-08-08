import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ResponseUsers } from '../shared/model/user.model';
import { DialogService } from '../shared/service/dialog.service';
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

  constructor(
    private userService: UserService,
    public dialog: MatDialog,
    private dialogService: DialogService
  ) { }

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

  confirm(id: string) {
    this.dialogService.openConfirmDialog('Tem Certeza que deseja excluir')
      .afterClosed().subscribe(res => {
        if (res) {
          this.userService.deleteUser(id).subscribe(res => {
            this.loadData()
          })
        }
      });
  }
}
