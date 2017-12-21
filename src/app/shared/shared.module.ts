import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './layout/header/header.component';
import { LeftSidebarComponent } from './layout/left-sidebar/left-sidebar.component';
import { FooterComponent } from './layout/footer/footer.component';
import {ApiService} from './services/api.service';
import {JwtService} from './services/jwt.service';
import {UserService} from './services/user.service';
import {TaskService} from './services/task.service';
import {CategoryService} from './services/category.service';
import {AuthGuard, NoAuthGuard} from './guards';
import {ShowAuthedDirective} from './directives/show-authed.directive';
import {RouterModule} from '@angular/router';
import { TaskNewComponent } from './tasks-helper/task-new/task-new.component';
import {TaskDetailResolverService} from '../shared/resolvers/task-detail-resolver.service';
import {CategoryTasksResolver} from '../shared/resolvers/category.tasks.resolver';
@NgModule({
  imports: [
    CommonModule, RouterModule
  ],
  declarations: [HeaderComponent, LeftSidebarComponent, FooterComponent, ShowAuthedDirective, TaskNewComponent],
  exports : [HeaderComponent, LeftSidebarComponent, FooterComponent, ShowAuthedDirective, TaskNewComponent],
  providers: [ApiService, JwtService, TaskService, UserService,
              AuthGuard, CategoryService, NoAuthGuard,  TaskDetailResolverService , CategoryTasksResolver]
})
export class SharedModule { }
