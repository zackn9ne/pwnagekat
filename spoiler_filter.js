/* spoiler_filter.js
 *
 * CONTENT SCRIPT
 *
 * This is injected into every page, and each page's content script
 * relies on popup.js to tell it when to update its filters.
 */

console.log("CONTENT SCRIPT ACTIVATED, NOW INFILTRATING CURRENT PAGE!");

$( document ).ready(function() {

 hideDiv();
 loadForGmail();
 loadForFacebook()

});

//functions for jquery filtering
function hideDiv(){
    $("#hplogo").hide();
    $(".yt-masthead-logo-container").hide();
    $("#home-page-top-stories-sidebar").css("display","none !important");
    $("#feed-pyv-container").hide();
    $("#mngb").css( "border", "solid");
    $(".gb_ya").hide();
}

function resetStyle(){
    $( "h1" ).removeAttr( 'style' );
}

function filterKeyword(keyword, value) {
    console.log("Filtering kw: " + value)
    $( "body:contains('" + value + "')" ).css( "background", "black" );


}

//function to listen to checkbox panel 
chrome.runtime.onMessage.addListener(function(message, sender, sendResponse){
    console.log("received message", message);
    console.log("from", sender);

    if (message.method === 'runFilter') {
        resetStyle();
        $.each(message.allKeywords, filterKeyword);

        chrome.storage.sync.set({'savedKeywords': message.allKeywords}, function() {
            chrome.storage.sync.get("savedKeywords", function(data) {
                console.log("NOW IN CHROME STORAGE: ", data);
                });
            });
        }
    });
