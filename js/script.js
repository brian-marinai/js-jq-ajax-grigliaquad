
function getRandNumbListener() {

  var button = $(".grid-item")
  button.click(getRundNumber);
}

function getRundNumber() {
  console.log("click");
  $.ajax({

    url: "https://flynn.boolean.careers/exercises/api/random/int",
    method : "get",
    success : function(data, state) {

      var griditem = $("#grid-item");
      var success = data["success"];
      var value = data["response"];

      // var template = $("#grid-item").clone();

      var maggiore = (value > 5 == true);
      var minore = (value <= 5 == true);

      if (success) {

        if (value <= 5) {
          griditem.append(value);
          griditem.addClass("minore");
          // griditem.append(template);


        } else {
          griditem.append(value);
          griditem.addClass("maggiore");
        }

      }


    }

  });

}














function init() {
  getRandNumbListener();

}


$(document).ready(init);
