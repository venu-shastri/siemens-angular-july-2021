import {NgModule} from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { AccountsModule } from 'src/accounts/accounts.module'
import { RootRoutingModule } from './root-routing.module'
import { MainDashboardComponent } from './mainDashboard/mainDashboard.component'
import { ConsoleLogger } from 'src/services/consoleLogger.service'
import { ApiLogger } from 'src/services/apiLogger.service';
import { HomeComponent } from './home/home.component';
import { AppComponent } from './app/app.component';
import { NavigationbarComponent } from './navigationbar/navigationbar.component'
import { NavigationBarRouteDeactivateGuard } from 'src/routeGuards/navigationBarRouteDeactivateGuard'
import { ApplyRedColorDirective } from 'src/directives/applyRedColor.directive'
import {ChangeBgColorDirective} from 'src/directives/changeBgColor.directive';
import { ContainerComponent } from './container/container.component';
import { VchildComponent } from './vchild/vchild.component';
import { ContentchildComponent } from './contentchild/contentchild.component'
@NgModule({
  declarations:[MainDashboardComponent, HomeComponent, AppComponent, NavigationbarComponent,ApplyRedColorDirective,ChangeBgColorDirective, ContainerComponent, VchildComponent, ContentchildComponent],
  imports:[BrowserModule,AccountsModule,RootRoutingModule],
  bootstrap:[AppComponent],
  providers:[{provide:"logger",useClass:ApiLogger},[NavigationBarRouteDeactivateGuard]]
})
export class RootModule{

}
