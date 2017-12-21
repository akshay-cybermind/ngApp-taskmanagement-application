import { Injectable } from '@angular/core';
import {ApiService    } from './api.service';
@Injectable()
export class CategoryService {

  constructor(private apiService: ApiService) { }


  getAll() {
    return this.apiService.get('/categories');
  }

  getAllStatus() {
    return this.apiService.get('/status');
  }

  getCategoryList(id){
    return this.apiService.get('/categories/'+ id);
  }

}
