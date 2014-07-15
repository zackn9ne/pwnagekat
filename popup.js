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

/// KEYWORD LIBRARY
var keywords = {
    madMen: ["Mad Men", "Don Draper", "MadMen", "Peggy Olsen" ],
    breakingBad: ["Breaking Bad", "Walter White", "Jesse Pinkman"],
    gameOfThrones: ["Game of Thrones", "Red Wedding"]
};

/// INPUT CONTROL
var selections = {};

$('input:checkbox').change(function(){
  var clicked = this;

  if(clicked.checked === true){
      selections[clicked.id] = keywords[clicked.id];
  } else {
      delete selections[clicked.id];
  }

  updateKeywords();

  allKeywords = []
  $.each(allVals, function(key, value) {
      allKeywords = allKeywords.concat(value);
      console.log(allKeywords)
  });

 /// COMMUNICATING WITH spoilerfilter.js, sending keywords to run in filter
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.sendMessage(tabs[0].id, {
      method: 'runFilter',
      allKeywords: allKeywords
    });
  });
});
