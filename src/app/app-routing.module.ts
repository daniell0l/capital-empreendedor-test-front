import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateUserComponent } from './usersHome/create-user/create-user.component';
import { UpdateUserComponent } from './usersHome/update-user/update-user.component';
import { UsersComponent } from './usersHome/users.component';

const routes: Routes = [
  {
    path: '',
    component: UsersComponent
  },
  {
    path: 'users/create',
    component: CreateUserComponent
  },
  {
    path: 'users/update/:id',
    component: UpdateUserComponent
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
