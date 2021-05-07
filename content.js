// alert('Grrr.')
// chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
//   const re = new RegExp('bear', 'gi')
//   const matches = document.documentElement.innerHTML.match(re)
//   sendResponse({count: matches.length})
// })

// const re = new RegExp('bear', 'gi')
// const matches = document.documentElement.innerHTML.match(re) || []

// chrome.runtime.sendMessage({
//   url: window.location.href,
//   count: matches.length
// })


chrome.storage.local.get(["LPaccount","LPurls","LPoauth","LPsection"], function(result) {
  console.log('Value currently is ' + JSON.stringify(result));

  var accountNumber = result.LPaccount;
  var myURLs = result.LPurls;
  var myOauth = result.LPoauth;
  var mySection = result.LPsection;

  console.log(accountNumber)
  console.log(myURLs)
  console.log(myOauth)
  console.log(mySection)

  if((accountNumber !== "")&&(!isNaN(accountNumber))){

    async function loadScript(accountNumber) {

      var myScript = document.createElement( "script" )
      // window.lpTag=window.lpTag||{}
      myScript.innerHTML = "var thisIsCustomLpTag=true;window.lpTag={},'undefined'==typeof window.lpTag._tagCount?(window.lpTag={wl:lpTag.wl||null,scp:lpTag.scp||null,site:'" + accountNumber + "'||'',section:lpTag.section||'',tagletSection:lpTag.tagletSection||null,autoStart:lpTag.autoStart!==!1,ovr:lpTag.ovr||{},_v:'1.10.0',_tagCount:1,protocol:'https:',events:{bind:function(t,e,i){lpTag.defer(function(){lpTag.events.bind(t,e,i)},0)},trigger:function(t,e,i){lpTag.defer(function(){lpTag.events.trigger(t,e,i)},1)}},defer:function(t,e){0===e?(this._defB=this._defB||[],this._defB.push(t)):1===e?(this._defT=this._defT||[],this._defT.push(t)):(this._defL=this._defL||[],this._defL.push(t))},load:function(t,e,i){var n=this;setTimeout(function(){n._load(t,e,i)},0)},_load:function(t,e,i){var n=t;t||(n=this.protocol+'//'+(this.ovr&&this.ovr.domain?this.ovr.domain:'lptag.liveperson.net')+'/tag/tag.js?site='+this.site);var o=document.createElement('script');o.setAttribute('charset',e?e:'UTF-8'),i&&o.setAttribute('id',i),o.setAttribute('src',n),document.getElementsByTagName('head').item(0).appendChild(o)},init:function(){this._timing=this._timing||{},this._timing.start=(new Date).getTime();var t=this;window.attachEvent?window.attachEvent('onload',function(){t._domReady('domReady')}):(window.addEventListener('DOMContentLoaded',function(){t._domReady('contReady')},!1),window.addEventListener('load',function(){t._domReady('domReady')},!1)),'undefined'===typeof window._lptStop&&this.load()},start:function(){this.autoStart=!0},_domReady:function(t){this.isDom||(this.isDom=!0,this.events.trigger('LPT','DOM_READY',{t:t})),this._timing[t]=(new Date).getTime()},vars:lpTag.vars||[],dbs:lpTag.dbs||[],ctn:lpTag.ctn||[],sdes:lpTag.sdes||[],hooks:lpTag.hooks||[],identities:lpTag.identities||[],ev:lpTag.ev||[]},lpTag.init()):window.lpTag._tagCount+=1;function authentication(){window.lpGetAuthenticationToken = function(callback) {var token = \"eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJodHRwczovL3NvbWV0aGluZy5pdCIsInN1YiI6InF3ZXJ0eTE5NzMiLCJwcmVmZXJyZWRfdXNlcm5hbWUiOiJKb2huRG9lIiwicGhvbmVfbnVtYmVyIjoiKzEtMTAtMzQ0LTM3NjUzMzMiLCJnaXZlbl9uYW1lIjoiVGVzdCIsImZhbWlseV9uYW1lIjoiVGVzdDIiLCJlbWFpbCI6ImVtYWlsQGVtYWlsLmNvbSIsImdlbmRlciI6Ik1hbGUiLCJscF9zZGVzIjpbeyJ0eXBlIjoiY3RtcmluZm8iLCJpbmZvIjp7ImNzdGF0dXMiOiJjYW5jZWxsZWQiLCJjdHlwZSI6InZpcCIsImN1c3RvbWVySWQiOiJhYmMxMjM0NTYiLCJiYWxhbmNlIjoiLTQwMC45OSIsInNvY2lhbElkIjoiMzQ1Njc4NzY1NCIsImltZWkiOiI5OTk2NjMyMSIsInVzZXJOYW1lIjoidXNlcjAwMCIsImNvbXBhbnlTaXplIjoiNTAwIiwiYWNjb3VudE5hbWUiOiJiYW5rIGNvcnAiLCJyb2xlIjoiYnJva2VyIiwibGFzdFBheW1lbnREYXRlIjp7ImRheSI6IjE1IiwibW9udGgiOiIxMCIsInllYXIiOiIyMDE0In0sInJlZ2lzdHJhdGlvbkRhdGUiOnsiZGF5IjoiMjMiLCJtb250aCI6IjUiLCJ5ZWFyIjoiMjAxMyJ9fX0seyJ0eXBlIjoicGVyc29uYWwiLCJwZXJzb25hbCI6eyJmaXJzdG5hbWUiOiJKb2huIiwibGFzdG5hbWUiOiJEb2UiLCJhZ2UiOnsiYWdlIjoiMzQiLCJ5ZWFyIjoiMTk4MCIsIm1vbnRoIjoiNCIsImRheSI6IjE1In0sImNvbnRhY3RzIjpbeyJlbWFpbCI6Im15bmFtZUBleGFtcGxlLmNvbSIsInBob25lIjoiMzkzNDI1OTI5MDE1In1dLCJnZW5kZXIiOiJNQUxFIiwiY29tcGFueSI6IkxpdmVQZXJzb24ifX1dLCJpYXQiOjE1ODk4NzU5MzksImV4cCI6MjE4OTg3NTkzOX0.ef60SPFR4pmpC7NwdsN6awO0RJXwLbYy4JMeNYBw7IUWUD33UHwDxZc_F6EqMPhHj0_W5I-cjx5xZGppls6M8DpdDgOK_s8CWyb_alMGtlK4V8JaEsoLzUQjIHNXgeYH3ieHMJVXK7ltN4cibxnfepIxgkQbEkEAQUYCoTAG6OeTU0MozcVFLgz_TjLWNuc6vJfbdyBtOy42x3eWac_9JvHNctVGsSE_nYhw5LzmQyWN538uKLOZEAWbkITTTYIn8Khmv4Jic4E4UGig3iZMr_1vsN6NPK7p8yc7ctIfKO_M4akZ9x5OdVnOpHjN3XivAYJ0q64KP3vwicUxH6bbig\";callback(token);};}";
      myScript.type = "text/javascript";
      return new Promise((resolve, reject) => {
        console.log("inside")
        document.getElementsByTagName('head')[0].appendChild(myScript);
        window.onload = function () {
          console.log("ok");
          resolve(true);
        };
        
        console.log("done")
      });
    }

    console.log("url")


    var currentURL = window.location.href;
    var checkURL = false;

    var rxUrlSplit = /((?:http|ftp)s?):\/\/([^\/]+)(\/.*)?/;
    var prepUrl = "";
    if ((m=myURLs.match(rxUrlSplit)) !== null) {
      prepUrl = m[1]+"://"+m[2].replace(/[?()[\]\\.+^$|]/g, "\\$&").replace(/\*\\./g,'(?:[^/]*\\.)*').replace(/\*$/,'[^/]*');
      if (m[3]) { 
          prepUrl+= m[3].replace(/[?()[\]\\.+^$|]/g, "\\$&").replace(/\/\*(?=$|\/)/g, '(?:/[^]*)?');
      }
    }
    if (prepUrl) {
    //  console.log(prepUrl); // ^http://(?:[^/]*\.)*google\.com(?:/[^]*)?$
      var rx = RegExp("^" + prepUrl + "$", "i");
      
        if (currentURL.match(rx)) {
          console.log(currentURL + " matches!<br/>");
          checkURL = true;
        } else {
          console.log(currentURL + " does not match!<br/>");
        }
      
    } else{
      if(currentURL.indexOf(myURLs) > -1){
        checkURL = true;
      }
    }
    
    
    if(checkURL){
  
      // call the function...
      loadScript(accountNumber, myOauth, mySection).then(function load(){
        console.log("done2")

        var authentication = "";   
        var location = "console.log(\"inside2\");var CurrentLocation = window.location.href;lpTag.newPage(CurrentLocation, {section: \"" + mySection + "\"});lpTag.sdes.push({\"type\": \"ctmrinfo\",\"info\": {customerId: '1'}});";

        if(myOauth !== ""){
          authentication = "window.lpGetAuthenticationToken = function(callback) {console.log(\"inside lpGetAuthenticationToken!\");var token = \"" + myOauth + "\";callback(token);};lpTag.identities=[];lpTag.identities.push(identityFn);function identityFn(callback) {callback({iss: \"https://something.someplace.com/\",acr: \"loa1\",sub: \"qwerty1973\"});}";
        }

        console.log("oauth --> " + authentication);
    
        
        var myScript2 = document.createElement( "script" )
        // myScript2.innerHTML = "setTimeout(function (){" + location + authentication + "}, 1000);";
        myScript2.innerHTML = location + authentication;
        document.getElementsByTagName("head")[0].appendChild(myScript2);
    
        
      }, function error(){console.log("error")});
  

  }
}


});


