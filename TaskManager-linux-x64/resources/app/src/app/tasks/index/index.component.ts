import { Component, OnInit } from '@angular/core';
import {TaskService} from '../../shared/services/task.service';
import { Task } from '../../shared/models/task.model';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  constructor() { }
  ngOnInit() {
  }


}
