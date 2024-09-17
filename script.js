let isPlaying = false;
var timer;
let track = document.createElement('audio');
track.src = '[TRACK URL HERE]';
function play() {
    track.addEventListener('ended', () => {
        isPlaying = false;
        clearInterval(timer);
    })
    track.play();
    timer = setInterval(trackTime, 200);
    isPlaying = true;
}
function pause() {
    track.pause();
    clearInterval(timer);
    isPlaying = false;
}
function trackTime() {
    let currentMin = Math.floor(track.currentTime / 60);
    let currentSec = Math.floor(track.currentTime - currentMin * 60);
    if (currentMin < 10) {
        currentMin = "0" + currentMin;
    }
    if (currentSec < 10) {
        currentSec = "0" + currentSec;
    }
    let currentTimer = document.getElementById('timer');
    let slider = document.getElementById('slider');
    currentTimer.innerHTML = `${currentMin}:${currentSec}`;
    slider.value = track.currentTime * (100 / track.duration);
}
function seekTo() {
    let slider = document.getElementById('slider');
    let time = slider.value / (100 / track.duration);
    track.currentTime = time;
}