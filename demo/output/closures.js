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
