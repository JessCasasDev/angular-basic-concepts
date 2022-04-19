import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataBindingComponent } from './components/data-binding/data-binding/data-binding.component';
import { DirectivasComponent } from './components/directivas/directivas.component';
import { FormsComponent } from './components/forms/forms.component';
import { LifeCycleComponent } from './components/life-cycle/life-cycle.component';
import { ViewChildComponent } from './components/view-child/view-child.component';
import { ChildComponent } from './components/view-child/child/child.component';
import { AnotherChildComponent } from './components/view-child/another-child/another-child.component';
import { PipesComponent } from './components/pipes/pipes.component';
import { FilterPipe } from './components/pipes/filter-pipe/filter-pipe';
import { FilterPipeImpure } from './components/pipes/impure-pipe/impure-pipe';
import { ObservablesComponent } from './components/observables/observables.component';
import { ReactiveFormsComponent } from './components/reactive-forms/reactive-forms.component';
import { WizardsComponent } from './components/wizards/wizards.component';
import { AnotherService } from './services/another-service';
import { PostsComponent } from './posts/posts.component';
import { HttpClientModule } from '@angular/common/http';
import { PostComponent } from './posts/post/post.component';
import { UsersComponent } from './users/users.component';
import { UserComponent } from './users/user/user.component';
import { UserListComponent } from './users/user-list/user-list.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { MyService } from './services/my-service.service';

@NgModule({
  declarations: [
    AppComponent,
    DataBindingComponent,
    DirectivasComponent,
    FormsComponent,
    LifeCycleComponent,
    ViewChildComponent,
    ChildComponent,
    AnotherChildComponent,
    PipesComponent,
    FilterPipe,
    FilterPipeImpure,
    ObservablesComponent,
    ReactiveFormsComponent,
    WizardsComponent,
    PostsComponent,
    PostComponent,
    UsersComponent,
    UserComponent,
    UserListComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  //providers: [AnotherService, MyService],
  bootstrap: [AppComponent],
})
export class AppModule {}
