// breakingBad = ["Breaking Bad", "Walter", "Walter White", "Skyler", "Jesse Pinkman", "Walt", "Jesse", "Saul"]
//moved above to HTML values, but leaving this here to test the filter at bottom of page

//defining the selections container
var selections = {};

//getting the tabId from background.js, to use when injecting filter... I think???
var tabId;
chrome.extension.sendMessage({ type: 'getTabId' }, function(res) {
    tabId = res.tabId;
});


window.addEventListener('load', function(evt) {

  $('input:checkbox').change(function(){
    console.log(this + " is what you just clicked")
    //saving clicked element here
    var clicked = this

//this is where checkbox keyword sets are added and removed as preferences
//made it a hash so it can delete by name key, no matter where it is in the hash
    if(clicked.checked === true){
        var name = clicked["name"]
        var selection = clicked["value"].split(",")
        console.log("Adding to selection array: " + selection);
        // debugger
        selections[name] = selection;
        console.log(selections + " hash");
        // debugger
        }else{
        var name = clicked["name"]
        var selection = clicked["value"].split(",")
        delete selections[name]
        // console.log(selections);
        }

    console.log("These are in the selections array: " + selections);

//combines selected keywords into an array in order to iterate through it
     allKeywords = []
    $.each( selections, function( key, value ) {
            console.log( key + ":" + value );
            allKeywords.push(value);
            console.log("All keywords array: " + allKeywords)
            });

//finally flattening the array of arrays for an array of one list of all selected checkbox keywords
    var kwArray = allKeywords.reduce(function(a, b){
        return a.concat(b);
    });

    console.log("Sending to the filter: " + kwArray);

    chrome.tabs.executeScript(tabId, { file: 'filter.js'}, function(){
    console.log("triggered!")
  })


    });
});


//Original filter function below, leaving it here because if you uncomment the breakingBad array at top of page
//it demonstrates proof of concept for the filter

// $.each(breakingBad, function(index, keyword) {
//     $( "h1:contains('" + keyword + "')" ).css( "background", "black" );
//     $( "h1:contains('" + keyword + "')" ).css( "color", "black" );
//     $( "h2:contains('" + keyword + "')" ).css( "background", "black" );
//     $( "h2:contains('" + keyword + "')" ).css( "color", "black" );
//     $( "h3:contains('" + keyword + "')" ).css( "background", "black" );
//     $( "h3:contains('" + keyword + "')" ).css( "color", "black" );
//     $( "p:contains('" + keyword + "')" ).css( "background", "black" );
//     $( "p:contains('" + keyword + "')" ).css( "color", "black" );
//     $( "p:contains('" + keyword + "') > a " ).css("color", "black");
// })



