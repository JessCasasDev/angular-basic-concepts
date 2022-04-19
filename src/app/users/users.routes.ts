import { RouterModule, Routes } from '@angular/router';
import { DeactivateUserGuard } from './guards/deactivate-user.guard';
import { IsUserSelectedGuard } from './guards/is-user-selected.guard';
import { UserListComponent } from './user-list/user-list.component';
import { UserComponent } from './user/user.component';
import { UsersComponent } from './users.component';

const routes: Routes = [
  {
    path: '',
    component: UsersComponent,
    children: [
      {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full',
      },
      { path: 'list', component: UserListComponent },
      {
        path: 'user/:id',
        component: UserComponent,
        canActivate: [IsUserSelectedGuard],
        canDeactivate: [DeactivateUserGuard],
      },
    ],
  },
];

export const UsersRoutingModule = RouterModule.forChild(routes);
