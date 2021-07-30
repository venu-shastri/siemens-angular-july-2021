import {Component, Input,Inject} from "@angular/core"



@Component({
  templateUrl:"./mainDashboard.component.html",
  selector:"main-dash-board" //Element Selector <main-dash-board>
})
export class MainDashboardComponent{
  constructor(@Inject("logger")logger:any){
    this.loginStatus="unknown";
    this.loginHeaderMessage="Enter Credentials Here ";
    this._logger=logger;
  }
  loginStatus:string;
  _logger:any;
  @Input()
  loginHeaderMessage:string;
  //Observer- Event Handler
  onLoginStatusChanged(status:string){

    this._logger.write("MainDashboardComponent -> onLoginStatusChanged");
    this.loginStatus=status;
  }
}
