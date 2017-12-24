import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {SharedModule} from './shared/shared.module';
import {TasksModule} from './tasks/tasks.module';
import {UsersModule} from './users/users.module';
import { AppComponent } from './app.component';
import {RouterModule, Routes} from '@angular/router';
import { AuthModule} from './auth/auth.module';
import {HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { VerticalTimelineModule } from 'angular-vertical-timeline';
import { NgDatepickerModule } from 'ng2-datepicker';
import { CalendarModule } from 'angular-calendar';
import { FormsModule } from '@angular/forms';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';

const main_routes: Routes = [
];

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule , FormsModule, BrowserAnimationsModule, NgDatepickerModule,
    NgbModalModule.forRoot(), CalendarModule.forRoot() , ToastrModule.forRoot(),
    VerticalTimelineModule,
    HttpModule, UsersModule, TasksModule, SharedModule,
    AuthModule,
    RouterModule.forRoot(main_routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
