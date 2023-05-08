import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages/pages.component';
import { ListUsersComponent } from './pages/components/users/components/list-users/list-users.component';
import { UsersDetailComponent } from './pages/components/users/components/users-detail/users-detail.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

const routes: Routes = [
  {
    path: "home",
    component: PagesComponent
  },
  {
    path: "users",
    component: ListUsersComponent
  },
   {
    path: "users/:userId",
    component: UsersDetailComponent
  },
  {
    path: '',  redirectTo: '/home', pathMatch: 'full'
  },
  {
    path: "**",
    component: NotFoundComponent
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
