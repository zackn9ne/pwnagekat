/* popup.js
 *
 * POPUP SCRIPT
 *
 * This is the JS loaded by the browser action popup; any time the user
 * changes stuff, it tells the content scripts of the tabs to update.
 */

console.log("POPUP SCRIPT ACTIVATED, READY TO HANDLE CLICKS!");
function click(e) {
  chrome.tabs.executeScript(null,
    {file:"resurrect_elements.js"});
      //{code:"console.log('a button element was clicked')" });
      //{code:"document.body.style.backgroundColor='" + e.target.id + "'"});
  //window.close();
        console.log(e.target.id);
        e.target.id;
        console.log("woof");
}

document.addEventListener('DOMContentLoaded', function () {
  var divs = document.querySelectorAll('button');
  for (var i = 0; i < divs.length; i++) {
    divs[i].addEventListener('click', click);
  }
});


