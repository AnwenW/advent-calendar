// ======  Want each of 24 calendar doors to open, on click, only if number matches today's date or earlier. To test, when date is after 23rd of the month and all doors will be openable, set var todaysDate to a smaller fixed number instead to pretend date is e.g. 10th ====== //

var todaysDate = new Date();
// console.log(todaysDate.getDate());
// var todaysDate = 10;

// =====  Get the modal popup box + content + close span ===== //

var modal = document.getElementById('modalPopup');
var modalDailyContent = document.querySelector('.dailyContent');
var spanClose = document.querySelector('.close');

// =====  Array of popup messages for each door  ===== //

var moreInfo = [
                  { heading: 'December 1st',
                    content: 'Brighton Open Houses',
                    link: 'https://aoh.org.uk/'
                  },
                  '<em>Brighton</em><br>Message Day #2',
                  'Message Day #3',
                  'Message Day #4',
                  'Message Day #5',
                  'Message Day #6',
                  'Message Day #7',
                  'Message Day #8',
                  'Message Day #9',
                  'Message Day #10',
                  'Message Day #11',
                  'Message Day #12',
                  'Message Day #13',
                  'Message Day #14',
                  'Message Day #15',
                  'Message Day #16',
                  'Message Day #17',
                  'Message Day #18',
                  'Message Day #19',
                  'Message Day #20',
                  'Message Day #21',
                  'Message Day #22',
                  'Message Day #23',
                  'Message Day #24'
               ];

// console.log(moreInfo[0].content);

// ==== no hover action if higher than today's date (add class 'no-hover') ===== //

function noHover() {

  var calendarNum = this.innerHTML;

  if (calendarNum > todaysDate) {
    this.parentNode.classList.add("no-hover");
  }

}

// ===== door front: hover + click events ===== //

var doorFronts = document.querySelectorAll(".front");

for (var i = 0; i < doorFronts.length; i++) {
  doorFronts[i].addEventListener("mouseover", noHover);
  doorFronts[i].addEventListener("click", clickFront);
}

// ===== door back: click event ===== //

var doorBacks = document.querySelectorAll(".back");

for (var i = 0; i < doorBacks.length; i++) {
  doorBacks[i].addEventListener("click", clickBack);
}

// ==== door-front: click toggles class 'open' ===== //

function clickFront() {

  var calendarNum = this.innerHTML;

  if (calendarNum <= todaysDate) {
    // console.log(calendarNum);
   this.parentNode.classList.toggle("open");
  }

};

// ===== door-back click opens the modal + displays corresponding content ===== //

function clickBack() {

  // find number of corresponding door-front (back has no innerHTML)
  var calendarNum = this.previousElementSibling.innerHTML;
  // -1 from door-front to get correct message array index
  var calendarNumIndex = calendarNum - 1;

  // change modal css to display it
  modal.style.display = "block";

  // put message from array into modal content
  modalDailyContent.innerHTML = moreInfo[calendarNumIndex];

  // toggle door closed again if want to:
  // this.parentNode.classList.toggle("open");

};


// ===== click span (x) to close modal ===== //

spanClose.onclick = function() {
  modal.style.display = "none";
}

// ===== clicks anywhere outside modal to close it ===== //

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
