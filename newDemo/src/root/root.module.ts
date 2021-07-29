import {NgModule} from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { MainDashboardComponent } from './mainDashboard/mainDashboard.component'
import { AccountsModule } from 'src/accounts/accounts.module'

@NgModule({
  declarations:[MainDashboardComponent],
  imports:[BrowserModule,AccountsModule],
  bootstrap:[MainDashboardComponent]
})
export class RootModule{

}
