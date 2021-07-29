import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'login-comp',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userName:string;
  password:string;
  loginStatus:string;
  constructor() {

    this.userName="Enter User Name Here";
    this.password="Enter Password Here";
    this.loginStatus="Unknown";
  }

  ngOnInit(): void {
  }
  onLogin(){
    console.log(`OnLogin Clicked ${this.userName},${this.password}`);
    if(this.userName=="tom" && this.password=="tom@123"){
      this.loginStatus="Valid";
    }
    else{
      this.loginStatus="InValid";
    }
  }
  onClear(){
this.loginStatus="";
this.userName="";
this.password="";
  }

onUserNameChanged(data:string){
this.userName=data;
  }
  onPasswordChanged(data:string){
this.password=data;
  }

}
