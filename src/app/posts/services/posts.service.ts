import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { of } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  private url = 'https://jsonplaceholder.typicode.com';
  constructor(private http: HttpClient) {}

  getPosts() {
    return this.http.get(`${this.url}/posts/`).pipe(
      map((posts) => {
        console.log(posts);
        return posts;
      })
    );
  }

  getComments(id: string) {
    return this.http.get(`${this.url}/posts/${id}/comments`);
  }

  createComment(comment: any) {
    return this.http.post(`${this.url}/posts`, {
      body: { title: comment.title, body: comment.body, userId: 1 },
    });
  }

  updateComment(comment: any) {
    this.http.put(`${this.url}/posts/${comment.id}`, { ...comment });
  }

  deleteComment(id: string) {
    this.http.delete(`${this.url}/posts/${id}`);
  }
}
