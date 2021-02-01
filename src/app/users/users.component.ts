import { Component, OnInit } from '@angular/core';

import { environment } from '@env/environment';
import { User } from './models/users.model';
import { UsersService } from './services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  version: string | null = environment.version;
  usersArray :User[]=[];
  result :any =[];

  constructor(private _userService:UsersService) {}

  ngOnInit() {
    this._userService.getAllUsers().subscribe(
      response => {
        this.result=response;
        console.log(response);
        this.usersArray =this.result.users as User[];
      },
      error=>{}
    );
  }
  onDelete(id:number)
  {
    let user = this.usersArray.find(i=>i.id==id) as User;
    let userIndex = this.usersArray.indexOf(user,0);
    this._userService.DeleteUser(user.id).subscribe(response=>{
      this.usersArray.splice(userIndex,1);
    })
 
  } 
  }

