import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ModalService } from '../../shared/modal/modal.service';
import { UsersService } from '../services/Users.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit, OnDestroy {
  constructor(
    private userService: UsersService,
    private route: ActivatedRoute,
    private modalService: ModalService
  ) {}

  posts: any;
  user: any;
  unsubscribe$ = new Subject<boolean>();

  todos: any;

  ngOnInit(): void {
    this.route.params.pipe(takeUntil(this.unsubscribe$)).subscribe((params) => {
      console.log(params);
      this.userService
        .getPostsByUserId(params.id)
        .subscribe((posts) => (this.posts = posts));
    });

    this.user = this.userService.getSelectedUser();
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  canDeactivate() {
    //return window.confirm()
    return this.modalService.openConfirmationDialog();
  }

  createTodo() {
    this.userService.createTodo().subscribe();
    this.userService.getTodos().subscribe((todos) => {
      this.todos = todos;
    });
  }
}
