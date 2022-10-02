import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { FooterComponent } from './component/footer/footer.component';
import { AddUserComponent } from './component/user/add-user/add-user.component';
import { SidebarComponent } from './component/sidebar/sidebar.component';
import { UserListComponent } from './component/user/user-list/user-list/user-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UserService } from './servises/user.service';
import { AppRoutingModule } from './app-routing.module';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { RoleListComponent } from './component/role/role-list/role-list.component';
import { RoleService } from './servises/role.service';
import { HomeComponent } from './component/home/home.component';




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    AddUserComponent,
    SidebarComponent,
    UserListComponent,
    RoleListComponent,
    HomeComponent,
    
   
  ],
  imports: [
    
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    Ng2SearchPipeModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
   

  ],
  providers: [UserService,RoleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
