breakingBad = ["Walter", "Walter White", "Skyler", "Jesse Pinkman"]

$.each(breakingBad, function(x) {
    $( "p:contains('" + x + "')" ).css( "background", "black" );
    $( "p:contains('" + x + "')" ).css( "color", "black" );
    $( "p:contains('" + x + "') > a " ).css("color", "black");
})
