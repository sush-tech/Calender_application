setInterval(scheduleTracker, 1000); 
function scheduleTracker() {
  let today = dayjs();
  $("#currentDay").text(today.format("dddd, MMMM D YYYY, h:mm:ss a")); //current date time format

  var currentHour = today.hour(); 
  // for the colour variations for timeblock
  $(".time-block").each(function () {
    var savedHour = parseInt($(this).attr("id").split("hour-")[1]);
    console.log( savedHour, currentHour)

    //changes the past present future according to the current time
    if (savedHour < currentHour) {
        $(this).addClass("past");
        $(this).removeClass("future present");
    }
    else if (savedHour === currentHour) {
        $(this).addClass("present");
        $(this).removeClass("future past");
    }
    else {
        $(this).addClass("future");
        $(this).removeClass("past present");
    }
})
scheduleTracker();
}
$('.saveBtn').click(function(){
  let textArea = $(this).siblings(".description").val();
  let currentDay =  $(this).parent().attr("id");

  localStorage.setItem(currentDay, textArea);
})
$("#hour-9 .description").val(localStorage.getItem("hour-9"));
$("#hour-10 .description").val(localStorage.getItem("hour-10"));
$("#hour-11 .description").val(localStorage.getItem("hour-11"));
$("#hour-12 .description").val(localStorage.getItem("hour-12"));
$("#hour-13 .description").val(localStorage.getItem("hour-13"));
$("#hour-14 .description").val(localStorage.getItem("hour-14"));
$("#hour-15 .description").val(localStorage.getItem("hour-15"));
$("#hour-16 .description").val(localStorage.getItem("hour-16"));
$("#hour-17 .description").val(localStorage.getItem("hour-17"));


// instead of dayjs() we can use moment(), more fast and accurate results








