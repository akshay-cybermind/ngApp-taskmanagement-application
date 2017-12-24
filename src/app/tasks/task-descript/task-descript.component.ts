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
    loading: boolean;
    delayTime: number;
  ngOnInit() {
    this.loading = false;
    this.delayTime = 2000;
    this.route.data.subscribe ( (data: { task: Task }) => {
           console.log(' task description data', data);
           this.task = data.task;
    } );
  }



  complete() {
    this.loading = true;
    this.taskService.markComplete(this.task.id).subscribe( data => {
      setTimeout( () => {
            this.loading = false;
            this.toastr.success('Task is complete', 'Complete');
            console.log('complete changing state', data);
            this.task = data.data;
      }, this.delayTime );
    } , err=>{
      console.log(' error changing task state ', err);
    })

  }

  hold() {
      this.loading = true;
    this.taskService.markHold(this.task.id).subscribe( data => {

        setTimeout( ()=> {
            this.loading = false;
            this.toastr.warning('Task has been put on hold', 'Hold');
            console.log('complete changing state', data);
              this.task = data.data;
        }, this.delayTime );


    } , err=>{
      console.log(' error changing task state ', err);
    })

  }

  cancel() {
      this.loading = true;
    this.taskService.markCancel(this.task.id).subscribe( data => {
      setTimeout( ()=> {
          this.loading = false;
          this.toastr.info('Task has been cancelled', 'Cancelled');
        console.log('complete changing state', data);
          this.task = data.data;
      }, this.delayTime );

    } , err=>{
      console.log(' error changing task state ', err);
    })

  }


  start() {
      this.loading = true;
    this.taskService.markOnGoing(this.task.id).subscribe( data => {
      setTimeout( ()=> {
          this.loading = false;
          this.toastr.info('Task has been started', 'On-Going');
        console.log('on going changing state', data);
          this.task = data.data;
      }, this.delayTime );

    } , err=>{
      console.log(' error changing task state ', err);
    })

  }


  reactivate() {
      this.loading = true;
     this.taskService.markOpen(this.task.id).subscribe( data => {
       setTimeout( ()=> {
           this.loading = false;
           this.toastr.info('Task has been reactivated', 'Reactivated');
         console.log('complete changing state', data);
           this.task = data.data;
       }, this.delayTime );


      } , err=>{
        console.log(' error changing task state ', err);
      })
  }

}
