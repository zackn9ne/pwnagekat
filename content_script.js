walk(document.body);

function walk(node)
{
  // I stole this function from here:
  // http://is.gd/mwZp7E

  var child, next;

  switch ( node.nodeType )
  {
    case 1:  // Element
    case 9:  // Document
    case 11: // Document fragment
      child = node.firstChild;
      while ( child )
      {
        next = child.nextSibling;
        walk(child);
        child = next;
      }
      break;

    case 3: // Text node
      handleText(node);
      break;
  }
}

function handleText(textNode){
  var v = textNode.nodeValue;

   if (textNode.nodeValue.match(/\bWalter White\b/g)){
    $( "p:contains('Walter')" ).css( "background", "black" );
    $( "p:contains('Walter')" ).css( "color", "black" );
    $( "p:contains('Walter') > a " ).css("color", "black");

    // var x = textNode.nodeValue;
    // x = textNode.nodeType;
    // debugger
   }

}
