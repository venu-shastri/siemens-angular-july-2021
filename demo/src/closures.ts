function invokeAsync(){
var requestId="RequestId "+Math.random();

function checkStatus(){
console.log(requestId);
}
return checkStatus;

}

let statusCallback=invokeAsync();
statusCallback();


function test(this:any){

    let _this:any=this;
    
    return function (this:any){
        console.log(_this.message);
    }
}

let fun=test.apply({message:"hello"});
fun();