document.querySelector("#audio").addEventListener("play", (ev) => {
  console.log("Playing", ev.target);
});

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

document.querySelector("#control-previous").addEventListener("click", (ev) => {
  ev.preventDefault();
  playAudio(current === 0 ? (current = 3) : --current);
  console.log("Previous", ev.target);
});

document.querySelector("#control-next").addEventListener("click", (ev) => {
  ev.preventDefault();
  playAudio(current === 3 ? (current = 0) : ++current);
  console.log("Previous", ev.target);
});
