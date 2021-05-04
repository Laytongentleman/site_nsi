"use strict";


var x = document.querySelector(".audio");

var button = document.querySelector(".playbutton");
var button_reload = document.querySelector(".reloadbutton");
var play = true;

function playAudio() {
  x.play();
}

function pauseAudio() {
  x.pause();
}

function reloadAudio() {
  x.pause();
  x.currentTime = 0;
  x.play();      
  play = true;
  console.log("reloaded");
}

button.addEventListener('click', function(e) {
  console.log(play)
    if (play == true) {
        pauseAudio();
        p.src = '/img/play.png';
        play = false;
        
    } else {
        playAudio();
        p.src = '/img/pause.png';
        play = true;
    }
})

button_reload.addEventListener('click', function(e) {
    reloadAudio();
})



const init = function(e) {
  let btn = document.querySelector(".pont");
  console.log(btn);
  let audiotime = localStorage.getItem('audio-time')
  x.currentTime = audiotime
  btn.addEventListener('click', function() {
  });
};

document.addEventListener('DOMContentLoaded', function(){
  init();});
 
  function myfun(){
    localStorage.setItem('audio-time', x.currentTime)
    console.log('hello');
}

window.onbeforeunload = function(){
  myfun();
};