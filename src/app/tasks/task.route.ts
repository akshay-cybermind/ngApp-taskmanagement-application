import {RouterModule, Routes} from '@angular/router';
import {TaskGroupComponent} from './task-group/task-group.component';
import { TaskDescriptComponent } from './task-descript/task-descript.component';
import {IndexComponent} from './index/index.component';
import { AuthGuard } from '../shared/guards/index';
import { TaskListViewComponent } from './task-list-view/task-list-view.component';
import { TaskByCategoryComponent } from './task-by-category/task-by-category.component';

import {TaskDetailResolverService} from '../shared/resolvers/task-detail-resolver.service';

import {CategoryTasksResolver} from '../shared/resolvers/category.tasks.resolver';

const routes: Routes = [
    {
        path: 'tasks',
        component: IndexComponent,
        canActivate: [AuthGuard],
        children: [
          {
            path: '',
            component: TaskListViewComponent
          },
          {
              path: ':id',
              component: TaskDescriptComponent,
              resolve: {
                task: TaskDetailResolverService
              }
          },
          {
            path: 'category/:id',
            component: TaskByCategoryComponent,
            resolve: {
              categories: CategoryTasksResolver
            }
        }
        ]
    }
];


export const taskRoutes = RouterModule.forChild(routes);
