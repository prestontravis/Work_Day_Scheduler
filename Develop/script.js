// Get the current time and format it to be displayed
var currentTime = dayjs().format("dddd, MMMM D, YYYY");
$("#currentDay").text(currentTime);

// Check the current time against each time block and add the appropriate class
function checkTime() {
  var currentHour = dayjs().hour();
  console.log(currentHour);
  $(".time-block").each(function () {
    var blockHour = parseInt($(this).attr("id"));
    if (blockHour < currentHour) {
      $(this).addClass("past");
    } else if (blockHour === currentHour) {
      $(this).addClass("present");
    } else {
      $(this).addClass("future");
    }
  });
}

// Call checkTime to update the colors of the time blocks
checkTime();

// Add event listener to the save button to store the user's input in local storage
$(".saveBtn").on("click", function () {
  var time = $(this).parent().attr("id");
  var description = $(this).siblings(".description").val();
  localStorage.setItem(time, description);
});
  
// Retrieve the user's input from local storage and display it in the appropriate time block
$("#hour-9 .description").val(localStorage.getItem("hour-9"));
$("#hour-10 .description").val(localStorage.getItem("hour-10"));
$("#hour-11 .description").val(localStorage.getItem("hour-11"));
$("#hour-12 .description").val(localStorage.getItem("hour-12"));
$("#hour-13 .description").val(localStorage.getItem("hour-13"));
$("#hour-14 .description").val(localStorage.getItem("hour-14"));
$("#hour-15 .description").val(localStorage.getItem("hour-15"));
$("#hour-16 .description").val(localStorage.getItem("hour-16"));
$("#hour-17 .description").val(localStorage.getItem("hour-17"));
