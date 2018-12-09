// ======  Want each of 24 calendar doors to open, on click, only if number matches today's date or earlier. To test other dates, set var todaysDate to a fixed number to pretend that's today's date. ====== //

// var date = new Date();
// var todaysDate = date.getDate();
var todaysDate = 24;

// =====  Get the modal popup box + content + close span ===== //

var modal = document.getElementById('modalPopup');

var modalDailyDate = document.querySelector('.dailyDate');
var modalDailyTitle = document.querySelector('.dailyTitle');
var modalDailyContent = document.querySelector('.dailyContent');
var modalDailyTime = document.querySelector('.dailyTime');
var modalDailyLocation = document.querySelector('.dailyLocation');
var modalDailyPrice = document.querySelector('.dailyPrice');
var modalDailyLink = document.querySelector('.dailyLink');
var spanClose = document.querySelector('.close');

// =====  Array of popup messages for each door  ===== //

var moreInfo = [
                  { date: "1st December",
                    title: "BEYOND Beach Hut Advent Calendar",
                    content: "For this popular community arts event, a different Hove beach hut opens its doors each evening to display a Nativity-themed art installation, reminding people of the roots of Advent.",
                    time: "1st to 24th December, 5.30 – 6.30pm.",
                    location: "See website for map and details",
                    price: "Free",
                    linkUrl: "http://www.beyondchurch.co.uk/",
                    linkText: "Visit website"
                  },

                  { date: "2nd December",
                    title: "Artists' Open Houses",
                    content: "Christmas Open Houses are back, with work from local artists, designers, and makers on sale in homes around the city. Pop along for mulled wine, mince pies and one-of-a-kind gifts.",
                    time: "Weekends until 9th December",
                    location: "See website for map and details",
                    price: "Free entry (until you start shopping...)",
                    linkUrl: "https://aoh.org.uk/",
                    linkText: "Visit website"
                  },

                  { date: "3rd December",
                    title: "Brighton & Hove Schools Concert",
                    content: "A choir of over 1200 voices from the city's Primary, Junior and Special Schools will come together to sing seasonal and specially written songs. The choir is joined by Brighton & Hove Youth Wind Orchestra and Brighton & Hove Youth Big Band.",
                    time: "7.00pm – 8.30pm",
                    location: "Brighton Centre",
                    price: "£4.50 — £13.00",
                    linkUrl: "https://brightoncentre.co.uk/whats-on/2018/brighton-hove-schools-concert/",
                    linkText: "Visit website"
                  },

                  { date: "4th December",
                    title: "Brighton & Hove Albion vs Crystal Palace",
                    content: "Cheer on the Seagulls!",
                    time: "Kick off 7.45pm",
                    location: "AMEX Stadium",
                    price: "Tickets from £30.00 (concessions available)",
                    linkUrl: "https://www.brightonandhovealbion.com/matches/fixtures/first-team/2018192/december/brighton-and-hove-albion-vs-crystal-palace-on-04-dec-18/",
                    linkText: "Visit website"
                  },

                  { date: "5th December",
                    title: "Lion & Lobster Christmas Market",
                    content: "A festive market to kick off the countdown to Christmas. Gifts, food, mulled wine, craft beer and artists all wrapped under one roof.",
                    time: "5.00pm - 11.00pm",
                    location: "Lion & Lobster, Sillwood Street",
                    price: "Free entry",
                    linkUrl: "https://www.thelionandlobster.co.uk/event/christmas-market-opening-party/",
                    linkText: "Visit website"
                  },

                  { date: "6th December",
                    title: "SPECTRUM",
                    content: "SPECTRUM is a Brighton Dome music project dedicated to nurturing and cultivating Brighton's vibrant music scene.<br>Winter special at Brighton Museum. Enjoy a range of unplugged performances in the exhibition rooms and listen to local acts in a way that you won't have experienced before.",
                    time: "8.00pm",
                    location: "Brighton Museum",
                    price: "£6.00 advance/ £8.00 on the door",
                    linkUrl: "https://brightondome.org/event/18868/spectrum/",
                    linkText: "Visit website"
                  },

                  { date: "7th December",
                    title: "New England House Artists' Open Studios",
                    content: "35+ artists and makers open the doors to their studios in New England House for 3 days. Enjoy an alternative to high street Christmas shopping and buy unique gifts directly from the makers.",
                    time: "Friday 7th December, 11.00am – 8.00pm<br>Saturday 8th December, 11.00am – 6.00pm<br>Sunday 9th December, 11.00am – 6.00pm",
                    location: "New England House, New England Street",
                    price: "Free entry",
                    linkUrl: "http://nehopenstudios.org.uk/",
                    linkText: "Visit website"
                  },

                  { date: "8th December",
                    title: "Santa Dash",
                    content: "A crowd of Santas running in aid of Rockinghorse children's charity.",
                    time: "10.30am",
                    location: "Hove Lawns near the Peace Statue",
                    price: "Free/ Make a donation",
                    linkUrl: "http://www.santadashbrighton.co.uk/",
                    linkText: "Visit website"
                  },

                  { date: "9th December",
                    title: "Christmas at the Royal Pavilion",
                    content: "Experience the Royal Pavilion transformed with festive decorations and glittering trees, and a replica of Queen Victoria's sleigh awaits you, where you can have Christmas photos!",
                    time: "Drop-in craft activities take place on 8th & 9th, 15th & 16th, 21st – 23rd December | 11.00am – 5.00pm (last admission 4.30pm)",
                    location: "Royal Pavilion",
                    price: "Included in Royal Pavilion admission (half price for Brighton & Hove residents with proof of address)",
                    linkUrl: "https://brightonmuseums.org.uk/royalpavilion/whattosee/christmas-at-the-royal-pavilion/",
                    linkText: "Visit website"
                  },

                  { date: "10th December",
                    title: "Blue Camel Club Christmas Party",
                    content: "THE club night for learning disabled people and their friends. If you like to party, dance to bands, watch films, hang out with friends and see performance, then the Blue Camel Club is for you! With live music and DJ sets.",
                    time: "7.00pm – 10.00pm",
                    location: "The Old Market",
                    price: "Price: £5.00 (£1.00 carers)",
                    linkUrl: "https://www.carousel.org.uk/events/blue-camel-club-8/",
                    linkText: "Visit Carousel website"
                  },

                  { date: "11th December",
                    title: "Grimm Tales",
                    content: "Folk classics Little Red Riding Hood, Cinderella, Hansel and Gretel, Snow White, Rumpelstiltskin and others from the Brothers Grimm are presented in a fresh adaptation by acclaimed poet Carol Ann Duffy.<br>A beguiling and vigorous stage dramatization which takes a journey into the bright, warped world of a child's imagination. A feast of storytelling magic suitable for children and adults alike.",
                    time: "Tuesday 11th – Saturday 15th at 7.45pm, plus Saturday 15th at 2.30pm",
                    location: "Brighton Little Theatre, Clarence Gardens",
                    price: "£10.00 adults/ £8.50 under 14s",
                    linkUrl: "https://www.brightonlittletheatre.com/grimmtales",
                    linkText: "Visit website"
                  },

                  { date: "12th December",
                    title: "Christmas Ghost Stories",
                    content: "Never mind the tinsel and the presents, the turkey and the mistletoe. Take time out to celebrate the festive season the Victorian way — gathered together for spooky stories and tales of terror!",
                    time: "7.30pm – 9.30pm",
                    location: "The Southern Belle, Waterloo Street",
                    price: "See listings",
                    linkUrl: "https://www.facebook.com/events/290706548450860/",
                    linkText: "Visit Facebook event"
                  },

                  { date: "13th December",
                    title: "The Snowman exhibition",
                    content: "Nothing says Christmas like The Snowman! To celebrate the 40th anniversary of Raymond Briggs' much loved classic picture book, discover the magic in this exhibition of the original illustrations.",
                    time: "Until 6th January 2019",
                    location: "Brighton Museum",
                    price: "Free with Brighton Museum admission (free to Brighton & Hove residents with proof of address)",
                    linkUrl: "https://brightonmuseums.org.uk/brighton/exhibitions-displays/the-snowman/",
                    linkText: "Visit website"
                  },

                  { date: "14th December",
                    title: "Hove for the Holidays: Evergreen",
                    content: "Resound and Rebelles presents two evenings of fresh and festive music in the wonderful acoustic of St Andrew's Church. Experience rare winter songs from around the world, lush evergreen favourites and musical gems.",
                    time: "Friday 14th and Saturday 15th, 7.30 pm",
                    location: "St Andrew's Church, Waterloo Street",
                    price: "£14.00",
                    linkUrl: "https://www.ticketsource.co.uk/whats-on/hove/st-andrews-church/hove-for-the-holidays-evergreen",
                    linkText: "Visit TicketSource website"
                  },

                  { date: "15th December",
                    title: "Festive events at Jubilee Library",
                    content: "Winter Wonderfest: Poet Kay Walton will be hosting this poetry event welcoming young poets from local primary schools to perform their own poetry.<br>Plus Hullabaloo Quire will be singing some beautifully wintery yuletide songs. Relax, switch off from the hustle and bustle and enjoy!",
                    time: "From 1.00pm",
                    location: "Jubilee Library",
                    price: "Free",
                    linkUrl: "https://www.brighton-hove.gov.uk/content/leisure-and-libraries/libraries/jubilee-library",
                    linkText: "Visit library's website"
                  },

                  { date: "16th December",
                    title: "Peter Pan",
                    content: "JM Barrie's classic Peter Pan comes to life this Christmas with a sprinkle of fairy dust and plenty of surprises. Peter and Tinkerbell invite you to the magical world of Neverland, a place where lost boys run riot, pirates are in fine voice, crocodiles go tick-tock, and the villain has a very shiny hook!<br>Suitable for all ages and is a perfect 'first-time' theatrical experience.",
                    time: "Until 31st December; see website for performance dates and times",
                    location: "Attenborough Centre for the Creative Arts, University of Sussex, Falmer",
                    price: "From £15.00",
                    linkUrl: "https://www.attenboroughcentre.com/index.php?p=events/1991/peter-pan/",
                    linkText: "Visit website"
                  },

                  { date: "17th December",
                    title: "Royal Pavilion Ice Rink",
                    content: "Ice skating at the Royal Pavilion Ice Rink, open until 13th January 2019 — one of the most beautiful spots to go ice skating!",
                    time: "Open 10.00am – 10.15pm<br>(Tip: Go weekdays before 4.15pm, it’s cheaper!)",
                    location: "Pavilion Gardens",
                    price: "From £10.00 (concessions available)",
                    linkUrl: "https://royalpavilionicerink.co.uk/",
                    linkText: "Visit website"
                  },

                  { date: "18th December",
                    title: "Lion & Lobster Gay Men's Chorus",
                    content: "Partnering up with Gay Men's Chorus who will sing their hearts out, as part of the pub's festive events season.",
                    time: "8.00pm",
                    location: "Lion & Lobster, Sillwood Street",
                    price: "Free entry (just the drinks to pay for!)",
                    linkUrl: "https://www.visitbrighton.com/whats-on/the-lion-and-lobster-gay-mens-chorus-p1657971",
                    linkText: "Visit website"
                  },

                  { date: "19th December",
                    title: "The Animals and Children Took to the Streets",
                    content: "Like a giant novel burst to life. Seamlessly synchronising live music, performance and storytelling with stunning films and animation, this is the wickedly twisted international hit tale from the multiple award-winning 1927, the company behind Golem and The Magic Flute. Highly recommended!",
                    time: "Until 12th January 2019; see website for performance dates and times",
                    location: "The Old Market",
                    price: "£18.00 – £29.50 (concessions available)",
                    linkUrl: "http://theoldmarket.com/shows/animals-children-took-streets/",
                    linkText: "Visit website"
                  },

                  { date: "20th December",
                    title: "Carols by Candlelight",
                    content: "A carol service for everyone, featuring NHS Community Choir Brighton and The Choir of St George's Church.<br>During the service there will be an opportunity to hang a star on the Christmas Tree in memory of a loved one.",
                    time: "From 5.45pm for drinks and mince pies, carol service starts 6.30pm",
                    location: "St George's Church, Kemp Town",
                    price: "Free/ Donation to Friends of Brighton & Hove Hospitals",
                    linkUrl: "https://www.brightonhospitalfriends.org.uk/support-us/fundraising/events/",
                    linkText: "Visit website"
                  },

                  { date: "21st December",
                    title: "Burning the Clocks",
                    content: "One of Brighton's best-loved public events, this year's theme is Remembrance. The lantern parade passes through the city centre, ending on the seafront with a dance performance and spectacular firework display.",
                    time: "Starts 6.30pm",
                    location: "Parade kicks off from New Road, ending on Madeira Drive",
                    price: "Free/ Make a donation",
                    linkUrl: "https://www.crowdfunder.co.uk/burning-the-clocks-2018",
                    linkText: "Visit Crowdfunder website"
                  },

                  { date: "22nd December",
                    title: "Retro Xmas at Funky Fish",
                    content: "The best tunes and Christmas hits of the 60s, 70s and 80s, including Funk, Soul, Motown, Rock'n'Roll, Rock Pop, Old School RnB, Jazzy, Disco, Britpop, Folk-pop and Northern Soul.",
                    time: "9.00pm – 2.00am",
                    location: "Funky Fish Club, New Madeira Hotel, Marine Parade",
                    price: "Free entry",
                    linkUrl: "http://www.funkyfishclub.co.uk/",
                    linkText: "Visit website"
                  },

                  { date: "23rd December",
                    title: "Thor's Tipi Bar",
                    content: "Take a break from your Christmas preparations and check out Thor's Viking-inspired tipi bar, with real log fire, sweet treats, hot cocoa, glühwein, ale, fizz and more. Children welcome. Skol!",
                    time: "Until 31st December, 12.00 to 10.00pm",
                    location: "Jubilee Square, Jubilee Street",
                    price: "Free entry",
                    linkUrl: "https://www.thorstipi.com/locations/winter/brighton",
                    linkText: "Visit website"
                  },

                  { date: "24th December | Christmas Eve!",
                    title: "Jack & The Beanstalk — Pantomime and Christmas Fayre",
                    content: "Christmas isn't Christmas without a panto! This new production of Jack & The Beanstalk promises a West End cast, lavish costumes, dazzling special effects... and Daisy the tap-dancing cow! Entrance to the Christmas Fayre is free for all panto ticket holders.<br><strong>Merry Christmas!</strong>",
                    time: "Until 29th December; see website for performance dates and times",
                    location: "Hilton Brighton Metropole",
                    price: "From £20.00",
                    linkUrl: "https://www.jackinbrighton.com/",
                    linkText: "Visit website"
                  },

               ];

// ==== no hover action if higher than today's date (add class 'no-hover') ===== //

function noHover() {

  var doorNumber = this.innerHTML;
  var calendarNum = parseInt(doorNumber, 10);

  if (calendarNum > todaysDate) {
    this.parentNode.classList.add("no-hover");
  }

}

// ===== door-front: hover + click events ===== //

var doorFronts = document.querySelectorAll(".front");

for (var i = 0; i < doorFronts.length; i++) {
  doorFronts[i].addEventListener("mouseover", noHover);
  doorFronts[i].addEventListener("click", clickFront);
}

// ===== door-back: click event ===== //

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

// ===== door-back: click opens the modal + displays corresponding content ===== //

function clickBack() {

  // find number of corresponding door-front (as back has no innerHTML of its own) //
  var calendarNum = this.previousElementSibling.innerHTML;
  // -1 from door-front to get correct message array index //
  var calendarNumIndex = calendarNum - 1;

  // change modal css to display it //
  modal.style.display = "block";

  // put message from array into modal content //

  modalDailyDate.innerHTML = moreInfo[calendarNumIndex].date;
  modalDailyTitle.innerHTML = moreInfo[calendarNumIndex].title;
  modalDailyContent.innerHTML = moreInfo[calendarNumIndex].content;
  modalDailyTime.innerHTML = moreInfo[calendarNumIndex].time;
  modalDailyLocation.innerHTML = moreInfo[calendarNumIndex].location;
  modalDailyPrice.innerHTML = moreInfo[calendarNumIndex].price;
  modalDailyLink.href = moreInfo[calendarNumIndex].linkUrl;
  modalDailyLink.innerHTML = moreInfo[calendarNumIndex].linkText;

  // can toggle door closed again IF want to: //
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
