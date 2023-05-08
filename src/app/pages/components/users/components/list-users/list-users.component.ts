import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import UserService from '../../service/user.service';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css'],
})
export class ListUsersComponent implements OnInit{
  users:any = []
  
  constructor(private userService: UserService, private router: Router) {}
  
  
  
  ngOnInit(): void {
    this.userService.getAllUser().then(res => {
      res.toPromise().then(datas => {
        this.users = datas
      }) 
  })
}


gotoUserDetail(userId:number){
    this.router.navigateByUrl(`users/${userId}`)
}


}
