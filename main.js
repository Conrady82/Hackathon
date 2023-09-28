
let startingMinutes = 5
let time = startingMinutes * 60

let countdownEl = document.getElementById("countdown")

setInterval(() => {updateCountdown()}, 1000)

function updateCountdown(){
    let minutes = Math.floor(time / 60);
    let seconds = time % 60;

    if (minutes < 1 && seconds < 1) endStretch()

    seconds = seconds < 10 ? '0' + seconds : seconds;

    countdownEl.innerHTML = `${minutes} : ${seconds}`;
    time--;
}

function myFunction(){
    alert("Time For Stretchies!!!");
}

function endStretch(){
    alerty("GET BACK TO CODING AND SITTING ALL FUNNY")
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
          selected = Math.floor(Math.random() * 10)
          if (!stretch.includes(selected)){
            stretch.push(selected)
          }
        }
        for (let i = 0; i < 3; i++){
          const stretchContainer = document.createElement('div')
          stretchContainer.setAttribute('class', 'stretchContainer')

          const stret = document.createElement('h2');
          stret.innerText = result[stretch[i]].name;

          const instruc = document.createElement('span')
          instruc.innerText = result[stretch[i]].instructions;

          stretchContainer.appendChild(stret)
          stretchContainer.appendChild(instruc)

          const container = document.querySelector('#stretches')
          container.appendChild(stretchContainer)

        }
    })
    .catch(error => {
        console.error('Error:', error.message);
    });

myFunction()

