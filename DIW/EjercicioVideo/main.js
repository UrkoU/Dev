var i = 0;
const videos = [
  { src: "video/AC_DC - Who Made Who.mp4", title: "Who Made Who", img: "", length: "", author: "AC/DC" },
  { src: "video/Muse - Pressure.mp4", title: "Pressure", img: "", length: "", author: "Muse" },
  { src: "video/Muse - Newborn.mp4", title: "Newborn", img: "", length: "", author: "Muse" },
  { src: "video/Royal Blood - Lights Out.mp4", title: "Lights out", img: "", length: "", author: "Royal Blood" },
];

var player = document.getElementById("videoPlayer");
var btnPlay = document.getElementById("btnPlay");

function mostrarLista() {
  document;
}

function play() {
  if (!player) player.src = videos[i].src;
  if (player.paused || player.currentTime == 0) {
    player.play();
    btnPlay.textContent = "pause";
  } else {
    player.pause();
    btnPlay.textContent = "play_arrow";
  }
}

function stop() {
  player.pause();
  player.currentTime = 0;
  btnPlay.textContent = "play_arrow";
}

function previous() {
  i > 0 ? i-- : (i = videos.length - 1);
  player.src = videos[i].src;
  player.play();
}

function next() {
  i < videos.length - 1 ? i++ : (i = 0);
  player.src = videos[i].src;
  player.play();
}

function volumeDown() {
  player.volume > 0.1 ? (player.volume -= 0.1) : () => {};
}

function volumeUp() {
  player.volume < 1 ? (player.volume += 0.1) : () => {};
}

let previousVolume;
function mute() {
  if (player.volume != 0) {
    previousVolume = player.volume;
    player.volume = 0;
  } else {
    player.volume = previousVolume;
  }
}

function replay10() {
  player.currentTime > 10 ? (player.currentTime -= 10) : (player.currentTime = 0);
}

function forward10() {
  player.currentTime < player.duration ? (player.currentTime += 10) : (player.currentTime = player.duration);
}

function launchIntoFullscreen(element) {
  if (element.requestFullscreen) {
    element.requestFullscreen();
  } else if (element.mozRequestFullScreen) {
    element.mozRequestFullScreen();
  } else if (element.webkitRequestFullscreen) {
    element.webkitRequestFullscreen();
  } else if (element.msRequestFullscreen) {
    element.msRequestFullscreen();
  }
}

function exitFullscreen() {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.mozCancelFullScreen) {
    document.mozCancelFullScreen();
  } else if (document.webkitExitFullscreen) {
    document.webkitExitFullscreen();
  }
}

let fullscreen = false;
function toggleFullscreen() {
  if (fullscreen) {
    exitFullscreen();
    fullscreenBtn.textContent = "fullscreen";
  } else {
    launchIntoFullscreen(player);
    fullscreenBtn.textContent = "fullscreen_exit";
  }
  fullscreen = !fullscreen;
}

player.addEventListener("ended", () => {
  next();
});

player.addEventListener("dblclick", () => {
  toggleFullscreen();
});

player.addEventListener("click", () => {
  play();
});

const neatTime = (time) => {
  // const hours = Math.floor((time % 86400) / 3600)
  const minutes = Math.floor((time % 3600) / 60);
  let seconds = Math.floor(time % 60);
  seconds = seconds > 9 ? seconds : `0${seconds}`;

  return `${minutes}:${seconds}`;
};

const progressFill = document.querySelector(".progress-filled");
const textCurrent = document.querySelector(".time-current");
const speedBtns = document.querySelectorAll(".speed-list");

player.addEventListener("timeupdate", (ev) => {
  progressFill.style.width = `${(player.currentTime / player.duration) * 100}%`;
  textCurrent.textContent = `${neatTime(player.currentTime)} / ${neatTime(player.duration)}`;
});

const progressSlider = document.querySelector(".progress");
progressSlider.addEventListener("click", (ev) => {
  const newTime = ev.offsetX / progressSlider.offsetWidth;
  progressFill.style.width = `${newTime * 100}%`;
  player.currentTime = newTime * player.duration;
});
