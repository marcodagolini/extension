
document.addEventListener("DOMContentLoaded", function(event) {


  var button = document.getElementById('submit');
  button.onclick = function() {
    
    var account = document.getElementById("anumber").value;
    var urls = document.getElementById("urls").value;
    var oauth = document.getElementById("auth").value;
    var section = document.getElementById("section").value;

    chrome.storage.local.set({
      "LPaccount": account,
      "LPurls": urls,
      "LPoauth": oauth,
      "LPsection": section
      }, function() {
      console.log("values stored!");
    });

    window.close();

   


    // localStorage.setItem('lp_ext_account', account);
    // localStorage.setItem('lp_ext_urls', urls);
    // localStorage.setItem('lp_ext_oauth', oauth);
    // localStorage.setItem('lp_ext_section', section);
  };

  // var account = localStorage.getItem('lp_ext_account');
  // var urls = localStorage.getItem('lp_ext_urls');
  // var oauth = localStorage.getItem('lp_ext_oauth');
  // var section = localStorage.getItem('lp_ext_section');

  chrome.storage.local.get(["LPaccount","LPurls","LPoauth","LPsection"], function(result) {
    console.log('Value currently is ' + JSON.stringify(result));
    document.getElementById("anumber").value = result.LPaccount;
    document.getElementById("urls").value = result.LPurls;
    document.getElementById("auth").value = result.LPoauth;
    document.getElementById("section").value = result.LPsection;
  });

  

});