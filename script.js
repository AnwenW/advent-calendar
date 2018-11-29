// var todaysDate = new Date();
// console.log(todaysDate.getDate());
var todaysDate = 10;


var doorFronts = document.querySelectorAll(".front");

for (var i = 0; i < doorFronts.length; i++) {
  doorFronts[i].addEventListener("mouseover", noHover);
  doorFronts[i].addEventListener("click", clickFunction);
}

var doorBacks = document.querySelectorAll(".back");

for (var i = 0; i < doorBacks.length; i++) {
  doorBacks[i].addEventListener("click", clickFunction);
}

// need to have this outside the click function, hover only??
function noHover() {

  var calendarNum = this.innerHTML;

  if (calendarNum > todaysDate) {
    this.parentNode.classList.add("no-hover");
  }

}
////

function clickFunction() {

  var calendarNum = this.innerHTML;

  if (calendarNum <= todaysDate) {
    // console.log(calendarNum);
   this.parentNode.classList.toggle("open");
  }

  // if (this.parentNode.classList.contains("open")) {
  //   console.log("open added");
  // } else {
  //   console.log("open removed");
  // }

};
