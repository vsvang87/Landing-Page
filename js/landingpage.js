//Grabbing all the elements
const time = document.getElementById("time");
const greeting = document.getElementById("greeting");
const name = document.getElementById("name");
const focus = document.getElementById("focus");

//Create a function to show the time
function showTime() {
  let today = new Date(),
    hour = today.getHours(),
    min = today.getMinutes(),
    sec = today.getSeconds();

  //set AM or PM
  const amPm = hour >= 12 ? "PM" : "AM";

  //12hr Format
  hour = hour % 12 || 12;
  //ouput time
  time.innerHTML = `${hour} <span>:</span> ${addZero(
    min
  )} <span>:</span> ${addZero(sec)}`;

  setTimeout(showTime, 1000);
}

//add zeros to single digit
function addZero(n) {
  return (parseInt(n, 10) < 10 ? "0" : "") + n;
}

//function to set background and greet according to time
function setBgGreet() {
    let today = new Date(),
    hour = today.getHours(),


    //if statement
    if(hour < 12) {
        //moring
        document.body.style.backgroundImage = 'url(/images/morning.jpg)';
    }else if(hour < 18) {
        //afternoon
    }else {
        //night
    }
}

//call the function
showTime();
