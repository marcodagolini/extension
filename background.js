// window.bears = {}
// chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
//   window.bears[request.url] = request.count
// })

// chrome.browserAction.onClicked.addListener(function (tab) {
//   chrome.tabs.create({url: 'popup.html'})
// })

// chrome.tabs.sendMessage(tabs[0].id, "hi");





var onHeadersReceived = function (details) {

    console.log("ok")

    for (var i = 0; i < details.responseHeaders.length; i++) {

      if (details.responseHeaders[i].name.toLowerCase() === 'content-security-policy') {
        details.responseHeaders[i].value = '';
      }
      /****
      if(details.responseHeaders[i].value.indexOf("lpTag") > -1){
        if(details.responseHeaders[i].value.indexOf("thisIsCustomLpTag") > -1){
          // do nothing
        } else{
          details.responseHeaders[i].value = '';
        }
      }
      ****/
    }
  
    return {
      responseHeaders: details.responseHeaders
    };
  };

chrome.webNavigation.onBeforeNavigate.addListener(function (request, sender, sendResponse) {

    // chrome.runtime.sendMessage(account);
    
    // console.log(tabs[0].id);
    
    
    
    var tabID = request.tabId;

    if(request.frameId === 0){
        console.log(tabID);
        console.log("done")
        var onHeaderFilter = { urls: ['*://*/*'], types: ['main_frame', 'sub_frame'] };
        chrome.webRequest.onHeadersReceived.addListener(
            onHeadersReceived, onHeaderFilter, ['blocking', 'responseHeaders']
        );
    }

    



    // console.log(JSON.stringify(request));
    // console.log(JSON.stringify(sender));
    // console.log(JSON.stringify(sendResponse));
})

/*** 
window.addEventListener('load', function (result) {
  console.log(result);
});

*****/