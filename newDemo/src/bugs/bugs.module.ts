import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BugsRoutingModule } from './bugs-routing.module';
import { BugspanelComponent } from './bugspanel/bugspanel.component';


@NgModule({
  declarations: [
    BugspanelComponent
  ],
  imports: [
    CommonModule,
    BugsRoutingModule
  ]
})
export class BugsModule { }
