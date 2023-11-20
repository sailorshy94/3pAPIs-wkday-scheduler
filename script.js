$(function () {
  var timeBlockContainer = $(".container-lg");

  timeBlockContainer.on("click", ".saveBtn", function (event) {
    // there should be a way to do this to only grab textareas with text inside???
    event.preventDefault(); //event default - any click then stops 

    var clickTarget = $(this);

    var timeBlockEl = clickTarget.parent();

    var timeId = clickTarget.parent().attr("id");

    console.log(timeId); //returns the string hour-#, how to use for local storage?

    var inputEl = clickTarget.prev();

    var userInput = inputEl.val();

    console.log(userInput);

    // for local storage, id name (hour-#) is the key, userinput = value for (key, val) pair
    localStorage.setItem(timeId, userInput);

  })

  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?

  // ????
  // .addClass("past");
  // .addClass("present");
  // .addClass("future"); 

  // function compare time () {
  // if (currentTime !== valueofcurrenttime) {
  //   ().addClass ("past");
  // }

  // for loop

  // 

  // how to compare to current, past, future??

  var currentTime = dayjs().hour();

  console.log(currentTime);

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

  // if it is past want to add class .past to element, which will then style it. but how do I phrase that?
  //   if () {
  //   }
  // };       
  // 
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  var today = dayjs();
  $("#currentDay").text(today.format("dddd, MMMM D, YYYY"));

});
