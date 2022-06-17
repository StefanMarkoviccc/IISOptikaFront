import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationComponent } from './registration/registration.component';
import { UserHomePageComponent } from './user-home-page/user-home-page.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { WorkingHourComponent } from './working-hour/working-hour.component';
import { AddWorkingHourComponent } from './add-working-hour/add-working-hour.component';


const routes: Routes = [

  {path: 'login', component:LoginComponent},
  {path: 'registration', component: RegistrationComponent},
  {path: 'user-home-page', component: UserHomePageComponent},
  {path: 'edit-profile', component: EditProfileComponent},
  {path: 'working-hour', component:WorkingHourComponent},
  {path: 'add-working-hour', component:AddWorkingHourComponent},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
