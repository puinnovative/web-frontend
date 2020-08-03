let status = false;
chrome.runtime.onMessage.addListener(function(msg) {
        console.log(msg)
        status = msg 
    });


chrome.webRequest.onBeforeSendHeaders.addListener(function() {
    if(status) {
        return {
            requestHeaders: [{name: "User-Agent", value: "Xbrowser"}]
        }
    }

}, {"urls" : ["http://*/*", "https://*/*"]}, ["blocking", "requestHeaders"]);

