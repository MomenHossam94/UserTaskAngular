import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Position, User } from '../models/users.model';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  user:User=new User();
  id:number=0;
  position = Position;
  keys: any[];
  constructor(private _route:Router,private _activateRoute:ActivatedRoute,private _userService:UsersService) { }

  ngOnInit(): void {
    this.keys = Object.keys(this.position);
    
    this._activateRoute.paramMap.subscribe(
      params=>{
        this.id=Number(params.get("id"))
       }
    );
      this._userService.getUser(this.id).subscribe(response=>{
        this.user = response as User
       
   
       });
  }
  onSubmit(value:any)
  {
    // let user:User={
    //   id:value.id,
    //  name:value.name,
    //  age:value.age,
    //  joiningDate : value.joiningDate,
    //  address:value.address,
    //  phone:value.phone,
    //  position:+value.position,
    //  salary: value.salary,
    // };
    let user ={
      ...value,
      phone: `${value.phone}`
    };
     this._userService.EditUser(value).subscribe(response=>{
       this._route.navigateByUrl('/users');
     })
  }
  dateChanged(eventDate: string): Date | null {
    return !!eventDate ? new Date(eventDate) : null;
  }

}
