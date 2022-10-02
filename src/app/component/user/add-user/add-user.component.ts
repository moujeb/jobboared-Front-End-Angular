import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Role } from 'src/app/models/role';
import User from 'src/app/models/user';
import { RoleService } from 'src/app/servises/role.service';
import { UserService } from 'src/app/servises/user.service';

@Component({
  selector: 'pm-add-user',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  user: User;
  roles: Role []=[];

  constructor(private route: ActivatedRoute, 
    private router: Router, 
      private userService: UserService, private roleService :RoleService) {
  


}

onSubmit() {
  this.userService.save(this.user).subscribe(result => {
    this.gotoUserList()
  });
}

gotoUserList() {
  this.router.navigate(['/add-user']);
}

  ngOnInit(): void {
    this.user = new User();
  this.roleService.findAllRoles().subscribe(data => {
    this.roles = data;
 
  });
  }


}
