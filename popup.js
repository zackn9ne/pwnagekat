/* popup.js
 *
 * POPUP SCRIPT
 *
 * This is the JS loaded by the browser action popup; any time the user
 * changes stuff, it tells the background page to tell the tabs to update.
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

  //this is where checkbox keyword sets are added and removed as preferences
  //made it a hash so it can delete by name key, no matter where it is in the hash
  if(clicked.checked === true){
      selections[clicked.id] = keywords[clicked.id];
  } else {
      delete selections[clicked.id]
  }

  //combines selected keywords into an array in order to iterate through it
  allKeywords = []
  $.each(selections, function(key, value) {
      allKeywords = allKeywords.concat(value);
  });

  // This worked when we wanted to send something to the background page
  // js, because we thought we had to pass it through to the content script
  // from there. But it turns out that we can probably just use chrome.tabs
  // to send the messages DIRECTLY to the tabs.
  // chrome.runtime.sendMessage({
  //   method: 'runFilter',
  //   allKeywords: allKeywords
  // });

  // THIS works for sending a message to ONE tab and doing something with
  // the response.
  // chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
  //   chrome.tabs.sendMessage(tabs[0].id, {greeting: "hello"}, function(response) {
  //     console.log(response.farewell);
  //   });
  // });

  // This will eventually be the final way of sending a message to ALL tabs.
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.sendMessage(tabs[0].id, {
      method: 'runFilter',
      allKeywords: allKeywords
    });
  });
});
