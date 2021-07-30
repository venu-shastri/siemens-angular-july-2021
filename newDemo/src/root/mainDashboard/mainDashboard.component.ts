import {Component} from "@angular/core"


@Component({
  templateUrl:"./mainDashboard.component.html",
  selector:"main-dash-board" //Element Selector <main-dash-board>
})
export class MainDashboardComponent{
  loginStatus:string;
  constructor(){
    this.loginStatus="unknown";
  }
  //Observer- Event Handler
  onLoginStatusChanged(status:string){

    this.loginStatus=status;
  }
}
