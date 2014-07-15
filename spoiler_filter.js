/* spoiler_filter.js
 *
 * CONTENT SCRIPT
 *
 * This is injected into every page, and each page's content script
 * relies on popup.js to tell it when to update its filters.
 */

// var persistingKeywords = $.parseJSON(localStorage.getItem('savedKeywords'))
// console.log("Carrying around these kws: " + persistingKeywords);
console.log("CONTENT SCRIPT ACTIVATED, NOW INFILTRATING CURRENT PAGE!");

chrome.storage.sync.get("savedKeywords", function(data){
    console.log("FETCHING: ", data["savedKeywords"]);
        var savedKeywords = data["savedKeywords"];
            $.each(savedKeywords, filterKeyword);
            });

// console.log("returned as a varialble from chrome: " + persistingKeywords);
function resetStyle(){
    $( "h1" ).removeAttr( 'style' );
    $( "h2" ).removeAttr( 'style' );
    $( "h3" ).removeAttr( 'style' );
    $( "p" ).removeAttr( 'style' );
    $( "p > a" ).removeAttr( 'style' );
}

function filterKeyword(keyword, value) {
    console.log("Filtering kw: " + value)
    $( "h1:contains('" + value + "')" ).css( "background", "black" );
    $( "h1:contains('" + value + "')" ).css( "color", "black" );
    $( "h2:contains('" + value + "')" ).css( "background", "black" );
    $( "h2:contains('" + value + "')" ).css( "color", "black" );
    $( "h3:contains('" + value + "')" ).css( "background", "black" );
    $( "h3:contains('" + value + "')value" ).css( "color", "black" );
    $( "p:contains('" + value + "')" ).css( "background", "black" );
    $( "p:contains('" + value + "')" ).css( "color", "black" );
    $( "p:contains('" + value + "') > a " ).css("color", "black");
}

chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
    console.log("received message", message);
    console.log("from", sender);

    // if (message.method === 'loadFilter') {
    //     $.each(message.allKeywords, filterKeyword);
    // }

    if (message.method === 'runFilter') {
        resetStyle();
        $.each(message.allKeywords, filterKeyword);
        console.log("Received these from popup.js: " + message.allKeywords)

        // var savedKeywords = message.allKeywords;
        // console.log("saving to local: " + savedKeywords);

        chrome.storage.sync.set({'savedKeywords': message.allKeywords}, function() {
            chrome.storage.sync.get("savedKeywords", function(data) {
                console.log("NOW IN LOCAL STORAGE: ", data);
            });
        });
        // localStorage.setItem('savedKeywords', JSON.stringify(savedKeywords));
    }

});

// localStorage.setItem('savedKeywords', JSON.stringify(savedKeywords))
// localStorage.getItem('savedKeywords')

//how to check local storage:
// for (var i = 0; i < localStorage.length; i++){
//    console.log(localStorage.getItem(localStorage.key(i)))
// }
