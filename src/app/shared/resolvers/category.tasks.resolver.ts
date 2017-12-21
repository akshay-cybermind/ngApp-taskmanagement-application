import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import {Category} from '../models/category.model';
import {CategoryService} from '../services/category.service';
import 'rxjs/add/operator/do';

@Injectable()
export class CategoryTasksResolver  implements Resolve<Category>  {

  constructor(private categoriesService: CategoryService, private router: Router) { }

  resolve(
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
): Observable<any> {

  return this.categoriesService.getCategoryList(route.params['id'])
          .do( data => {
            console.log('param', route.params['id']);
              console.log('resolver data categories tasks list ', data);
          })
         .catch((err) => this.router.navigateByUrl('/'));

}


}
