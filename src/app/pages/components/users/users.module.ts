import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListUsersComponent } from './components/list-users/list-users.component';
import { UsersDetailComponent } from './components/users-detail/users-detail.component';



@NgModule({
  declarations: [
    ListUsersComponent,
    UsersDetailComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ListUsersComponent
  ]
})
export class UsersModule { }
