/* popup.js
 *
 * POPUP SCRIPT
 *
 * This is the JS loaded by the browser action popup; any time the user
 * changes stuff, it tells the content scripts of the tabs to update.
 */

console.log("POPUP SCRIPT ACTIVATED, READY TO HANDLE CLICKS!");

var pwnGoogle = document.getElementById("pwnGoogleButton");
//listen for onclick from ^ variable v
pwnGoogle.onclick = function myFunction(){
    console.log("y o hoooooo");
};




 /// Chromes version of an ajax request
 /// COMMUNICATING WITH kill_elements.js, sending keywords to run in filter
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.sendMessage(tabs[0].id, {
      method: 'runFilter',
      allKeywords: allKeywords
    });
  });
