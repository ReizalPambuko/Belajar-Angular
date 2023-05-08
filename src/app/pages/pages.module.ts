import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersModule } from './components/users/users.module';
import { PagesComponent } from './pages.component';

import { SharedModule } from '../shared/shared.module';
import { NotFoundComponent } from './not-found/not-found.component';


@NgModule({
  declarations: [
    PagesComponent,
    NotFoundComponent,
    
  ],
  imports: [
    CommonModule,
    UsersModule,
    SharedModule
  ],
  exports: [
    UsersModule,
    PagesComponent,
    SharedModule
  ]
})
export class PagesModule { }
