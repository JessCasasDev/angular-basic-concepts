import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PostsService } from './services/posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
})
export class PostsComponent implements OnInit {
  constructor(
    private postsService: PostsService,
    private router: Router,
    private http: HttpClient
  ) {}
  todos = [];

  posts: any;

  ngOnInit(): void {
    this.getTodos();
    this.postsService.getPosts().subscribe((posts) => (this.posts = posts));
  }

  goToPost(post: any) {
    this.router.navigateByUrl(`posts/${post.id}`, { state: { post } });
  }

  createTODO() {
    return this.http
      .post('https://crudcrud.com/api/3767203628934e94a928f31c6f549dbb/todos', {
        title: 'MyFirstTodo',
        creator: 'Jess',
        status: 'Created',
        createdDate: new Date(),
        startedDate: null,
        endDate: null,
      })
      .subscribe(() => {
        this.getTodos();
      });
  }

  getTodos() {
    return this.http
      .get('https://crudcrud.com/api/3767203628934e94a928f31c6f549dbb/todos')
      .subscribe((todos: any) => (this.todos = todos));
  }

  updateTodo(todo: any) {
    const nTodo = {
      ...todo,

      //...todo,
      status: 'Doing',
    };
    return this.http
      .put(
        'https://crudcrud.com/api/3767203628934e94a928f31c6f549dbb/todos/' +
          todo._id,
        {
          title: todo.title,
          creator: todo.creator,
          createdDate: todo.createdDate,
          endDate: todo.endDate,
          startedDate: todo.startedDate,
          status: 'Doing',
        }
      )
      .subscribe(() => this.getTodos());
  }
}
