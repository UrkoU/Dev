const songs = ["media/AC-DC.mp3", "media/Aretha.mp3", "media/Bob Marley.mp3", "media/Red Hot Chili Peppers.mp3"];
const reproductor = document.getElementById("audio");
let current = 0;

function playAudio(num) {
  current = num;
  reproductor.src = songs[current];
  reproductor.load();
  reproductor.play();

  // document.querySelector("#audio").querySelector("source").src = songs[num - 1];
}

// Events listeners

document.querySelector("#audio").addEventListener("play", (ev) => {
  console.log("Playing", ev.target);
  document.querySelector("#control-play").textContent = "pause";
});

document.querySelector("#audio").addEventListener("pause", (ev) => {
  console.log("Playing", ev.target);
  document.querySelector("#control-play").textContent = "play_arrow";
});

// Buttons listeners

document.querySelector("#control-previous").addEventListener("click", (ev) => {
  ev.preventDefault();
  playAudio(current === 0 ? (current = 3) : --current);
  console.log("Previous", ev.target);
});

document.querySelector("#control-next").addEventListener("click", (ev) => {
  ev.preventDefault();
  playAudio(current === 3 ? (current = 0) : ++current);
  console.log("Next", ev.target);
});

document.querySelector("#control-play").addEventListener("click", (ev) => {
  ev.preventDefault();
  reproductor.play();
});

// document.querySelector("#control-pause").addEventListener("click", (ev) => {
//   ev.preventDefault();
//   reproductor.pause();
// });

const neatTime = (time) => {
  // const hours = Math.floor((time % 86400) / 3600)
  const minutes = Math.floor((time % 3600) / 60);
  let seconds = Math.floor(time % 60);
  seconds = seconds > 9 ? seconds : `0${seconds}`;

  return `${minutes}:${seconds}`;
};

const progressFill = document.querySelector(".progress-filled");
const textCurrent = document.querySelector(".time-current");

reproductor.addEventListener("timeupdate", (ev) => {
  progressFill.style.width = `${(reproductor.currentTime / reproductor.duration) * 100}%`;
  textCurrent.textContent = `${neatTime(reproductor.currentTime)} / ${neatTime(reproductor.duration)}`;
});
