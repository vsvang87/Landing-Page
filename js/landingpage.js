//Grabbing all the elements
const time = document.getElementById("time");
const greeting = document.getElementById("greeting");
const myName = document.getElementById("name");
const focus = document.getElementById("focus");

//Create a function to show the time
function showTime() {
  let today = new Date(),
    hour = today.getHours(),
    min = today.getMinutes(),
    sec = today.getSeconds();

  //set AM or PM
  const amPm = hour < 12 ? "AM" : "PM";

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
function setBgGreeting() {
  let rightNow = new Date();
  hour = rightNow.getHours();

  if (rightNow < 12) {
    //morning bg
    document.body.style.backgroundImage = "url('/images/morning.jpg')";
    greeting.textContent = "Good Morning";
  } else if (rightNow < 18) {
    //afternoon bg
    document.body.style.backgroundImage = "url('/images/afternoon.jpg')";
    greeting.textContent = "Good Afternoon";
  } else {
    //night bg
    document.body.style.backgroundImage = "url('/images/night.jpg')";
    greeting.textContent = "Good Night";
    time.style.color = "white";
    greeting.style.color = "white";
  }
}

//get name
function getName() {
  if (localStorage.getItem("name") === null) {
    myName.textContent = "[Enter Name]";
  } else {
    myName.textContent = localStorage.getItem("name");
  }
}
//get focus
function getFocus() {
  if (localStorage.getItem("focus") === null) {
    focus.textContent = "[Enter Focus]";
  } else {
    focus.textContent = localStorage.getItem("focus");
  }
}
//set name
function setName(e) {
  if (e.type === "keypress") {
    //make sure enter is press
    if (e.which == 13 || e.keyCode == 13) {
      localStorage.setItem("name", e.target.innerHTML);
      myName.blur();
    }
  } else {
    localStorage.setItem("name", e.target.innerHTML);
  }
}
//set focus
function setFocus(e) {
  if (e.type === "keypress") {
    //make sure enter is press
    if (e.which == 13 || e.keyCode == 13) {
      localStorage.setItem("name", e.target.innerHTML);
      myName.blur();
    }
  } else {
    localStorage.setItem("name", e.target.innerHTML);
  }
}

//event listener
myName.addEventListener("keypress", setName);
myName.addEventListener("blur", setName);
focus.addEventListener("keypress", setFocus);
focus.addEventListener("blur", setFocus);

//call the function
showTime();
setBgGreeting();
getName();
getFocus();
