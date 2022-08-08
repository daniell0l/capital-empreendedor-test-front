import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ResponseUsers } from 'src/app/shared/model/user.model';
import { UserService } from 'src/app/shared/service/user.service';

@Component({
  selector: 'app-user-form-dialog',
  templateUrl: './user-form-dialog.component.html',
  styleUrls: ['./user-form-dialog.component.scss']
})
export class UserFormDialogComponent implements OnInit {

  responseUsers: ResponseUsers;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data,
    private userService: UserService,
    public dialogRef: MatDialogRef<UserFormDialogComponent>,

  ) { }

  ngOnInit(): void {
  }

  confirm(element: any): void {
     this.userService.deleteUser(element).subscribe(res => {
    })
  }

  cancel(): void {
    this.dialogRef.close(false);
  }
}

