import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {CategoryService} from '../../shared/services/category.service';
import {TaskService} from '../../shared/services/task.service';
import {UserService} from '../../shared/services/user.service';
import { Category } from '../../shared/models/category.model';
import { Status } from '../../shared/models/status.model';
import { User } from '../../shared/models/user.model';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-task-create',
  templateUrl: './task-create.component.html',
  styleUrls: ['./task-create.component.css']
})
export class TaskCreateComponent implements OnInit {

  fg: FormGroup;
  categories: Category[];
  statuses: Status[];
  user: User;
  loading: boolean;
  error: boolean;
  message: string;
  private toastTitle: string;

  constructor(private fb: FormBuilder ,
    private catService: CategoryService ,
    private taskService: TaskService ,
    private toastr: ToastrService,
    private userService: UserService) { }

  ngOnInit() {
    this.toastTitle = 'Task Create';
    this.fg = this.fb.group({
        'subject': ['', Validators.required],
        'user_id': [null, Validators.required],
        'category_id': [null, Validators.required],
        'status_id': [null, Validators.required],
        'due': [Date.now() , Validators.required],
        'start': [Date.now(), Validators.required]
    });

    this.catService.getAll().subscribe( categories => {
      console.log('cat service data ', categories);
      this.categories = categories;
  }, err => {
      console.log('error ', err);
  });

  this.catService.getAllStatus().subscribe( statuses => {
    console.log('statues service data ', statuses);
    this.statuses = statuses;
}, err => {
    console.log('error ', err);
});

this.user =  this.userService.getCurrentUser();
  console.log('user to create task', this.user);
   this.fg.controls['user_id'].setValue(this.user.id);
  }


  createTask (): void {
    this.loading = true;
        console.log('task create data', this.fg.value);
        this.taskService.create(this.fg.value).subscribe( data => {
           console.log('after creating new task ', data);
           this.error = false;
           this.loading = false;
           this.message = 'Task successfully created';
             this.toastr.success(this.toastTitle, 'Task successfully created!');
             this.fg.reset();
        }, err =>{
              console.error('error creating new task ', err);
              this.error = true;
              this.loading = false;
              this.message =' Task not created. Error , Please try again';
                this.toastr.error(this.toastTitle, 'Error creating task!');
        } , () => {
            this.loading = false;
        });
  }

}
