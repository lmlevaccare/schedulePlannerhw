// header
var m = moment()

console.log(m.format("MMMM Do YYYY"));
var m2 = (m.format("MMMM Do YYYY"));

console.log(m2)

var m2 = document.getElementById("#curDate");

curDate.append(m.format("MMMM Do YYYY"));

var timeBlock = (m.format(" h m A"));
var timeBlock = document.getElementById("#time");

time.append(m.format(" h:mm A")); 
console.log(timeBlock)

// body of calendar timeblock
var colorTime=document.getElementById("#i")

var presentT =moment().format('h:mm:ss a');
console.log(presentT)

var futureT=moment().endOf('day').fromNow();    
console.log(futureT)

var pastT = moment().subtract(1, 'hour').calendar(); 
console.log(pastT)

var yellow = $(".present");
var red = $('.past');
var green = $('.future');





   function mySave() {
        var myContent = document.getElementById("myTextarea").value;
        localStorage.setItem("myContent", myContent);
      }
      function myLoad() {
        var myContent = localStorage.getItem("myContent");
        document.getElementById("myTextarea").value = myContent;
      }



  




    














// if (key && value) {
//     localStorage.setItem("text", "storage");
//     location.reload();
// }
//     })

// for(let i=0; i<localStorage.length; i++) {
//     const key = localStorage.key(i);
//     const value = localStorage.getItem(key);
//     isOutput.innerHTML += '${key}: ${value}<br />';
    

// }

