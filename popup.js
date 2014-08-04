/* popup.js
 *
 * POPUP SCRIPT
 *
 * This is the JS loaded by the browser action popup; any time the user
 * changes stuff, it tells the content scripts of the tabs to update.
 */

console.log("POPUP SCRIPT ACTIVATED, READY TO HANDLE CLICKS!");

var pwnGoogle = document.getElementById("pwnGoogleButton");
//listen for onclick from ^ variable v
pwnGoogle.onclick = function myFunction(){
    console.log("y o hoooooo");
};


