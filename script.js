var wakeuptime = 7;
var noon = 12;
var lunchtime = 12;
var naptime = lunchtime + 2;
var partytime;
var evening = 18;

//Getting it to show the current time on the page
var showCurrentTime = function()
{

    // display the string on the webpage
    var clock = document.getElementById('clock');       

    var currentTime = new Date();
    
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();
    var meridian = "AM";
    
    //set hours
    
    if (hours >= noon)
    {
        meridian = "PM";
    }

    if (hours > noon)
    {
        hours = hours - 12;
    }

    //set minutes
    if (minutes < 10)
    {
        minutes = "0" + minutes;
    }

    //set seconds
    if (seconds < 10)
    {
        seconds = "0" + seconds;
    }

    // put together the string that displays the time
    var clockTime = hours + ':' + minutes + ':' + seconds + " " + meridian + "!";
   clock.innerText = clockTime;
    
              
};

// Getting the clock to increment on its own and change out messages and pictures
var updateClock = function() 
{
  var time = new Date().getHours();
  var messageText;
  var image = "https://images.pexels.com/photos/23180/pexels-photo.jpg";

  var timeEventJS = document.getElementById("timeEvent");       
  var lolrabbitImagejs = document.getElementById('lolrabbitImage');
  
  if (time == partytime)
  {
    image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/08/partyTime.jpg";
    messageText = "Let's party!";
  }
  else if (time == wakeuptime)
  {
    image = "https://images.pexels.com/photos/23180/pexels-photo.jpg?cs=srgb&dl=pexels-gerd-altmann-23180.jpg&fm=jpg";    
    messageText = "Wake up!";
  }
  else if (time == lunchtime)
  {
    image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat2.jpg";
    messageText = "Let's have some lunch!";
  }
  else if (time == naptime)
  {
    image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat3.jpg";
    messageText = "Sleep tight!";
  }
  else if (time < noon)
  {
    image = "https://www.pexels.com/photo/man-tied-up-using-tape-with-head-in-carton-box-4506211/";
    messageText = "Good morning!";
  }
  else if (time >= evening)
  {
    image = "https://upload.wikimedia.org/wikipedia/commons/8/8c/Cat_sleep.jpg";
    messageText = "Good evening!";
  }
  else
  {
    image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/08/normalTime.jpg";
    messageText = "Good afternoon!";
  }

  console.log(messageText); 
  timeEventJS.innerText = messageText;
  lolrabbitImage.src = image;
  
  showCurrentTime();
};
updateClock();

// Getting the clock to increment once a second
var oneSecond = 1000;
setInterval( updateClock, oneSecond);


// Getting the Party Time Button To Work
var timeWarpButton = document.getElementById("timeWarpButton");

var partyEvent = function()
{
    if (partytime < 0) 
    {
        partytime = new Date().getHours();
        timeWarpButton.innerText = "Party Over!";
        timeWarpButton.style.backgroundColor = "#0A8DAB";
    }
    else
    {
        partytime = -1;
        timeWarpButton.innerText = "Party Time!";
        timeWarpButton.style.backgroundColor = "#222";
    }
};  

timeWarpButton.addEventListener("click", partyEvent);
partyEvent(); 

  
// Activates Wake-Up selector
var wakeUpTimeSelector =  document.getElementById("wakeUpTimeSelector");

var wakeUpEvent = function()
{
    wakeuptime = wakeUpTimeSelector.value;
};

wakeUpTimeSelector.addEventListener("change", wakeUpEvent);


// Activates Lunch selector
var lunchTimeSelector =  document.getElementById("lunchTimeSelector");

var lunchEvent = function()
{
    lunchtime = lunchTimeSelector.value;
};

lunchTimeSelector.addEventListener("change", lunchEvent);


// Activates Nap-Time selector
var napTimeSelector =  document.getElementById("napTimeSelector");

var napEvent = function()
{
    naptime = napTimeSelector.value;
};

napTimeSelector.addEventListener("change", napEvent);