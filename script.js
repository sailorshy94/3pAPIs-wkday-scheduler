$(function () {
  var timeBlockContainer = $(".container-lg");

  timeBlockContainer.on("click", ".saveBtn", function (event) {
    event.preventDefault(); //event default - any click then stops 

    var clickTarget = $(this);

    var timeBlockEl = clickTarget.parent();

    var timeId = clickTarget.parent().attr("id");

    // console.log(timeId); //returns the string hour-#, how to use for local storage?

    var inputEl = clickTarget.prev();

    var userInput = inputEl.val();

    // console.log(userInput);

    // for local storage, id name (hour-#) is the key, userinput = value for (key, val) pair
    localStorage.setItem(timeId, userInput);
  })

  var currentTime = dayjs().hour();

  for (i = 9; i <= 17; i++) {
    var timeBlockEl = $("#hour" + i);
    if (i > currentTime) {
      timeBlockEl.addClass("past");
    } else {
      if (i < currentTime) {
        timeBlockEl.addClass("future");
      } else {
        if (i === currentTime) {
          timeBlockEl.addClass("present");
        }
      }
    }
  }

  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  var today = dayjs();
  $("#currentDay").text(today.format("dddd, MMMM D, YYYY"));

});
