import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Role } from '../models/role';

@Injectable({
  providedIn: 'root'
})
export class RoleService {

  private Url: string;



  constructor(private http: HttpClient) {
    this.Url = 'http://localhost:8080/roles';
  }

  public findAllRoles(): Observable<Role[]> {
    return this.http.get<Role[]>(this.Url);
  }

  public saveRole(role: Role) {
    return this.http.post<Role>(this.Url, role);
  }

}
