import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActivatePostGuard } from './guards/activate-post.guard';
import { CanLoadGuard } from './guards/can-load.guard';
import { NotFoundComponent } from './not-found/not-found.component';
import { PostComponent } from './posts/post/post.component';
import { PostsComponent } from './posts/posts.component';

const routes: Routes = [
  {
    path: 'posts/:id',
    component: PostComponent,
    canActivate: [ActivatePostGuard],
    data: [{ canPass: true }],
  },
  {
    path: 'posts',
    component: PostsComponent,
  },
  {
    path: 'users',
    canLoad: [CanLoadGuard],
    //lazy loading
    loadChildren: () => import('./users/users.module').then((mod) => mod.UsersModule),
  },
  { path: '', redirectTo: 'users', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
