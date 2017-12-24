import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { CategoryService } from '../../services/category.service';
import { User } from '../../models/user.model';
import { Category } from '../../models/category.model';

@Component({
  selector: 'app-left-sidebar',
  templateUrl: './left-sidebar.component.html',
  styleUrls: ['./left-sidebar.component.css']
})
export class LeftSidebarComponent implements OnInit {
  user: User;
  categories: Category[];
  constructor(private userService: UserService , private categoryService: CategoryService) {
     this.user = new User();
  }

  ngOnInit() {
    this.user = this.userService.getCurrentUser();
    this.categoryService.getAll().subscribe ( response => {
          this.categories = response;
          console.log( ' categories', response);
    }, err => {

    });
  }

}
