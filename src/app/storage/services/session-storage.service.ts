import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SessionStorageService {
  setItem(item: any) {
    sessionStorage.setItem('item', JSON.stringify(item));
  }

  retrieveItem(key: string) {
    return JSON.parse(sessionStorage.getItem(key) || '');
  }

  clear() {
    sessionStorage.clear();
  }

  removeItem() {
    sessionStorage.removeItem('item');
  }
}
