"use strict";
function invokeAsync() {
    var requestId = "RequestId " + Math.random();
    function checkStatus() {
        console.log(requestId);
    }
    return checkStatus;
}
var statusCallback = invokeAsync();
statusCallback();
function test() {
    var valueOfThis = this.message;
    return function () {
        console.log(this.message);
    };
}
var fun = test.apply({ message: "hello" });
fun();
