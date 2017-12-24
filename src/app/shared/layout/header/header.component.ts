import { Component, OnInit } from '@angular/core';
import {UserService} from '../../services/user.service';
import {User} from '../../models/user.model';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

user: User;
title: string;
  constructor(private userService: UserService) {
      //  this.user = this.userService.getCurrentUser();
      //  console.log(' header com user ', this.user);

   }

  ngOnInit() {
    this.title = 'Task Management';
    this.userService.currentUser.subscribe ( data => {
      console.log('header curr user ', data);
      this.user = data;
    })

  }

  logout(){
    this.userService.purgeAuth();
  }

}
