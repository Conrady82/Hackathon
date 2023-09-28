// Chrome extenstion that has a timer to force user to stretch
// Once the timer has reached its set time to invoke, screen will blur via html
// once screen is blurred, settime to remove blur for 5 min
// timer needs to start when an event happens (event listener), initialize at page load
// ------------create a cache variable to store the initialized time
// set timeout for 1 hour to then inovoke blur
// -------create recursive function that checks the time of cache and if the ---------time matches again,  invoke screen blur
// create pop up with count down that shows how long of a duration to stretch for
// use phils head in alert box
// once time has passed, allow box to be closed

// function invokeBlur(){
//     //html blur
// }
// const blurPageEveryHour = setTimeout(invokeBlur,3600000)






// function setOutput(outputContent) {
//   document.querySelector("#output").textContent = outputContent;
// }

// function delayedMessage() {
//   setOutput("");
//   timeoutID = setTimeout(setOutput, 2 * 1000, "That was really slow!");
// }

// function clearMessage() {
//   clearTimeout(timeoutID);
// }

let startingMinutes = 5
let time = startingMinutes * 60

let countdownEl = document.getElementById("countdown")

setInterval(() => {updateCountdown()}, 1000)



function updateCountdown(){
    let minutes = Math.floor(time / 60);
    let seconds = time % 60;

    seconds = seconds < 10 ? '0' + seconds : seconds;

    countdownEl.innerHTML = `${minutes} : ${seconds}`;
    time--;
}

function myFunction(){
    alert("Time For Stretchies!!!");
}
myFunction()
document.addEventListener('DOMContentLoaded', function(){
    // document.querySelector('#start').addEventListener('click', updateCountdown());
    document.querySelector('#video').addEventListener('click', myFunction());
  });
