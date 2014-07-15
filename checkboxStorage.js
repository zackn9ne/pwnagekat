console.log("CHECKBOXES ARE PERSISTANT NOW!");

for (var i = 0; i < localStorage.length; i++){
console.log("In extensions storage:" + localStorage.getItem(localStorage.key(i)))
}

$(document).ready(function() {
 // console.log("Loaded options page!")
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

  $(function () {
      var data = localStorage.getItem("madMen");

      if (data !== null) {
          $("input[id='madMen']").attr("checked", "checked");
      }
  });

  $("input[id='madMen']").click(function () {

      if ($(this).is(":checked")) {
          localStorage.setItem("madMen", $(this).val());
      } else {
          localStorage.removeItem("madMen");
      }
    });

  $(function () {
      var data = localStorage.getItem("gameOfThrones");

      if (data !== null) {
          $("input[id='gameOfThrones']").attr("checked", "checked");
      }
  });

  $("input[id='gameOfThrones']").click(function () {

      if ($(this).is(":checked")) {
          localStorage.setItem("gameOfThrones", $(this).val());
      } else {
          localStorage.removeItem("gameOfThrones");
      }
    });


});





