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
    madMen: ["Mad Men", "Don Draper"],
    breakingBad: ["Breaking Bad", "Walter", "Walter White", "Skyler", "Jesse Pinkman", "Walt", "Jesse", "Saul"],
    gameOfThrones: ["Game of Thrones", "Red Wedding"]
};

/// INPUT CONTROL
var selections = {};

$('input:checkbox').change(function(){
  var clicked = this;

  if(clicked.checked === true){
      localStorage["selection"] = clicked.id;
      selections[clicked.id] = keywords[clicked.id];
  } else {
      delete selections[clicked.id]
  }

  allKeywords = []
  $.each(selections, function(key, value) {
      allKeywords = allKeywords.concat(value);
      console.log("Sening to filter: " + allKeywords)
  });

 /// COMMUNICATING WITH spoilerfilter.js, sending keywords to run in filter
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.sendMessage(tabs[0].id, {
      method: 'runFilter',
      allKeywords: allKeywords
    });
  });
});
