/* spoiler_filter.js
 *
 * CONTENT SCRIPT
 *
 * This is injected into every page, and each page's content script
 * relies on popup.js to tell it when to update its filters.
 */

console.log("CONTENT SCRIPT ACTIVATED, NOW INFILTRATING CURRENT PAGE!");

chrome.storage.sync.get("savedKeywords", function(data){
    console.log("FETCHING: ", data["savedKeywords"]);
        var savedKeywords = data["savedKeywords"];
            $.each(savedKeywords, filterKeyword);
                return savedKeywords;
            });

// console.log("SavedKeywords returned: " + savedKeywords)

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

chrome.runtime.onMessage.addListener(function(message, sender, sendResponse){
    console.log("received message", message);
    console.log("from", sender);

    if (message.method === 'runFilter') {
        resetStyle();
        chrome.storage.sync.get("savedKeywords", function(data){
            array1 =  data["savedKeywords"];
            console.log("Saved keywords: " + array1)
            array2 = message.allKeywords
            console.log("Keywords from new click: " + array2)

            var array3 = array1.concat(array2);
        //     debugger
        console.log("Received these from popup.js: " + message.allKeywords)
        $.each(message.allKeywords, filterKeyword);


        chrome.storage.sync.set({'savedKeywords': message.allKeywords}, function() {
            chrome.storage.sync.get("savedKeywords", function(data) {
                console.log("NOW IN LOCAL STORAGE: ", data);
                });
            });
        });

    }

});

