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
            });

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
        // chrome.storage.sync.get("savedKeywords", function(data){
        //     var array1 =  data["savedKeywords"];
        //     console.log("Array1, from storage: " + array1)
        //     var array2 = message.allKeywords
        //     console.log("Array2, from clicks: " + array2)
        //         if(array1.length !== 0 && array2.length !== 0 ){
        //             savedKeywords = array1.concat(array2);

        //             $.each(savedKeywords, filterKeyword);

        //             chrome.storage.sync.set({'savedKeywords': savedKeywords}, function() {
        //                 chrome.storage.sync.get("savedKeywords", function(data) {
        //                     console.log("NOW IN LOCAL STORAGE: ", data);
        //                 });
        //             });
        //         }else{

        // // console.log("Received these from popup.js: " + message.allKeywords)
        $.each(message.allKeywords, filterKeyword);

        // chrome.storage.sync.set({'savedKeywords': message.allKeywords}, function() {
        //     chrome.storage.sync.get("savedKeywords", function(data) {
        //         console.log("NOW IN LOCAL STORAGE: ", data);
        //         });
        //     });
        }
    });

    // }

// });

