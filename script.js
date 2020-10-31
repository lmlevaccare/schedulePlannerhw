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

// body of calendar
var colorTime=document.getElementById("#i")

var presentT =moment().format('h:mm:ss a');
console.log(presentT)

var futureT=moment().endOf('day').fromNow();    
console.log(futureT)

var pastT = moment().subtract(1, 'hour').calendar(); 
console.log(pastT)

var yellow = $('#pT');
var red = $('#pasT');
var green = $('#fT');

var calInpt = document.getElementById(".form-control");
var saveBtn = document.getElementById("#saveBtn");
var msgDiv = document.querySelector("#msg");



// presentT = text(moment().format('h:mm:ss a'));


function displayMessage(type, message) {
  msgDiv.textContent = message;
  msgDiv.setAttribute("class", type);
}

$(saveBtn).on("click", function() {
  preventDefault();

  var user = {
    first: msgDiv.value.trim(),
      
  };

  console.log(user);
  
  localStorage.setItem("user", JSON.stringify(user));

  var user = JSON.parse(localStorage.getItem("user"));
  
  return user;
});