import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  ActivatedRoute,
  NavigationStart,
  Router,
  RouterModule,
} from '@angular/router';
import { filter, map } from 'rxjs/operators';
import { PostsService } from '../services/posts.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent implements OnInit, OnDestroy {
  constructor(
    private activatedRoute: ActivatedRoute,
    private postsService: PostsService
  ) {}

  comments: any;
  post: any;
  subscriptions: any;

  ngOnInit(): void {
    this.subscriptions = this.activatedRoute.params.subscribe((params) => {
      this.postsService
        .getComments(params.id)
        .subscribe((comments) => (this.comments = comments));

      this.post = history.state.post;
    });
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
