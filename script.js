$(function () {
//  How might the id be
  // useful when saving the description in local storage?
  var timeBlockContainer = $(".container-lg");

  timeBlockContainer.on("click", ".saveBtn", function (event) {
    // there should be a way to do this to only grab textareas with text inside???
    event.preventDefault(); //event default - any click then stops 

    var clickTarget = $(this);

    var timeBlockEl = clickTarget.parent();

    var inputEl = clickTarget.prev();

    var userInput = inputEl.val();

    console.log(userInput);

    // for local storage, id name (hour-#) is the key, use .text?

    // localStorage.setItem();
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

  var currentTime = dayjs().hour();

  console.log (currentTime);
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
  $("#currentDay").text(today.format("dddd, MMMM D, YYYY"));

});
