/* resurrect_elements.js
 *
 * CONTENT SCRIPT
 *
 * This is injected into every page, and each page's content script
 * relies on popup.js to tell it when to update its filters.
 */

console.log("resurrect_elements.js NOW INFILTRATING CURRENT PAGE!");

$( document ).ready(function() {

    respawnGoogle();
    respawnGmail();
    respawnThePost();
    respawnYouTube();

});


//functions for jquery filtering
function respawnGoogle(){
    //google logo
    $("#mngb span").attr("style","background-image: initial");
    $("#hplogo").show();
    $(".yt-masthead-logo-container").show();
    //stack overflow and maybe more!?
    $(".everyonelovesstackoverflow").show();
    $("#sidebar").show();
    $("#lga").show();
    console.log("respawning Google");
}
function respawnGmail(){
    //gmail logo & is also effecting google branding create an if statement fo rgmail domains
    $('.gb_za').show();
    //gmail loading bar
    $('.lpb').show();
    //gchat div
    $(".akc").show();
}
function respawnThePost(){
    $("#home-page-top-stories-sidebar").show();
    $("#home-page-top-stories-sidebar").attr("style","display: initial !important");
    $("#feed-pyv-container").show();
    $("#outbrain_widget_0").show();
    $('iframe').show();
}
function respawnYouTube(){
    if(document.domain === "youtube.com" || document.domain === "www.youtube.com"){
        console.log("youtube yo!");
        $("#header").show();
    }
}


