import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import {Task} from '../models/task.model';
import {TaskService} from '../services/task.service';
import 'rxjs/add/operator/do';

@Injectable()
export class TaskDetailResolverService  implements Resolve<Task>  {

  constructor(private taskService: TaskService, private router: Router) { }

  resolve(
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
): Observable<any> {

  return this.taskService.get(route.params['id'])
          .do( data => {
            console.log('param', route.params['id']);
              console.log('resolver data', data);
          })
         .catch((err) => this.router.navigateByUrl('/'));

}


}
