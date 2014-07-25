/* popup.js
 *
 * POPUP SCRIPT
 *
 * This is the JS loaded by the browser action popup; any time the user
 * changes stuff, it tells the content scripts of the tabs to update.
 */

console.log("POPUP SCRIPT ACTIVATED, READY TO HANDLE CLICKS!");


//How we keep chrome storage in synch!
var allVals = [];
function updateKeywords(){
  allVals = []
  $('input:checkbox').each(function(){
    var currentCheckbox = this;
     if(currentCheckbox.checked === true){
        allVals.push(keywords[currentCheckbox.id]);
        return allVals
     }
  });
}



 /// COMMUNICATING WITH spoilerfilter.js, sending keywords to run in filter
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.sendMessage(tabs[0].id, {
      method: 'runFilter',
      allKeywords: allKeywords
    });
  });
});
