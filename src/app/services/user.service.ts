import * as global from 'global';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  url = `${global.url}/users`
  
  constructor(private http: HttpClient) { }

  getUser(){
    return this.http.get<User[]>(this.url);
  }
}
