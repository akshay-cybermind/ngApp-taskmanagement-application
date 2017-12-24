import { Component, OnInit } from '@angular/core';

import {ActivatedRoute} from '@angular/router';

import {Category} from '../../shared/models/category.model';

@Component({
  selector: 'app-task-by-category',
  templateUrl: './task-by-category.component.html',
  styleUrls: ['./task-by-category.component.css']
})
export class TaskByCategoryComponent implements OnInit {
  date: Date;
  cat: Category;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.data.subscribe ( (data: { categories: Category }) => {
          console.log(' data categories resolver ', data);
          this.cat = data.categories;
    } ,
    err => {
          console.log(' error ', err);
    }
  );
  }



}
