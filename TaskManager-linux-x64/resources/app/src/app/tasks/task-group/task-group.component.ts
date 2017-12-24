import { Component, OnInit, Input } from '@angular/core';
import { Task } from '../../shared/models/task.model';

@Component({
  selector: 'app-task-group',
  templateUrl: './task-group.component.html',
  styleUrls: ['./task-group.component.css']
})
export class TaskGroupComponent implements OnInit {
 @Input() color: string;
 @Input() tasks: Task[];
 @Input() title: string;
  constructor() { }

  ngOnInit() {
    console.log('title is ', this.title);
  }

}
