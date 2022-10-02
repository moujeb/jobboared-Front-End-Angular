import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import User from '../models/user';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private usersUrl: string;
  
  constructor(private http: HttpClient) { 
     this.usersUrl = 'http://localhost:8080/users';
    
    }

    public findAll(): Observable<User[]> {
      return this.http.get<User[]>(this.usersUrl);
    }
  
    public save(user: User) {
      console.log(user);
      const request:any = {
          "nom":user.nom,
          "prenom":user.prenom,
          "genre":user.genre,
          "dateNaissance":user.DateNaissance,
          "email":user.email,
          "telephone":user.telephone,
          "password":user.password,
          "adresse":user.adresse,
          "etat":user.etat,
          "roleId":user.roleId
      };
      console.log(request)
      return this.http.post<User>(this.usersUrl, request);
    }


}
