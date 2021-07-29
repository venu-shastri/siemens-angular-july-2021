import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'signup-comp',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  name:string;
  pass:string;
  email:string;
  constructor() {
    this.name="";
    this.pass="";
    this.email="";
   }

  ngOnInit(): void {
  }
  onSignup(submittedForm:any){

    console.log(submittedForm);
  }
  onClear(submittedForm:any){
      submittedForm.resetForm();
  }

}
