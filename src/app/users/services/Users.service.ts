import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private user: any;

  constructor(private http: HttpClient) {}

  getUsers() {
    return this.http.get('https://jsonplaceholder.typicode.com/users/');
  }

  getPostsByUserId(id: string) {
    return this.http.get(
      `https://jsonplaceholder.typicode.com/users/${id}/posts`
    );
  }

  setSelectedUser(user: any) {
    this.user = user;
  }

  getSelectedUser() {
    return this.user;
  }
}
