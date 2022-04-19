import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/Users.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent {
  constructor(private userService: UsersService) {}

  users$: any = this.userService.getUsers();

  setUser(user: any) {
    this.userService.setSelectedUser(user);
  }
}
