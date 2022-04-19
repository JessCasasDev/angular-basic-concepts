import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PostsService } from './services/posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
})
export class PostsComponent implements OnInit {
  constructor(private postsService: PostsService, private router: Router) {}

  posts: any;

  ngOnInit(): void {
    this.postsService.getPosts().subscribe((posts) => (this.posts = posts));
  }

  goToPost(post: any) {
    this.router.navigateByUrl(`post/${post.id}`, { state: { post } });
  }
}
