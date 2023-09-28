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


const type = 'stretching';
const apiKey = 'q68lLZCB0j+666FyU3BXkw==FVWU07FF1UiNBUGP';

fetch(`https://api.api-ninjas.com/v1/exercises?type=${type}`, {
    method: 'GET',
    headers: {
        'X-Api-Key': apiKey,
        'Content-Type': 'application/json',
    },
})
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
    })
    .then(result => {
        let stretch = [];
        while (stretch.length < 3){
          Stretch = Math.floor(Math.random() * 10)
          if (!stretch.includes(Stretch)){
            stretch.push(Stretch)
          }
        }
        document.querySelector('#stretches').innerHTML += result[stretch[0]].instructions;
        document.querySelector('#stretches').innerHTML += result[stretch[1]].instructions;
        document.querySelector('#stretches').innerHTML += result[stretch[2]].instructions;

    })
    .catch(error => {
        console.error('Error:', error.message);
    });


// let stretch = [];
//         while (stretch.length < 3){
//           Stretch = Math.floor(Math.random() * 10)
//           if (!stretch.includes(Stretch)){
//             stretch.push(Stretch)
//           }
//         }
//         document.querySelector('#stretches').innerHTML += result[stretch[0]].instructions;
//         document.querySelector('#stretches').innerHTML += result[stretch[1]].instructions;
//         document.querySelector('#stretches').innerHTML += result[stretch[2]].instructions;
myFunction()

// var type = 'stretching'
// $.ajax({
//     method: 'GET',
//     url: 'https://api.api-ninjas.com/v1/exercises?type=' + type,
//     headers: { 'X-Api-Key': 'q68lLZCB0j+666FyU3BXkw==FVWU07FF1UiNBUGP'},
//     contentType: 'application/json',
//     success: function(result) {
//         document.querySelector('stretches').innerText(result)
//         console.log(result);
//     },
//     error: function ajaxError(jqXHR) {
//         console.error('Error: ', jqXHR.responseText);
//     }
// });
