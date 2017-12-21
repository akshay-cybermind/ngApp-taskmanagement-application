import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import {UserService} from '../services/user.service';
import 'rxjs/add/operator/do';

@Injectable()
export class NoAuthGuard implements CanActivate {

  constructor(
    private router: Router,
    private userService: UserService
  ) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      return this.userService.isAuthenticated.take(1).map(bool => !bool).do( data => {
            console.log(' no auth guard value => ', data);
            if (data === false){
                // this.router.navigate(['/home']);
                console.log(' redirecting....');
                this.router.navigateByUrl('tasks');
            }
      } );
  }
}
