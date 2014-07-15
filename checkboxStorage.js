console.log("CHECKBOXES ARE PERSISTANT NOW!");

$(document).ready(function() {
 // console.log("Loaded options page!")
  $(function () {
      var data = localStorage.getItem("breakingBad");

      if (data !== null) {
          $("input[id='breakingBad']").attr("checked", "checked");
      }
  });

  var workingKeywords = {};

  $("input[id='breakingBad']").click(function () {

      if ($(this).is(":checked")) {
          localStorage.setItem("breakingBad", $(this).val());
          workingKeywords["breakingBad"] = keywords["breakingBad"]
      } else {
          localStorage.removeItem("breakingBad");
          delete workingKeywords["breakingBad"]
      }
  });
  //   allKeywords = []
  //   $.each(workingKeywords, function(key, value) {
  //       allKeywords = allKeywords.concat(value);
  //       console.log(allKeywords);
  //   });


  // chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
  //   chrome.tabs.sendMessage(tabs[0].id, {
  //     method: 'loadFilter
  //     allKeywords: allKeywords
  //   });
  //   console.log("triggered!")
  // });

});




