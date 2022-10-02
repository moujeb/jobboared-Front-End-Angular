import { ChangeDetectorRef, Component, EventEmitter, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Role } from 'src/app/models/role';
import { RoleService } from 'src/app/servises/role.service';

@Component({
  selector: 'pm-role-list',
  templateUrl: './role-list.component.html',
  styleUrls: ['./role-list.component.css']
})
export class RoleListComponent implements OnInit  {

  roles: Role[]=[];
  role: Role
  constructor(private roleService: RoleService) {
    this.role = new Role();
   }
 

  ngOnInit(): void {
    this.roleService.findAllRoles().subscribe(data => {
      this.roles = data;
   
    });
  }
  

}
