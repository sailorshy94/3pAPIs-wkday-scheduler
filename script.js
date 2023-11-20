$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?

  var timeBlockConEl = $(".container-lg");

  timeBlockConEl.children().on("click", ".saveBtn", function () {
    // there should be a way to do this to only grab textareas with text inside???
    $(".description").each(function () {
      console.log($(this).val());
      // this works but each time you save a value it shows up again in console log, how to prevent? Should I remove each? Is there a replacement?
      var userInput = $(this).val();
      // console.log(userInput);
      // need to be able to set the key as hour #, how to do that? Use the id but how to reference it here?
      //   localStorage.setItem("hour-", JSON.stringify(userInput));
      // })
    });


    // TODO: Add code to apply the past, present, or future class to each time
    // block by comparing the id to the current hour. HINTS: How can the id
    // attribute of each time-block be used to conditionally add or remove the
    // past, present, and future classes? How can Day.js be used to get the
    // current hour in 24-hour time?
    var currentTime = dayjs("hh:mm:ss");
    // var times = [
    //   "hour-9",
    //   "hour-10",
    //   "hour-11",
    //   "hour-12",
    //   "hour-1",
    //   "hour-2",
    //   "hour-3",
    //   "hour-4",
    //   "hour-5",
    // ]

    // function timePast () {
      // var i = 0;
      // for (i = 0; i < times.length; i++) {
        
      // }    

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
    $("#currentDay").text(today.format("dddd D, YYYY"));
  }
  )
});
