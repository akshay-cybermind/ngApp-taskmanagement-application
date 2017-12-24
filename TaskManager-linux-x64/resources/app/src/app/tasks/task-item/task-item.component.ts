import { Component, OnInit , Input} from '@angular/core';
import {Task} from '../../shared/models/task.model';
import {TaskService} from '../../shared/services/task.service';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {
 @Input() task: Task;

 important: boolean;
  constructor(private taskService: TaskService) { }

  ngOnInit() {
    console.log(' current task important', this.task);
    this.important = this.task.important;
  }



  mark() {
    console.log('current status', this.important);
    if (this.important) {
        this.markUnImportant();
    }else {
        this.markImportant();
    }
  }

  markImportant() {
    this.taskService.markImportant(this.task.id).subscribe( data => {
        console.log( 'important' , data);
        this.important = true;
    } );
  }

  markUnImportant() {
    this.taskService.markUnImportant(this.task.id).subscribe( data => {
        console.log( 'unimportant' , data);
        this.important = false;
    } );
  }

}
