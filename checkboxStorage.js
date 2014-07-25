/* checkboxStorage.js
 *
 * POPUP SCRIPT
 *
 * This is storing checkbox values in LOCALSTORAGE (not chromestorage!)
 * However, popup.js could NOT tally checkbox values without this working.
 */

console.log("CHECKBOXES ARE PERSISTANT NOW!");

//logging whats in local storage
for (var i = 0; i < localStorage.length; i++){
  console.log("In checkbox storage:" + localStorage.getItem(localStorage.key(i)))
}

$(document).ready(function() {
  $(function () {
      var data = localStorage.getItem("breakingBad");

      if (data !== null) {
          $("input[id='breakingBad']").attr("checked", "checked");
      }
  });

  $("input[id='breakingBad']").click(function () {

      if ($(this).is(":checked")) {
          localStorage.setItem("breakingBad", $(this).val());
      } else {
          localStorage.removeItem("breakingBad");
      }
    });



});





