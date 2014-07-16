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

function unstyleClick(){
    $("h1").click(
       function()
        { $(this).removeAttr('style') }
    )
    $("h2").click(
       function()
        { $(this).removeAttr('style') }
    )
    $("h3").click(
       function()
        { $(this).removeAttr('style') }
    )
    $("p").click(
       function()
        { $(this).removeAttr('style') }
    )
    $("li").click(
       function()
        { $(this).removeAttr('style') }
    )
     $("div").click(
       function()
        { $(this).css("background", "");
          $(this).css("color", "");
         }
    )
     $(".userContent").click(
       function()
        { $(this).css("background", "");
          $(this).css("color", "");
         }
    )
     $(".UFICommentBody").click(
       function()
        { $(this).css("background", "");
          $(this).css("color", "");
         }
    )
     $(".UFICommentContent").click(
       function()
        { $(this).css("background", "");
          $(this).css("color", "");
         }
    )
     $("._5r--").click(
       function()
        { $(this).css("background", "");
          $(this).css("color", "");
         }
    )
}

function resetStyle(){
    $( "h1" ).removeAttr( 'style' );
    $( "h1 > a" ).removeAttr( 'style' );
    $( "h2" ).removeAttr( 'style' );
    $( "h2 > a" ).removeAttr( 'style' );
    $( "h3" ).removeAttr( 'style' );
    $( "h3 > a" ).removeAttr( 'style' );
    $( "p" ).removeAttr( 'style' );
    $( "p > a" ).removeAttr( 'style' );
    $( "li" ).removeAttr( 'style' );
    $( "li > a" ).removeAttr( 'style' );
    $( "div" ).css("background", "");
    $( "div" ).css("color", "")
    $( "div > a" ).removeAttr( 'style' );
    $( ".userContent" ).css("background", "");
    $( ".userContent" ).css("color", "");
    $( ".UFICommentBody").css("background", "");
    $( ".UFICommentBody").css("color", "");
    $( ".UFICommentContent").css("background", "");
    $( ".UFICommentContent").css("color", "");
    $( "._5r--").css("background", "");
    $( "._5r--").css("color", "");

}

function filterKeyword(keyword, value) {
    console.log("Filtering kw: " + value)
    $( "h1:contains('" + value + "')" ).css( "background", "black" );
    $( "h1:contains('" + value + "')" ).css( "color", "black" );
    $( "h1:contains('" + value + "') > a " ).css("color", "black");

    $( "h2:contains('" + value + "')" ).css( "background", "black" );
    $( "h2:contains('" + value + "')" ).css( "color", "black" );
    $( "h2:contains('" + value + "') > a " ).css("color", "black");

    $( "h3:contains('" + value + "')" ).css( "background", "black" );
    $( "h3:contains('" + value + "')value" ).css( "color", "black" );
    $( "h3:contains('" + value + "') > a " ).css("color", "black");

    $( "p:contains('" + value + "')" ).css( "background", "black" );
    $( "p:contains('" + value + "')" ).css( "color", "black" );
    $( "p:contains('" + value + "') > a " ).css("color", "black");

    $( "li:contains('" + value + "')" ).css( "background", "black" );
    $( "li:contains('" + value + "')" ).css( "color", "black" );
    $( "li:contains('" + value + "') > a " ).css("color", "black");

    $( "div:contains('" + value + "')" ).css( "color", "black" );
    $( "div:contains('" + value + "') > a " ).css("color", "black");

    //just for facebook
    $( ".userContent:contains('" + value + "')" ).css("background", "black");
    $( ".userContent:contains('" + value + "')" ).css("color", "black");
    $( ".UFICommentBody:contains('" + value + "')" ).css("color", "black");
    $( ".UFICommentBody:contains('" + value + "')" ).css("background", "black");
    $( ".UFICommentContentBlock:contains('" + value + "')" ).css("color", "black");
    $( ".UFICommentContentBlock:contains('" + value + "')" ).css("background", "black");
    $( "._5r--:contains('" + value + "')" ).css("background", "black");
    $( "._5r--:contains('" + value + "')" ).css("color", "black");
}

chrome.runtime.onMessage.addListener(function(message, sender, sendResponse){
    console.log("received message", message);
    console.log("from", sender);

    if (message.method === 'runFilter') {
        resetStyle();
        $.each(message.allKeywords, filterKeyword);

        chrome.storage.sync.set({'savedKeywords': message.allKeywords}, function() {
            chrome.storage.sync.get("savedKeywords", function(data) {
                console.log("NOW IN LOCAL STORAGE: ", data);
                });
            });
        }
    });

$(document).ready(function() {

    unstyleClick();

});
