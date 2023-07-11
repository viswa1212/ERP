import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user';
@Injectable({
  providedIn: 'root'
})
export class UserService {
   private baseURL="http://localhost:7654/api/v1/user";
  http: any;
  constructor(private httpClient:HttpClient) { }
  getUserList():Observable<User[]>{
    return this.httpClient.get<User[]>(`${this.baseURL}`);
  }
  createUser(user:User):Observable<Object>{
  return this.httpClient.post(`${this.baseURL}`,user);
  }
  getUserById(id:number):Observable<User>{
    return this.httpClient.get<User>(`${this.baseURL}/${id}`);
  }
  updateUser(id:number,user:User):Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}`,user);
  }
  deleteUser(id:number):Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }
  
    getUserData(username:String,password:String){
      return this.httpClient.get(`${this.baseURL}/${username}/${password}`);
    }
  }
  

