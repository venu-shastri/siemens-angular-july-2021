import { Component, OnInit,Input,Output,EventEmitter, Inject } from '@angular/core';
import {Router} from '@angular/router'

@Component({
  selector: 'login-comp',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userName:string;
  password:string;
  //Dependency
  loginStatus:string;
  _logger:any;
  @Input()
  headerContent:string;
  @Output()
  loginStatusChanged=new EventEmitter<string>();
  //Constructor Injection
  constructor(@Inject("logger")logger:any,public routerService:Router) {
    this._logger=logger;

    this.userName="Enter User Name Here";
    this.password="Enter Password Here";
    this.loginStatus="Unknown";
    this.headerContent="Login Here";
  }

  ngOnInit(): void {
  }
  onLogin(){
    this._logger.write(`OnLogin Clicked ${this.userName},${this.password}`);
    if(this.userName=="tom" && this.password=="tom@123"){
      this.loginStatus="Valid";
      //Activate Route State.....
      this.routerService.navigate(['/navigation',this.userName]);
    }
    else{
      this.loginStatus="InValid";
    }
    //Emit an Event
    //this.loginStatusChanged.emit(this.loginStatus);
  }
  onClear(){
this.loginStatus="";
this.userName="";
this.password="";
  }

onUserNameChanged(data:string){
this.userName=data;
  }

}
