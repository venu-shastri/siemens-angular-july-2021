import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BugspanelComponent } from './bugspanel/bugspanel.component';

const routes: Routes = [
  {path:"",redirectTo:"panel", pathMatch:'full'},
  {path:"panel",component:BugspanelComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BugsRoutingModule { }
