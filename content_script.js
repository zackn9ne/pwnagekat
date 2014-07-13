breakingBad = ["Breaking Bad", "Walter", "Walter White", "Skyler", "Jesse Pinkman", "Walt", "Jesse", "Saul", "#breakingbad"]
madMen = ["Mad Men", "Don Draper"]

var selections = []

var addModule = function() {
  //saving the checkbox value
  var x = ( $( "input:checked" ).val());

  // checking if it's already been selected
  if ($.inArray(x, selections)){
    var index = selections.indexOf(x);
    selections.splice(index, 1)
} else {
    console.log(x)
    //adding if not found
    selections.push(x)
    console.log(selections);
}}

$( document ).ready(function() {

$('input:checkbox').change(function(){
   if(this.checked)
      console.log('checked');
   else
      console.log('not checked');
});

});


// $.each(selections, function(selected))

$.each(breakingBad, function(keyword) {
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


