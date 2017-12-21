import { Component, OnInit } from '@angular/core';

import {ConfigService} from '../../shared/services/config.service';

import {data} from '../../../assets/data';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {

  configuration;
  columns = [
    { key: 'phone', title: 'Phone' },
    { key: 'age', title: 'Age' },
    { key: 'company', title: 'Company' },
    { key: 'name', title: 'Name' },
    { key: 'isActive', title: 'STATUS' },
  ];
  data = [];

  constructor() { }

  ngOnInit() {
    this.configuration = ConfigService.config;
    this.data = data;
  }

}


// mport { Injectable } from '@angular/core';
// import { Config } from './ngx-easy-table/model/config';

// @Injectable()
// export class ConfigService {
//   public static config: Config = {
//     searchEnabled: true,
//     headerEnabled: true,
//     orderEnabled: true,
//     globalSearchEnabled: true,
//     paginationEnabled: true,
//     exportEnabled: false,
//     clickEvent: false,
//     selectRow: false,
//     selectCol: false,
//     selectCell: false,
//     rows: 10,
//     additionalActions: false,
//     serverPagination: false,
//     isLoading: false,
//     detailsTemplate: false,
//     groupRows: false
//   };
// }
