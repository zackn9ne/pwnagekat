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
    madMen: ["Mad Men", "Don Draper", "MadMen", "Peggy Olsen", "#madmen", "mad men", "Matthew Weiner", "Sterling Cooper", "Pete Campbell"],
    breakingBad: ["Breaking Bad", "Walter White", "Jesse Pinkman", "Mike Ehrmantraut", "Saul Goodman", "Hank Schrader", "breaking bad", "#breakingbad", "Heisenberg", "#heisenberg", "#Heisenberg", "#BreakingBad"],
    gameOfThrones: ["Game of Thrones", "Red Wedding", "game of thrones", "GoT", "#gameofthrones", "#GoT", "Joffrey", "Baratheon", "Lanister", "Stark", "John Snow", "Winter Is Coming", "#winteriscoming"],
    goodWife: ["The Good Wife", "the good wife", "Alicia Florrick", "Will Gardner", "Kalinda Sharma", "Diane Lockhart", "Cary Agos", "Peter Florrick", "Lockhart-Gardner", "Finn Polmar", "Carey Zepps", "Clarke Hayden", "#TheGoodWife", "#thegoodwife"],
    scandal: ["Oliva Pope", "olivia pope", "#scandal", "#Scandal", "@ScandalABC", "#SummerGladiators"],
    trueBlood: ["Sookie", "True Blood", "Tru Blood", "tru blood", "true blood", "Stackhouse", "Merlotte", "Bon Temps", "Tara Thornton", "Eric Northman", "Lafayette Reynolds", "Andy Bellefleur", "Bill Compton", "  #ericnorthman", " #alcide", "#TrueBlood", "#trueblood", "#truebloodhbo"],
    drWho: ["Dr. Who", "dr who", "dr. who", "Dr Who", "#drwho", "TARDIS", "The Doctor", "Rose Tyler", "Amy Pond", "Amelia Pond", "Davros", "Twelth Doctor", "daleks", "dalek", "#SaveTheDay", "#DrWho", "#doctorwho", "doctorwho", "Doctor Who", "doctor who" ],
    yankees: ["Yankees", "The Yankees", "New York", "NY", "yankes", "Yanks", "yankes", "the yanks", "#yankees", "Derek Jeter"],
    redSox: ["Red Sox", "The Redsox", "redsox", "red sox", "sox", "Sox","Boston", "#redsox"],
    dancingWithTheStars: ["Dancing With the Stars", "dancing with the stars", "Erin Andrews", "season 19", "Tom Bergeron", "Rob Wade", "Maksim Chermkovskiy", "DWTS", "Cheryl Burke", "@DancingABC", "#DWTS", " @CherylBurke"]
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
