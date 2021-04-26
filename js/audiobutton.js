
var x = document.getElementsByClassName("audio");

var button = document.getElementsByClassName("audiobutton");
var play = true;

function playAudio() {
  x.play();
}

function pauseAudio() {
  x.pause();
}

button.addEventListener('click', () => {
    if (play == true) {
        pauseAudio();
        console.log(play)
        
    } else {
        playAudio();
    }
});

