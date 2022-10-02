import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './component/user/user-list/user-list/user-list.component';
import { AddUserComponent } from './component/user/add-user/add-user.component';

import { RouterModule, Routes } from '@angular/router';
import { RoleListComponent } from './component/role/role-list/role-list.component';


const routes: Routes = [
  { path: 'user-list', component: UserListComponent },
  { path: 'add-user', component: AddUserComponent },
  { path: 'role-list', component: RoleListComponent }


];
@NgModule({
  imports: [RouterModule.forRoot(routes),

  ],
  exports: [RouterModule],
  declarations: [],
})
export class AppRoutingModule { }
