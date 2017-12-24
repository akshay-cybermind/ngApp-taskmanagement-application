import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateUserComponent } from './create-user/create-user.component';
import { ListUserComponent } from './list-user/list-user.component';
import { ItemUserComponent } from './item-user/item-user.component';
import { ProfileComponent } from './profile/profile.component';
import {RouterModule, Routes} from '@angular/router';
import { IndexComponent } from './index/index.component';

import {ReactiveFormsModule , FormsModule } from '@angular/forms';
import { CalendarModule } from 'angular-calendar';

import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import {TableModule} from 'ngx-easy-table';
const routes: Routes = [
    {
      path: 'users',
      component: IndexComponent,
      children: [
         {
           path: '',
           component: CreateUserComponent
         },
         {
           path: 'profile',
           component: ProfileComponent
         },
         {
            path: 'list',
           component: ListUserComponent
        }
      ]
    }
];
@NgModule({
  imports: [
    CommonModule, ReactiveFormsModule, TableModule,
     FormsModule,  NgbModalModule.forRoot(), CalendarModule.forRoot(), RouterModule.forChild(routes)
  ],
  declarations: [CreateUserComponent, ListUserComponent, ItemUserComponent, ProfileComponent, IndexComponent]
})
export class UsersModule { }

