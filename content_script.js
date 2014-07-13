breakingBad = ["Breaking Bad", "Walter", "Walter White", "Skyler", "Jesse Pinkman", "Walt", "Jesse", "Saul"]
madMen = ["Mad Men", "Don Draper"]
gameOfThrones = ["Game of Thrones", "Red Wedding"]

var selections = {};

function filter(module){
    $.each(module, function(index, keyword) {
        console.log("Keyword we're filtering: " + keyword)
    $( "h1:contains('" + keyword + "')" ).css( "background", "black" );
    $( "h1:contains('" + keyword + "')" ).css( "color", "black" );
    $( "h2:contains('" + keyword + "')" ).css( "background", "black" );
    $( "h2:contains('" + keyword + "')" ).css( "color", "black" );
    $( "h3:contains('" + keyword + "')" ).css( "background", "black" );
    $( "h3:contains('" + keyword + "')" ).css( "color", "black" );
    $( "p:contains('" + keyword + "')" ).css( "background", "black" );
    $( "p:contains('" + keyword + "')" ).css( "color", "black" );
    $( "p:contains('" + keyword + "') > a " ).css("color", "black");
})
}



window.addEventListener('load', function(evt) {

  $('input:checkbox').change(function(){
    console.log(this + " is what you just clicked")

    //saving clicked element here
    var clicked = this

    if(clicked.checked === true){
        var name = clicked["name"]
        var selection = clicked["value"]
        console.log("Adding to selection array: " + selection);
        // debugger
        selections[name] = selection;
        // selections.push(selection);
        console.log(selections + " hash");
        debugger
        }else{
        // var index = selections.indexOf(selection);
        var name = clicked["name"]
        var selection = clicked["value"]
        delete selections[name]
        // selections.splice(index, 1);
        // console.log(selections);
        }

    //array is saved correctly here!
    console.log("These are in the selections array: " + selections);


    $.each(selections, function(index, selection){
        console.log(selection + " that we're about to filter");
        // if(selection === "madMen")
        // madMen = ["Mad Men", "Don Draper"]
        // module = madMen
        // debugger
        filter(module);
    })
    // return selections;
    });
  //but not here :(
   // console.log("One scope up, these are in selections array: " + selections);

   //saving nice checked/unchecked syntax
    // if(this.checked)
    //     console.log( $( "input:checked" ).val() + " checked!" );
    // else
    //     console.log('not checked');
    // });
});


// $.each(selections, function(selected))

// $.each(breakingBad, function(index, keyword) {
//   // debugger
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



