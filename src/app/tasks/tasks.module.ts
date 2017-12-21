import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskItemComponent } from './task-item/task-item.component';
import { TaskGroupComponent } from './task-group/task-group.component';
import { IndexComponent } from './index/index.component';
import {SharedModule} from '../shared/shared.module';
import {taskRoutes} from './task.route';
import { TaskCreateComponent } from './task-create/task-create.component';
import { ReactiveFormsModule , FormsModule} from '@angular/forms';
import { TaskDescriptComponent } from './task-descript/task-descript.component';
import { TaskListViewComponent } from './task-list-view/task-list-view.component';
import { TaskByCategoryComponent } from './task-by-category/task-by-category.component';
import { VerticalTimelineModule } from 'angular-vertical-timeline';
import { NgDatepickerModule } from 'ng2-datepicker';
@NgModule({
  imports: [
    CommonModule, SharedModule, ReactiveFormsModule, FormsModule, NgDatepickerModule, VerticalTimelineModule, taskRoutes
  ],
  declarations: [TaskItemComponent, TaskGroupComponent, IndexComponent,
            TaskCreateComponent, TaskDescriptComponent,
            TaskListViewComponent, TaskByCategoryComponent],
  exports: [TaskItemComponent, TaskGroupComponent, TaskCreateComponent]
})
export class TasksModule { }
