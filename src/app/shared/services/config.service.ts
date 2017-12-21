import { Injectable } from '@angular/core';
import { Config } from '../models/Config.model';

@Injectable()
export class ConfigService {
  public static config: Config = {
    searchEnabled: true,
    headerEnabled: true,
    orderEnabled: true,
    globalSearchEnabled: true,
    paginationEnabled: true,
    exportEnabled: true,
    clickEvent: false,
    selectRow: false,
    selectCol: false,
    selectCell: false,
    rows: 10,
    additionalActions: true,
    serverPagination: false,
    isLoading: false,
    detailsTemplate: false,
    groupRows: false
  };
}
