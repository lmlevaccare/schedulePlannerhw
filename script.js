
// header
var m = moment()

console.log(m.format("MMMM Do YYYY"));
// var m2 = (m.format("MMMM Do YYYY"));

var cDate = document.getElementById("curDate");
    
cDate.append(m.format("MMMM Do YYYY"));

var curTim = document.getElementById("time");

curTim.append(m.format(" h:mm A")); 


// TIMEBLOCK COLOR CHANGE

var timeBlck = document.getElementsByClassName("time-block");
 

$.each(timeBlck, function () {
    var blcknumb = parseInt($(this).attr("data-time"));
    console.log(blcknumb);
    console.log(moment().hours());


    if (blcknumb < moment().hours()) {
        $(this).addClass("past");


    } else if (blcknumb > moment().hours()) {
        $(this).addClass("future");
      
    }

    else if (blcknumb === moment().hours()) 
        $(this).addClass("present");
      
    });

    // LOCAL STORAGE EVENTS
 
        function mySave() {
        var myContent = document.getElementById("myTextarea").value;
        localStorage.setItem("myContent", myContent);
      }
      function myLoad() {
        var myContent = localStorage.getItem("myContent");
        document.getElementById("myTextarea").value = myContent;
      }


