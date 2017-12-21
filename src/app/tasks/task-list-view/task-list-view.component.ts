import { Component, OnInit } from '@angular/core';
import {TaskService} from '../../shared/services/task.service';
import { Task } from '../../shared/models/task.model';

@Component({
  selector: 'app-task-list-view',
  templateUrl: './task-list-view.component.html',
  styleUrls: ['./task-list-view.component.css']
})
export class TaskListViewComponent implements OnInit {

  constructor(private taskService: TaskService) { }
  done: Task[];
  on_going: Task[];
  open: Task[];
  other: Task[];
  ngOnInit() {
    this.taskService.getAll().subscribe( data => {
      console.log('task service response', data);
      this.done = data['done'];
      this.open = data['open'];
      this.on_going = data['on going'];
      this.other = [];
    });
  }
}
