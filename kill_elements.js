/* kill_elements.js
 *
 * CONTENT SCRIPT
 *
 * This is injected into every page, and each page's content script
 * relies on popup.js to tell it when to update its filters.
 */

console.log("kill_elements.js NOW INFILTRATING CURRENT PAGE!");

$( document ).ready(function() {

    pwnGoogle();
    pwnGmail();
    pwnThePost();
    pwnYouTube();

});


//functions for jquery filtering
function pwnGoogle(){
    //google logo
    $("#mngb span").attr("style","background-image: none");
    $("#hplogo").hide();
    $(".yt-masthead-logo-container").hide();
    $(".everyonelovesstackoverflow").hide();
    $("#sidebar").hide();
    //entire div on google home
    $("#lga").hide();
    console.log("pwning Google");
}
function pwnGmail(){
    //gmail logo & is also effecting google branding create an if statement fo rgmail domains
    $('.gb_za').hide();
    //gmail loading bar
    $('.lpb').hide();
    //gchat div
    $(".akc").hide();
}
function pwnThePost(){
    $("#home-page-top-stories-sidebar").hide();
    $("#home-page-top-stories-sidebar").attr("style","display: none !important");
    $("#feed-pyv-container").hide();
    $("#outbrain_widget_0").hide();
    $('iframe').hide();
}
function pwnYouTube(){
    if(document.domain === "youtube.com" || document.domain === "www.youtube.com"){
        console.log("youtube yo!");
        $("#header").hide();
    }
}


