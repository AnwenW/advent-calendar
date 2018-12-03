// ======  Want each of 24 calendar doors to open, on click, only if number matches today's date or earlier. To test, when date is after 23rd of the month and all doors will be openable, set var todaysDate to a smaller fixed number instead to pretend date is e.g. 5th ====== //

// var date = new Date();
// var todaysDate = date.getDate();
var todaysDate = 24;

// =====  Get the modal popup box + content + close span ===== //

var modal = document.getElementById('modalPopup');
var modalDailyContent = document.querySelector('.dailyContent');
var spanClose = document.querySelector('.close');

// =====  Array of popup messages for each door  ===== //

var moreInfo = [
                  '<h3>1st December</h3><h2>BEYOND Beach Hut Advent Calendar</h2><p>For this popular community arts event, a different Hove beach hut opens its doors to display a Nativity-themed art installation, reminding people of the roots of Advent.</p><p>1st – 24th December<br>5.30pm – 6.30pm.</p><p>For map and details of which hut will be open each evening, visit: <a href="http://www.beyondchurch.co.uk/" target="_blank">www.beyondchurch.co.uk/</a></p><p>Price: Free</p>',

                  '<h3>2nd December</h3><h2>Artists’ Open Houses</h2><p>Christmas Open Houses are back, with work from local artists, designers, and makers on sale in homes around the city. Pop along for mulled wine, mince pies and one-of-a-kind gifts.</p><p>Weekends until 9th December</p><p>Visit <a href="https://aoh.org.uk/" target="_blank">aoh.org.uk</a> for more details</p><p>Price: Free entry (until you start shopping...)</p>',

                  '<h3>3rd December</h3><h2>Brighton & Hove Schools Concert</h2><p>A massed choir of over 1200 voices from Primary, Junior and Special Schools will come together to sing seasonal and specially written songs. The choir is joined by Brighton & Hove Youth Wind Orchestra and Brighton & Hove Youth Big Band.</p><p>7.00pm – 8.30pm<br>Brighton Centre</p><p><a href="https://brightoncentre.co.uk/whats-on/2018/brighton-hove-schools-concert/" target="_blank">brightoncentre.co.uk</a></p><p>Price: £4.50 — £13.00</p>',

                  '<h3>4th December</h3><h2>Brighton & Hove Albion vs Crystal Palace</h2><p>Cheer on the Seagulls!</p><p>Kick off 7.45pm<br>AMEX Stadium</p><p><a href="https://www.brightonandhovealbion.com/matches/fixtures/first-team/2018192/december/brighton-and-hove-albion-vs-crystal-palace-on-04-dec-18/" target="_blank">brightonandhovealbion.com</a></p><p>Price: Tickets from £30.00 (concessions available)</p>',

                  '<h3>5th December</h3><h2>The Lion & Lobster Christmas Market Opening Party</h2><p>A festive market to kick off the countdown to Christmas. Gifts, food, mulled wine and cider, craft beer and artists all wrapped under one roof.</p><p>5.00pm - 11.00pm</p><p><a href="https://www.thelionandlobster.co.uk/event/christmas-market-opening-party/" target="_blank">thelionandlobster.co.uk</a></p><p>Price: free entry</p>',

                  '<h3>6th December</h3><h2>SPECTRUM (live music)</h2><p>SPECTRUM is a Brighton Dome music project dedicated to nurturing and cultivating Brighton’s vibrant music scene.</p><p>Winter special at Brighton Museum. Enjoy a range of unplugged performances in the exhibition rooms and listen to local acts in a way that you won’t have experienced before.</p><p>8.00pm<br>Brighton Museum</p><p><a href="https://brightondome.org/event/18868/spectrum/" target="_blank">brightondome.org</a></p><p>Price: £6.00 advance/ £8.00 on the door</p>',

                  '<h3>7th December</h3><h2>New England House Artists’ Open Studios</h2><p>35+ artists and makers open the doors to their studios in New England House for 3 days. Enjoy an alternative to high street Christmas shopping and buy unique gifts directly from the makers.</p><p>Friday 7th December, 11.00am – 8.00pm<br>Saturday 8th December, 11.00am – 6.00pm<br>Sunday 9th December, 11.00am – 6.00pm</p><p><a href="http://nehopenstudios.org.uk/" target="_blank">nehopenstudios.org.uk</a></p><p>Price: Free entry</p>',

                  '<h3>8th December</h3><h2>Santa Dash</h2><p>A crowd of Santas running in aid of Rockinghorse children’s charity.</p><p>10.30am, Hove Lawns near the Peace Statue</p><p><a href="http://www.santadashbrighton.co.uk/" target="_blank">www.santadashbrighton.co.uk</a></p><p>Price: make a donation</p><hr><h2>Creative Differences</h2><p>A brand new creative Christmas market hosting illustrators to record labels and everything in-between, plus workshops, DJs, Christmas decorations and plenty of mulled wine to go around!</p><p>11.00am – 4.00pm<br>Green Door Store</p><p><a href="https://creative-differences.co.uk/" target="_blank">creative-differences.co.uk</a></p><p>Price: £2.00 entry</p>',

                  '<h3>9th December</h3><h2>Christmas at the Royal Pavilion</h2><p>Experience the Royal Pavilion transformed with festive decorations and glittering trees, and a replica of Queen Victoria’s sleigh awaits you, where you can have Christmas photos!</p><p>Drop-in craft activities take place on 8th & 9th, 15th & 16th, 21st – 23rd December<br>11.00am – 5.00pm (last admission 4.30pm).</p><p><a href="https://brightonmuseums.org.uk/royalpavilion/whattosee/christmas-at-the-royal-pavilion/" target="_blank">brightonmuseums.org.uk</a></p><p>Price: Free with Royal Pavilion admission (half price for Brighton & Hove residents with proof of address)</p>',

                  '<h3>10th December</h3><h2>Blue Camel Club Christmas Party</h2><p>THE club night for learning disabled people and their friends. If you like to party, dance to bands, watch films, hang out with friends, see performance, then the Blue Camel Club is for you! With live music and DJ sets.</p><p>7.00pm – 10.00pm<br>The Old Market</p><p><a href="https://www.carousel.org.uk/events/blue-camel-club-8/" target="_blank">www.carousel.org.uk</a></p><p>Price: £5.00 (£1.00 carers)</p>',

                  '<h3>11th December</h3><h2>Royal Pavilion Ice Rink</h2><p>Ice skating at the Royal Pavilion Ice Rink, open until 13th January 2019 — one of the most beautiful spots to go ice skating!</p><p>10.00am – 10.15pm<br>(Tip: Go weekdays before 4.15pm, it’s cheaper!)</p><p><a href="https://royalpavilionicerink.co.uk/" target="_blank">royalpavilionicerink.co.uk</a></p><p>Price: From £10.00 (concessions available)</p>',

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

  var doorNumber = this.innerHTML;
  var calendarNum = parseInt(doorNumber, 10);

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

  var numberClicked = this.innerHTML;
  var calendarNum = parseInt(numberClicked, 10);
  // console.log(numberClicked);
  // console.log(calendarNum);

  if (calendarNum <= todaysDate) {
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
