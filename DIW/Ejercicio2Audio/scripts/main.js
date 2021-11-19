// const songs = ["media/AC-DC.mp3", "media/Aretha.mp3", "media/Bob Marley.mp3", "media/Red Hot Chili Peppers.mp3"];
const reproductor = document.getElementById("audio");
let current = 0;

const songs = [
  {
    src: "media/AC-DC.mp3",
    img: "media/images/razors_edge.jfif",
    title: "Thunderstruck",
    album: "The Razor's edge",
    author: "AC/DC",
    length: "4:52",
  },
  {
    src: "media/Aretha.mp3",
    img: "media/images/aretha_now.jfif",
    title: "I say a little prayer",
    album: "Aretha Now",
    author: "Aretha Franklin",
    length: "3:36",
  },
  {
    src: "media/Bob Marley.mp3",
    img: "media/images/exodus.jpg",
    title: "One Love",
    album: "Exodus",
    author: "Bob Marley",
    length: "2:51",
  },
  {
    src: "media/Red Hot Chili Peppers.mp3",
    img: "media/images/by_the_way.jpg",
    title: "By The Way",
    album: "By The Way",
    author: "Red Hot Chili Peppers",
    length: "3:39",
  },
];

showSongs();
showImage();

function showSongs() {
  let divSongs = document.getElementById("divSongs");
  for (let i = 0; i < songs.length; i++) {
    divSongs.innerHTML += `
    <div id="song${i}" class="song text-light bold" onclick="playAudio(${i})">
      <div class="d-flex justify-content-center align-items-center">
          <img src="${songs[i].img}" height="80%" class="album-cover">
      </div>
      <div class="d-flex flex-direction-column w-80 justify-content-start align-items-start text-left title">
        ${songs[i].title}<br/>
        ${songs[i].author}
      </div>
      <div class="d-flex w-20 justify-content-end align-items-center timestamp">
          ${songs[i].length}       
      </div>
    </div>`;
  }
  document.getElementById(`song${songs.length - 1}`).classList.add("song-last");
}

function showImage() {
  document.getElementById("imgBig").src = songs[current].img;
}

function playAudio(num) {
  current = num;
  reproductor.src = songs[current].src;
  // console.log("playAudio");

  reproductor.load();
  reproductor.play();
  showImage();
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
  if (reproductor.paused) {
    reproductor.play();
  } else {
    reproductor.pause();
  }
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

reproductor.addEventListener("timeupdate", (ev) => {
  progressFill.style.width = `${(reproductor.currentTime / reproductor.duration) * 100}%`;
  textCurrent.textContent = `${neatTime(reproductor.currentTime)} / ${neatTime(reproductor.duration)}`;
});

const progressSlider = document.querySelector(".progress");
progressSlider.addEventListener("click", (ev) => {
  const newTime = ev.offsetX / progressSlider.offsetWidth;
  progressFill.style.width = `${newTime * 100}%`;
  reproductor.currentTime = newTime * reproductor.duration;
});

speedBtns.forEach((speedBtn) => {
  speedBtn.addEventListener("click", (ev) => {
    reproductor.playbackRate = ev.target.dataset.speed;
    speedBtns.forEach((item) => item.classList.remove("active"));
    ev.target.classList.add("active");
  });
});

window.addEventListener("keydown", (ev) => {
  switch (ev.key) {
    case " ":
      if (reproductor.paused) {
        reproductor.play();
      } else {
        reproductor.pause();
      }
      break;
    case "ArrowRight":
      reproductor.currentTime += 5;
      break;
    case "ArrowLeft":
      reproductor.currentTime -= 5;
      break;
  }
});

const volumeBtn = document.querySelector("#control-volume");
const volumeSlider = document.querySelector(".volume-slider");
const volumeFill = document.querySelector(".volume-filled");
let lastVolume = 1;

const syncVolume = (volume) => {
  if (volume > 0.5) {
    volumeBtn.textContent = "volume_up";
  } else if (volume < 0.5 && volume > 0) {
    volumeBtn.textContent = "volume_down";
  } else if (volume === 0) {
    volumeBtn.textContent = "volume_mute";
  }
};

volumeBtn.addEventListener("click", (ev) => {
  ev.preventDefault();
  if (reproductor.volume) {
    lastVolume = reproductor.volume;
    reproductor.volume = 0;
    volumeBtn.textContent = "volume_mute";
    volumeFill.style.width = "0";
  } else {
    reproductor.volume = lastVolume;
    syncVolume(reproductor.volume);
    volumeFill.style.width = `${reproductor.volume * 100}%`;
  }
});

volumeSlider.addEventListener("click", (ev) => {
  let volume = ev.offsetX / volumeSlider.offsetWidth;
  volume < 0.1 ? (volume = 0) : volume;
  volumeFill.style.width = `${volume * 100}%`;
  reproductor.volume = volume;
  syncVolume(volume);
  lastVolume = volume;
});
