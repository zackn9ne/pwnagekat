breakingBad = ["Breaking Bad", "Walter", "Walter White", "Skyler", "Jesse Pinkman", "Walt", "Jesse", "Saul"]
madMen = ["Mad Men", "Don Draper"]

// var selections = []

// var addModule = function() {
//   //saving the checkbox value
//   var x = ( $( "input:checked" ).val());

//   // checking if it's already been selected
//   if($.inArray(x, selections)){
//     var index = selections.indexOf(x);
//     selections.splice(index, 1)
// } else {
//     console.log(x)
//     //adding if not found
//     selections.push(x)
//     console.log(selections);
// }}

var selections = []

window.addEventListener('load', function(evt) {

  $('input:checkbox').change(function(){
    console.log(this)

    var clicked = this

    if(clicked.checked === true){
        var selection = clicked["value"]
        console.log(selection);
        selections.push(selection);
        console.log(selections);
        // return selections
        }else{
        var index = selections.indexOf(selection);
        selections.splice(index, 1);
        console.log(selections);
        // return selections
        }

    // var x = ( $("input:checked").val());
    // console.log(x)
    // selections.push(x)
    // console.log(selections);
});
    // if(this.checked)
    //     console.log( $( "input:checked" ).val() + " checked!" );
    // else
    //     console.log('not checked');
    // });

});


// $.each(selections, function(selected))

$.each(breakingBad, function(index, keyword) {
  // debugger
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


