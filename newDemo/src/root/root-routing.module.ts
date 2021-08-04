
import { NgModule } from '@angular/core';
import{Routes,RouterModule} from '@angular/router'
import { LoginComponent } from 'src/accounts/login/login.component';
import { SignupComponent } from 'src/accounts/signup/signup.component';
import { HomeComponent } from './home/home.component';
import { NavigationbarComponent } from './navigationbar/navigationbar.component';
import { NavigationBarRouteDeactivateGuard } from 'src/routeGuards/navigationBarRouteDeactivateGuard';
import { BugsModule } from 'src/bugs/bugs.module';
//Create Root Configuration

const routes:Routes=[

 {path:"home",component:HomeComponent,children:[
   {path:"login",component:LoginComponent},
   {path:"signup",component:SignupComponent}
 ]},
 {path:"",redirectTo:"home",pathMatch:'full'},
 {path:"navigation/:username",
 component:NavigationbarComponent,
 canDeactivate:[NavigationBarRouteDeactivateGuard],
 children:[{path:"bugs",loadChildren:()=>import('../bugs/bugs.module').then(m=>m.BugsModule)}]
}

];

@NgModule({
  imports:[RouterModule.forRoot(routes)],
  exports:[RouterModule]
})
export class RootRoutingModule{

}
