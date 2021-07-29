class SignupFormController{


    signup(){
            this.updateDb();
    }
  updateDb(){
console.log("Update DB.....")
    }
}

//Event Handler
function button_click(controllerLogic:any){

    controllerLogic(); //Invoke Controller Logic
}

let obj=new SignupFormController();
button_click(obj.signup.bind(obj));