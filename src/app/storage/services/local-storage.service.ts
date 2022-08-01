import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  setItem(item: any) {
    localStorage.setItem('item', JSON.stringify(item));
  }

  retrieveItem(key: string) {
    return JSON.parse(localStorage.getItem(key) || '');
  }

  clear() {
    localStorage.clear();
  }

  removeItem() {
    localStorage.removeItem('item');
  }
}
