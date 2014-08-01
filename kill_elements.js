/* kill_elements.js
 *
 * CONTENT SCRIPT
 *
 * This is injected into every page, and each page's content script
 * relies on popup.js to tell it when to update its filters.
 */

console.log("CONTENT SCRIPT ACTIVATED, NOW INFILTRATING CURRENT PAGE!");

$( document ).ready(function() {

    pwnGoogle();

});


    //functions for jquery filtering
    function pwnGoogle(){
        $("#hplogo").hide();
        $(".yt-masthead-logo-container").hide();
        $(".everyonelovesstackoverflow").hide();
        $("#home-page-top-stories-sidebar").hide();
        $("#home-page-top-stories-sidebar").attr("style","display: none !important");
        $("#feed-pyv-container").hide();
        //google
        $("#mngb").css("border", "solid YellowGreen");
        $(".gb_ya").hide();
        $("#hplogo").hide();
	console.log("pwning Google");
    }
    function youLoad(){
        if(document.domain === "youtube.com" || document.domain === "www.youtube.com"){
            console.log("youtube yo!");
            $("#header").hide();
        }
    }


// recieves the ajax ccall
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
