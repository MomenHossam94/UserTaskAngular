
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Position, User } from '@app/users/models/users.model';
import { UsersService } from '@app/users/services/users.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
  position = Position;
  keys: any[];
  constructor(private _route:Router,private _userService:UsersService) { 
 
    this.keys = Object.keys(this.position);
  }

  ngOnInit(): void {
  }
  onSubmit(value:any):void
  {
   let user:User={
     id:0,
    name:value.name,
    age:value.age,
    joiningDate : value.joiningDate,
    address:value.address,
    phone:value.phone,
    position:value.position,
    salary: value.salary,
   };

   this._userService.postUser(user).subscribe(
     response=>{
      this._route.navigateByUrl('/users');
     }
   );

  }
  
}
