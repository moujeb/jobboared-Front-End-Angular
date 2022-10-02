import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import User from 'src/app/models/user';
import { UserService } from 'src/app/servises/user.service';

@Component({
  selector: 'pm-user-list',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  filterTerm!:string;
  users: User[]=[];
 
  constructor(private userService: UserService ) { }

  ngOnInit(): void {
    
    this.userService.findAll().subscribe(data => {
      this.users = data;
    });

  }

}
