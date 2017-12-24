// import { Injectable } from '@angular/core';
// import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from '@angular/router';
// import { Observable } from 'rxjs/Observable';
// import {UserService} from '../services';

// @Injectable()
// export class JobDescriptionResolverService  implements Resolve<Job> {

// constructor(
//     private jobsService: JobService,
//     private router: Router,
//     private userService: UserService
// ) {}

// resolve(
//   route: ActivatedRouteSnapshot,
//   state: RouterStateSnapshot
// ): Observable<any> {

//   return this.jobsService.get(route.params['id'])
//   .map( data => data['jobs'])
//           .do( data => {
//             console.log('param', route.params['id']);
//               console.log('resolver data', data);
//           })
//          .catch((err) => this.router.navigateByUrl('/'));

// }
// }
