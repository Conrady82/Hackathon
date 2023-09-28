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

function invokeBlur(){
    //html blur
}
const blurPageEveryHour = setTimeout(invokeBlur,3600000)

let timeoutID;

function setOutput(outputContent) {
  document.querySelector("#output").textContent = outputContent;
}

function delayedMessage() {
  setOutput("");
  timeoutID = setTimeout(setOutput, 2 * 1000, "That was really slow!");
}

function clearMessage() {
  clearTimeout(timeoutID);
}

let mins=.1;
let secs=mins*60;
function countdown() {
    setTimeout('Decrement()',60);
}
function Decrement() {
    if(document.getElementById) {
        minutes=document.getElementById("minutes");            seconds=document.getElementById("seconds");
        if(seconds<59) {
            seconds.value=secs;
        }
        else {
            minutes.value=getminutes();
            seconds.value=getseconds();
        }
        if(mins<1) {
            minutes.style.color="red";
            seconds.style.color="red";
            }
        if(mins<0) {
            alert('time up');
            minutes.value=0;
            seconds.value=0;
            }
        else {
            secs--;
            setTimeout('Decrement()',1000);
        }
    }
}
 
function getminutes() {
    mins=Math.floor(secs/60);
    return mins;
}
 
function getseconds() {
    return secs-Math.round(mins*60);
}