import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoanComponent } from './loan/loan.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';
import { SicalcyComponent } from './sicalcy/sicalcy.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { ViewAccountDetailsComponent } from './view-account-details/view-account-details.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'register', component:RegisterComponent},
  {path:'aboutus',component:AboutusComponent},
  {path:'loan',component:LoanComponent},
  {path:'intrest',component:SicalcyComponent},
  {path:'profile', component : ProfileComponent },
  {path: 'adminPanel', component : AdminPanelComponent},
  {path: 'updateUser/:id', component: UpdateUserComponent},
  {path: 'view-User-details/:id', component: ViewAccountDetailsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
