import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog'
import { UserFormDialogComponent } from 'src/app/usersHome/user-form-dialog/user-form-dialog.component';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor(private dialog: MatDialog) { }

  openConfirmDialog(msg) {
    return this.dialog.open(UserFormDialogComponent, {
      width: '390px',
      disableClose: true,
      position: {top: '10px'},
      data: {
        message : msg
      }
    })
  }
}
