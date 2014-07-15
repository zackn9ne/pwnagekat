/* popup.js
 *
 * POPUP SCRIPT
 *
 * This is the JS loaded by the browser action popup; any time the user
 * changes stuff, it tells the content scripts of the tabs to update.
 */

console.log("POPUP SCRIPT ACTIVATED, READY TO HANDLE CLICKS!");

/// KEYWORD LIBRARY
var keywords = {
    madMen: ["Mad Men", "Don Draper", "MadMen", "Peggy Olsen" ],
    breakingBad: ["Breaking Bad", "Walter", "Walter White", "Skyler", "Jesse Pinkman", "Walt", "Jesse", "Saul"],
    gameOfThrones: ["Game of Thrones", "Red Wedding"]
};

/// INPUT CONTROL
var selections = {};

$('input:checkbox').change(function(){
  var clicked = this;

  if(clicked.checked === true){
      localStorage["selection"] = clicked.id;
      chrome.storage.sync.set({'savedKeywords': keywords[clicked.id]}, function() {
        console.log("Added: " + keywords[clicked.id]);
      })

      selections[clicked.id] = keywords[clicked.id];
  } else {
      delete selections[clicked.id];
      chrome.storage.sync.remove(clicked.id, function(){
        console.log("Removed from storage: " + clicked.id);
      });
  }

  allKeywords = []
  $.each(selections, function(key, value) {
      allKeywords = allKeywords.concat(value);
  });

 /// COMMUNICATING WITH spoilerfilter.js, sending keywords to run in filter
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.sendMessage(tabs[0].id, {
      method: 'runFilter',
      allKeywords: allKeywords
    });
  });
});
