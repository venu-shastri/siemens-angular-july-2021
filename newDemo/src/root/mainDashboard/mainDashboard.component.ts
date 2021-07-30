import {Component, Input} from "@angular/core"


@Component({
  templateUrl:"./mainDashboard.component.html",
  selector:"main-dash-board" //Element Selector <main-dash-board>
})
export class MainDashboardComponent{
  loginStatus:string;
  @Input()
  loginHeaderMessage:string;
  constructor(){
    this.loginStatus="unknown";
    this.loginHeaderMessage="Enter Credentials Here ";
  }
  //Observer- Event Handler
  onLoginStatusChanged(status:string){

    this.loginStatus=status;
  }
}
