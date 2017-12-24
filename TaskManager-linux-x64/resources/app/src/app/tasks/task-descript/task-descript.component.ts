import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Task } from '../../shared/models/task.model';
import { ToastrService } from 'ngx-toastr';
import {TaskService} from '../../shared/services/task.service';
import {Observable} from 'rxjs/Observable';
@Component({
  selector: 'app-task-descript',
  templateUrl: './task-descript.component.html',
  styleUrls: ['./task-descript.component.css']
})
export class TaskDescriptComponent implements OnInit {

  constructor(private route: ActivatedRoute,
    private toastr: ToastrService,
    private taskService: TaskService,
    private router: Router) { }
    task: Task;
  ngOnInit() {
    this.route.data.subscribe ( (data: { task: Task }) => {
           console.log(' task description data', data);
           this.task = data.task;
    } );
  }



  complete() {
    this.taskService.markComplete(this.task.id).subscribe( data => {
            this.toastr.success('Hello world!', 'Complete');
            console.log('complete changing state', data);
            this.task = data.data;
    } , err=>{
      console.log(' error changing task state ', err);
    })

  }

  hold() {
    this.taskService.markHold(this.task.id).subscribe( data => {
            this.toastr.warning('Hello world!', 'Hold');
            console.log('complete changing state', data);
              this.task = data.data;
    } , err=>{
      console.log(' error changing task state ', err);
    })

  }

  cancel() {
    this.taskService.markCancel(this.task.id).subscribe( data => {
              this.toastr.info('Hello world!', 'Cancelled');
            console.log('complete changing state', data);
              this.task = data.data;
    } , err=>{
      console.log(' error changing task state ', err);
    })

  }

  reactivate() {
     this.taskService.markOpen(this.task.id).subscribe( data => {
                this.toastr.info('Hello world!', 'Reactivating...');
              console.log('complete changing state', data);
                this.task = data.data;
      } , err=>{
        console.log(' error changing task state ', err);
      })
  }

}
