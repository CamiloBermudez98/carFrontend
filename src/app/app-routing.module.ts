import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './components/Home/main-page/main-page.component';
import { LoginUserComponent } from './components/User/login-user/login-user.component';
import { ResgisterComponent } from './components/User/resgister/resgister.component';

const routes: Routes = [{
  path: 'home',
  redirectTo: 'start',
  pathMatch: 'full'
},  { path:'home',component:MainPageComponent},
   {path:'Login/Register',component:ResgisterComponent},
  {path:'Login',component:LoginUserComponent},
  
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
