$(function () {

  var timeBlockContainer = $(".container-lg");
  var timeBlocks = timeBlockContainer.children().attr("id");

  timeBlockContainer.on("click", ".saveBtn", function (event) {
    event.preventDefault(); //event default - any click then stops 
    console.log(timeBlocks);
    var clickTarget = $(this);
    var timeId = clickTarget.parent().attr("id");
    var userInput = clickTarget.siblings(".description").val();
    // console.log(userInput);
    localStorage.setItem(timeId, userInput);
  });

  var currentTime = dayjs().hour();

  for (var i = 9; i <= 17; i++) {
    var timeBlockEl = $("#hour-" + i);
    var userInput = localStorage.getItem("hour-" + i);
    timeBlockEl.find(".description").text(userInput);
    if (i < currentTime) {
      timeBlockEl.addClass("past");
    } else if (i > currentTime) {
      timeBlockEl.addClass("future");
    } else {
      timeBlockEl.addClass("present");
    }
  }


  // function loadData() {
  //   for (var i = 9; i <= 17; i++) {
  //     var key = $("#hour-") + i;
  //     var data = localStorage.getItem("key");

  //     if (data !== null) {
  //       updateEl(key, data);
  //     }
  //   }
  // }

  // function updateEl(key, data) {
  //   if (key === $("#hour-" + i)) {
  //     $(".description").innerHTML(data);
  //   }
  // }

  var today = dayjs();
  $("#currentDay").text(today.format("dddd, MMMM D, YYYY"));

  // $(document).ready(function () {
  //   loadData();
  // })

});
