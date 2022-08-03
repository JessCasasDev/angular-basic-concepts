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

  getTodos() {
    debugger;
    return this.http.get(
      'https://crudcrud.com/api/94126cedae844c7b942ee8b43e41865f/todos'
    );
  }

  createTodo() {
    return this.http.post(
      'https://crudcrud.com/api/94126cedae844c7b942ee8b43e41865f/todos',
      {
        title: 'Hola!',
        creator: 'Jess',
        status: 'Created',
        createdDate: new Date(),
        startedDate: null, //fecha en formato ISO. Fecha de cambio entre Created y Doing,
        endDate: null, //fecha en formato ISO. Fecha de cambio entre Doing y Done
      }
    );
  }
}
