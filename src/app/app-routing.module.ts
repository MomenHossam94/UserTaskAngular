import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateComponent } from './users/create/create.component';
import { EditComponent } from './users/edit/edit.component';

const routes: Routes = [
  // Fallback when no prior route is matched
  {path:"users/create",component:CreateComponent},
  {path:"users/edit/:id",component:EditComponent},
  { path: '**', redirectTo: '', pathMatch: 'full' },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [],
})
export class AppRoutingModule {}
