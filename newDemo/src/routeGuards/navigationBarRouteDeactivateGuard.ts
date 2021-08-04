import { Inject, Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { NavigationbarComponent } from 'src/root/navigationbar/navigationbar.component';

@Injectable()
export class NavigationBarRouteDeactivateGuard implements CanDeactivate<NavigationbarComponent> {
constructor(@Inject("logger") public logger:any){

}
  canDeactivate(comp:NavigationbarComponent) {
    if(window.confirm(`Hi ${comp.userName}! Do you want to continue?`)){
      this.logger.write(`${comp.userName} decided to logout`);
      return true;
    }
    return false;

	}
}
