$(function () {

  var timeBlockContainer = $(".container-lg");
 
  timeBlockContainer.on("click", ".saveBtn", function (event) {
    event.preventDefault(); //event default - any click then stops 

    var clickTarget = $(this);

    var timeId = clickTarget.parent().attr("id");

    var inputEl = clickTarget.prev();

    var userInput = inputEl.val();

    localStorage.setItem(timeId, userInput);
    
    // if (userInput !== null){
    //   var userData = JSON.parse(localStorage.getItem(userInput));
    // }
  })

  var currentTime = dayjs().hour();

  for (var i = 9; i <= 17; i++) {
    var timeBlockEl = $("#hour-" + i);
    if (i < currentTime) {
      timeBlockEl.addClass("past");
    } else if (i > currentTime) {
      timeBlockEl.addClass("future");
    } else {
      timeBlockEl.addClass("present");
    }
  }

  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //


  var today = dayjs();
  $("#currentDay").text(today.format("dddd, MMMM D, YYYY"));
});