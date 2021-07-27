function invokeAsync(){
var requestId="RequestId "+Math.random();

function checkStatus(){
console.log(requestId);
}
return checkStatus;

}



let statusCallback=invokeAsync();
statusCallback();