import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/users.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  api_url:string = "https://localhost:44300";
  constructor(private _httpClient:HttpClient) { }
  getAllUsers()
  {
    return this._httpClient.get(`${this.api_url}/api/User/GetAll`);
  }
  getUser(id:number)
  {
    return this._httpClient.get(`${this.api_url}/api/User/Get?id=${id}`);
   
  }
  postUser(user:User)
  {
    return this._httpClient.post(`${this.api_url}/api/User/Create`,user);
  }
  EditUser(user:User)
  {
    return this._httpClient.put(`${this.api_url}/api/User/Update`,user);
  }
  DeleteUser(id:number)
  {
    return this._httpClient.delete(`${this.api_url}/api/User/Delete?id=${id}`)
  
  }
} 

