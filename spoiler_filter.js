/* spoiler_filter.js
 *
 * CONTENT SCRIPT
 *
 * This is injected into every page, and each page's content script
 * relies on popup.js to tell it when to update its filters.
 */

var persistingKeywords = $.parseJSON(localStorage.getItem('savedKeywords'))
console.log("Carrying around these kws: " + persistingKeywords);
console.log("CONTENT SCRIPT ACTIVATED, NOW INFILTRATING CURRENT PAGE!");

$.each(persistingKeywords, function(key, value) {
    console.log(value)
      filterKeyword(value);
  });

function resetStyle(){
    $( "h1" ).removeAttr( 'style' );
    $( "h2" ).removeAttr( 'style' );
    $( "h3" ).removeAttr( 'style' );
    $( "p" ).removeAttr( 'style' );
    $( "p > a" ).removeAttr( 'style' );
}

function filterKeyword(keyword) {
    $( "h1:contains('" + keyword + "')" ).css( "background", "black" );
    $( "h1:contains('" + keyword + "')" ).css( "color", "black" );
    $( "h2:contains('" + keyword + "')" ).css( "background", "black" );
    $( "h2:contains('" + keyword + "')" ).css( "color", "black" );
    $( "h3:contains('" + keyword + "')" ).css( "background", "black" );
    $( "h3:contains('" + keyword + "')" ).css( "color", "black" );
    $( "p:contains('" + keyword + "')" ).css( "background", "black" );
    $( "p:contains('" + keyword + "')" ).css( "color", "black" );
    $( "p:contains('" + keyword + "') > a " ).css("color", "black");
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
        var savedKeywords = message.allKeywords;
        console.log("saving to local: " + savedKeywords);
        localStorage.setItem('savedKeywords', JSON.stringify(savedKeywords));
    }

});

// localStorage.setItem('savedKeywords', JSON.stringify(savedKeywords))
// localStorage.getItem('savedKeywords')

//how to check local storage:
// for (var i = 0; i < localStorage.length; i++){
//    console.log(localStorage.getItem(localStorage.key(i)))
// }
