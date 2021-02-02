import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { marker } from '@biesbjerg/ngx-translate-extract-marker';

import { Shell } from '@app/shell/shell.service';

import { UsersComponent } from './users.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';

const routes: Routes = [
  Shell.childRoutes([{ path: 'users', component: UsersComponent, data: { title: marker('Users') } }]),
  Shell.childRoutes([{path:'users/create',component:CreateComponent,data:{title:marker('Create')}}]) ,
  Shell.childRoutes([{path:'users/edit/:id',component:EditComponent,data:{title:marker('Edit')}}]) 
  

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [],
})
export class UsersRoutingModule {}
