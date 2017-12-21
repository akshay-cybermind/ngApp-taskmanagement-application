import { Component, OnInit } from '@angular/core';
import {UserService} from './shared/services/user.service';

import { FormGroup, FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  form: FormGroup;
  constructor(private userService: UserService,
              private fb: FormBuilder
            ) {

            }

  ngOnInit() {
        this.userService.populate();
        this.form = this.fb.group({
          date: ''
        });
  }


}
