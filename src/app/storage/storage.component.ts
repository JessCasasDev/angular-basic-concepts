import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from './services/local-storage.service';
import { SessionStorageService } from './services/session-storage.service';

@Component({
  selector: 'app-storage',
  templateUrl: './storage.component.html',
  styleUrls: ['./storage.component.scss'],
})
export class StorageComponent implements OnInit {
  localStorageObj = {
    type: 'localStorage',
    savedInBrowser: true,
    sentInRequest: false,
    capacity: '10mb',
    expires: 'never',
    storage: ['browser'],
    accessibleFrom: 'Any Window',
  };
  
  sessionStorageObj = {
    type: 'sessionStorage',
    savedInBrowser: true,
    sentInRequest: false,
    capacity: '5mb',
    expires: 'On Tab Close',
    storage: ['browser'],
    accessibleFrom: 'Same Tab',
  };
  constructor(
    private localStorage: LocalStorageService,
    private sessionStorage: SessionStorageService
  ) {}

  ngOnInit(): void {}
  saveLocal() {
    this.localStorage.setItem(this.localStorageObj);
  }

  deleteLocal() {
    this.localStorage.clear();
  }

  retrieveLocal() {
    const item = this.localStorage.retrieveItem('item');
    console.log(item);
  }
  removeLocal() {
    this.localStorage.removeItem();
  }

  saveSession() {
    this.sessionStorage.setItem(this.sessionStorageObj);
  }

  deleteSession() {
    this.sessionStorage.clear();
  }

  retrieveSession() {
    const item = this.sessionStorage.retrieveItem('item');
    console.log(item);
  }
  removeSession() {
    this.sessionStorage.removeItem();
  }
}
