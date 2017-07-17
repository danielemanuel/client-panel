import { Injectable } from '@angular/core';
import { Settings } from '../models/Settings';

@Injectable()
export class SettingsService {

    settings:Settings = {
    allowRegistration: false,
    disableBalanceOnAdd: false,
    disableBalanceOnEdit: false,

  }


  constructor() { }

  ngOnInit() {
  }

  getSettings(){
  return this.settings;
  }
}
