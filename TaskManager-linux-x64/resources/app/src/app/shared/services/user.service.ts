import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Location } from '@angular/common';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import { ApiService } from './api.service';
import { JwtService } from './jwt.service';
import { User} from '../models/user.model';
import {Router} from '@angular/router';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/distinctUntilChanged';



@Injectable()
export class UserService {
  private currentUserSubject = new BehaviorSubject<User>(new User());
  public currentUser = this.currentUserSubject.asObservable().distinctUntilChanged();

  private isAuthenticatedSubject = new ReplaySubject<boolean>(1);
  public isAuthenticated = this.isAuthenticatedSubject.asObservable();

  constructor (
    private apiService: ApiService,
    private http: Http,
    private jwtService: JwtService,
    private router: Router,
    private location: Location
  ) {}

  // Verify JWT in localstorage with server & load user's info.
  // This runs once on application startup.
  populate() {
    // If JWT detected, attempt to get & store user's info
    console.log('populating showing token: ', this.jwtService.getToken());
    if (this.jwtService.getToken()) {
      this.apiService.get('/users?token=' + this.jwtService.getToken())
      .subscribe(
        data => {
          console.log('poplulate data => ', data.data);
          this.setAuth(data.data);
          this.router.navigateByUrl(this.location.path());
        },
        err => {
          console.log('error populating', err);
          this.purgeAuth();
        }
      );
    } else {
      // Remove any potential remnants of previous auth states
      this.purgeAuth();
    }
  }

  setAuth(user: User) {
    // Save JWT sent from server in localstorage
    console.log('setting user', user);
    this.jwtService.saveToken(user.token);
    console.log('new token set', user.token);
    // Set current user data into observablet
    this.currentUserSubject.next(user);
    // Set isAuthenticated to true
    this.isAuthenticatedSubject.next(true);
  }

  purgeAuth() {
    console.log('removing   user');
    // Remove JWT from localstorage
    this.jwtService.destroyToken();
    // Set current user to an empty object
    this.currentUserSubject.next(new User());
    // Set auth status to false
    this.isAuthenticatedSubject.next(false);
    this.router.navigateByUrl('login');
  }


  attemptAuth(credentials): Observable<User> {
    return this.apiService.post('/login', credentials)
    .map(
      data => {
        console.log('attempt login response ', data);
        this.setAuth(data.data);
        return data;
      }
    );
  }

  getCurrentUser(): User {
    return this.currentUserSubject.value;
  }

  // Create the user on the server (email, pass, etc)
  create(obj): Observable<User> {
    return this.apiService
    .post('/users', obj )
    .map(data => {
      return data;
    });
  }

  // Update the user on the server (email, pass, etc)
  update(user): Observable<User> {
    return this.apiService
    .put('/user', { user })
    .map(data => {
      // Update the currentUser observable
      this.currentUserSubject.next(data.user);
      return data.user;
    });
  }

}
