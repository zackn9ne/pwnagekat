/* spoiler_filter.js
 *
 * CONTENT SCRIPT
 *
 * This is injected into every page, and it communicates with
 * the background page to hide stuff on each tab.
 */

console.log("CONTENT SCRIPT ACTIVATED, NOW INFILTRATING CURRENT PAGE!");

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

    if (message.method === 'runFilter') {
        $.each(message.allKeywords, filterKeyword);
    }
});
