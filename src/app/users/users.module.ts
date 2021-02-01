import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { UsersComponent } from './users.component';
import { FormsModule } from '@angular/forms';
import { UsersRoutingModule } from './users-routing.module';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';


@NgModule({
  imports: [CommonModule, TranslateModule, UsersRoutingModule,FormsModule],
  declarations: [UsersComponent, CreateComponent, EditComponent],
})
export class UsersModule {}
