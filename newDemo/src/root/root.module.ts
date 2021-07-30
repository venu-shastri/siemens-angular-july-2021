import {NgModule} from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { MainDashboardComponent } from './mainDashboard/mainDashboard.component'
import { AccountsModule } from 'src/accounts/accounts.module'
import { ConsoleLogger } from 'src/services/consoleLogger.service'
import { ApiLogger } from 'src/services/apiLogger.service'

@NgModule({
  declarations:[MainDashboardComponent],
  imports:[BrowserModule,AccountsModule],
  bootstrap:[MainDashboardComponent],
  providers:[{provide:"logger",useClass:ApiLogger}]
})
export class RootModule{

}
