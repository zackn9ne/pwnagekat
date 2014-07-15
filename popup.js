/* popup.js
 *
 * POPUP SCRIPT
 *
 * This is the JS loaded by the browser action popup; any time the user
 * changes stuff, it tells the content scripts of the tabs to update.
 */

console.log("POPUP SCRIPT ACTIVATED, READY TO HANDLE CLICKS!");

var keywords = {
    madMen: ["Mad Men", "Don Draper"],
    breakingBad: ["Breaking Bad", "Walter", "Walter White", "Skyler", "Jesse Pinkman", "Walt", "Jesse", "Saul"],
    gameOfThrones: ["Game of Thrones", "Red Wedding"]
};

var selections = {};

$('input:checkbox').change(function(){
  var clicked = this;


  // this is where checkbox keyword sets are added and removed as preferences
  // made it a hash so it can delete by name key, no matter where it is in the hash
  if(clicked.checked === true){
      localStorage["selection"] = clicked.id;
      selections[clicked.id] = keywords[clicked.id];
  } else {
      delete selections[clicked.id]
  }

  // combines ALL selected keywords into an array in order to iterate through it
  allKeywords = []
  $.each(selections, function(key, value) {
      allKeywords = allKeywords.concat(value);
      console.log("Sening to filter: " + allKeywords)
  });

    // send to the content scripts
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.sendMessage(tabs[0].id, {
      method: 'runFilter',
      allKeywords: allKeywords
    });
  });
});
