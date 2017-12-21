import { Component, OnInit , ElementRef, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

import {UserService} from '../../shared/services/user.service';
import {User} from '../../shared/models/user.model';
import {JwtService} from '../../shared/services/jwt.service';
import { environment } from '../../../environments/environment';
import { Headers, Http, Response, URLSearchParams } from '@angular/http';

import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {
  private fg: FormGroup;
  error: boolean;
  message: string;
  constructor( private jwtService: JwtService ,
    private fb: FormBuilder,
    private toastr: ToastrService,
    private userService: UserService , private http: Http) {


   }
  file_name: any;
  user: User;
  filepreview: string;
  loading: boolean;
   @ViewChild('fileInput') fileInput;

   private setHeaders(): Headers {
    const headersConfig = {
      // 'Content-Type': 'application/json',
      // 'Accept': 'application/json'
    };

    if (this.jwtService.getToken()) {
      headersConfig['Authorization'] = `Bearer ${this.jwtService.getToken()}`;
    }
    return new Headers(headersConfig);
  }


  ngOnInit() {
      this.fg = this.fb.group({
          'name' : [null, Validators.required],
          'password': [null, Validators.required],
          'password_confirm': [null, Validators.required],
          'email': [null, Validators.compose([Validators.required, Validators.email])],
          'avatar': null,
          'company_id': [null, Validators.required]
      });

      this.user =  this.userService.getCurrentUser();

  }

  onFileChange(event) {
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      // tslint:disable-next-line:no-shadowed-variable
      reader.onload = ( event: any) => {
        this.filepreview = event.target.result;
      };
      reader.readAsDataURL(event.target.files[0]);
    }
  }


 createUser() {
   this.fg.controls['company_id'].setValue(this.user.company.id);
   if(this.fg.invalid){
     this.message = 'Error . invalid form';
     this.error = true;
     this.toastr.error('Form is invalid. Please fill the form correctly', 'Validation Error');
     return;
   }

   if(this.fg.controls['password'].value !== this.fg.controls['password_confirm'].value){
      this.error = true;
      this.message = 'Passwords do not match';
      this.toastr.error('Passwords do not match','Validation Error');
      return;
   }
   this.error = false;
   this.loading = true;
  const fileBrowser = this.fileInput.nativeElement;
  if (fileBrowser.files && fileBrowser.files[0]) {
    const formData = new FormData();
    formData.append('avatar', fileBrowser.files[0]);
    formData.append('email', this.fg.controls['email'].value);
    formData.append('name', this.fg.controls['name'].value);
    formData.append('company_id', '1');
    formData.append('password', this.fg.controls['password'].value);
    console.log(' form data value ', formData);
                this.http.post(`${environment.api_url}${'/users'}`, formData, {
                  headers: this.setHeaders()
            }).subscribe( data => {
                console.log('finished creating user ', data);
                this.loading = false;
                this.toastr.success('User Successfully created','Success');
            }, err => {
                this.loading = false;
                this.toastr.error('User not created created','Error');
                console.error('user create error ', err);
            } );
  }
 }

}
