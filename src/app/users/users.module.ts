import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DeactivateUserGuard } from './guards/deactivate-user.guard';
import { UserListComponent } from './user-list/user-list.component';
import { UserComponent } from './user/user.component';
import { UsersComponent } from './users.component';
import { UsersRoutingModule } from './users.routes';

@NgModule({
  declarations: [UsersComponent, UserComponent, UserListComponent],
  imports: [
    UsersRoutingModule,
    //BrowserModule,
    CommonModule,
  ],
  providers: [DeactivateUserGuard],
})
export class UsersModule {}
