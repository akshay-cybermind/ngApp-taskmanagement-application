import { Injectable } from '@angular/core';
import {ApiService    } from './api.service';

@Injectable()
export class TaskService {



  constructor(private apiService: ApiService) { }

  get(id) {
    return this.apiService.get('/tasks/' + id).map( data => data );
  }
  getAll() {
      return this.apiService.get('/tasks').map( data => data );
  }
  markComplete(id) {
     return this.apiService.post('/complete/' + id);
  }
  markOpen(id) {
     return this.apiService.post('/open/' + id);
  }
  markHold(id) {
     return this.apiService.post('/hold/' + id);
  }
  markCancel(id) {
     return this.apiService.post('/cancel/' + id);
  }
  markOnGoing(id) {
     return this.apiService.post('/on-going/' + id);
  }
  markImportant(id) {
     return this.apiService.post('/important/' + id);
  }

  markUnImportant(id) {
    return this.apiService.post('/unimportant/' + id);
 }

 create(data){
    return  this.apiService.post('/tasks', data);
 }

}
