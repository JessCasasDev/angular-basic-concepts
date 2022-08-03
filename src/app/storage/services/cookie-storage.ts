import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CookieStorageService {
  createItem(key: string, value: any) {
    const date = new Date();
    date.setTime(date.getTime() + 3 * 24 * 60 * 60 * 1000);
    const expires = 'expires=' + date.toUTCString();
    document.cookie = JSON.stringify(`${key}=${value};${expires}`);
  }

  retrieveItem() {
    return document.cookie;
  }


  removeItem(key: string) {
    document.cookie = `${key}=;expires=Thu, 01 Jan 1970 00:00:00 UTC;`;
  }
}
