var coordinatX = document.getElementById('mainPhoto').offsetLeft;
const timeLeft = document.querySelector('h1')
const gameAudio = new Audio('music/audio.mp3')

let timeSec = 100;
timeLeft.innerHTML = `Time left : ${timeSec}`;
let timeOutEnd = false;
let movementScore = true;


//Movement of the character
function myFunction(){
    if(movementScore) {
        movementScore = true;
        coordinatX += 10;
        document.getElementById('mainPhoto').style.left= coordinatX + "px";
        winCondition()
        gameAudio.play();
    } else {
        alert('You were caught cheating')
        location.reload();
    }
}

// All the win and loss condition of the game
function winCondition() {
    if(coordinatX >= 1028) {
        alert('You submitted the assignment on time')
        location.reload();
    }

    if(timeOutEnd) {
        alert('You ran out of time for submitting the assignment')
        location.reload();
    }

}

// The timer function which we have created
var myfunc = setInterval(function() {
    timeSec--;
    timeLeft.innerHTML = `Time left : ${timeSec}`;

    if(timeSec <=0 || timeSec <1) {
        timeLeft.innerHTML = 0;
        timeOutEnd = true;
    }

}, 1000)

// Red light funtion
function redLight() {
    document.getElementById('status').innerHTML="Teacher is invigilating"
    document.getElementById("finish").style.color = "#FF4821";
    movementScore = false;
    var x = Math.floor((Math.random() * 5000) + 1000);
    window.setTimeout(greenLight,x)
}

// Green light funtion
function greenLight() {
    document.getElementById('status').innerHTML="Teacher is not looking"
    document.getElementById("finish").style.color = "green";
    movementScore = true;
    var x = Math.floor((Math.random() * 5000) + 1000);
    window.setTimeout(redLight,x)
}

// At random time it calls the red light function
function dall() {
    var x = Math.floor((Math.random() * 5000) + 1000);
    window.setTimeout(redLight,x);
}

// At the beginning of the game, the dall function is called
window.onload = function() {
    document.getElementById("finish").style.color = "green";
    dall()
};