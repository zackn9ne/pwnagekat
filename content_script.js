breakingBad = ["Breaking Bad", "Walter", "Walter White", "Skyler", "Jesse Pinkman", "Walt", "Jesse", "Saul"]
madMen = ["Mad Men", "Don Draper"]


// var selections = []

// $.each(selections, function(selected))

$.each(breakingBad, function(keyword) {
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


