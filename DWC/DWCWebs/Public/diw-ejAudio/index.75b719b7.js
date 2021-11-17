var reproductor=document.getElementById("audio"),current=0,songs=[{src:"media/AC-DC.mp3",img:"/media/images/razors_edge.jfif",title:"Thunderstruck",album:"The Razor's edge",author:"AC/DC",length:"4:52"},{src:"media/Aretha.mp3",img:"media/images/aretha_now.jfif",title:"I say a little prayer",album:"Aretha Now",author:"Aretha Franklin",length:"3:36"},{src:"media/Bob Marley.mp3",img:"media/images/exodus.jpg",title:"One Love",album:"Exodus",author:"Bob Marley",length:"2:51"},{src:"media/Red Hot Chili Peppers.mp3",img:"/media/images/by_the_way.jpg",title:"By The Way",album:"By The Way",author:"Red Hot Chili Peppers",length:"3:39"}];function showSongs(){for(var e=document.getElementById("divSongs"),t=0;t<songs.length;t++)e.innerHTML+='\n    <div id="song'.concat(t,'" class="song text-light bold" onclick="playAudio(').concat(t,')">\n      <div class="d-flex justify-content-center align-items-center">\n          <img src="').concat(songs[t].img,'" height="80%" class="album-cover">\n      </div>\n      <div class="d-flex flex-direction-column w-80 justify-content-start align-items-start text-left title">\n        ').concat(songs[t].title,"<br/>\n        ").concat(songs[t].author,'\n      </div>\n      <div class="d-flex w-20 justify-content-end align-items-center timestamp">\n          ').concat(songs[t].length,"       \n      </div>\n    </div>");document.getElementById("song".concat(songs.length-1)).classList.add("song-last")}function playAudio(e){current=e,reproductor.src=songs[current].src,reproductor.load(),reproductor.play()}showSongs(),document.querySelector("#audio").addEventListener("play",(function(e){console.log("Playing",e.target),document.querySelector("#control-play").textContent="pause"})),document.querySelector("#audio").addEventListener("pause",(function(e){console.log("Playing",e.target),document.querySelector("#control-play").textContent="play_arrow"})),document.querySelector("#control-previous").addEventListener("click",(function(e){e.preventDefault(),playAudio(0===current?current=3:--current),console.log("Previous",e.target)})),document.querySelector("#control-next").addEventListener("click",(function(e){e.preventDefault(),playAudio(3===current?current=0:++current),console.log("Next",e.target)})),document.querySelector("#control-play").addEventListener("click",(function(e){e.preventDefault(),reproductor.paused?reproductor.play():reproductor.pause()}));var neatTime=function(e){var t=Math.floor(e%3600/60),o=Math.floor(e%60);return o=o>9?o:"0".concat(o),"".concat(t,":").concat(o)},progressFill=document.querySelector(".progress-filled"),textCurrent=document.querySelector(".time-current"),speedBtns=document.querySelectorAll(".speed-list");reproductor.addEventListener("timeupdate",(function(e){progressFill.style.width="".concat(reproductor.currentTime/reproductor.duration*100,"%"),textCurrent.textContent="".concat(neatTime(reproductor.currentTime)," / ").concat(neatTime(reproductor.duration))}));var progressSlider=document.querySelector(".progress");progressSlider.addEventListener("click",(function(e){var t=e.offsetX/progressSlider.offsetWidth;progressFill.style.width="".concat(100*t,"%"),reproductor.currentTime=t*reproductor.duration})),speedBtns.forEach((function(e){e.addEventListener("click",(function(e){reproductor.playbackRate=e.target.dataset.speed,speedBtns.forEach((function(e){return e.classList.remove("active")})),e.target.classList.add("active")}))})),window.addEventListener("keydown",(function(e){switch(e.key){case" ":reproductor.paused?reproductor.play():reproductor.pause();break;case"ArrowRight":reproductor.currentTime+=5;break;case"ArrowLeft":reproductor.currentTime-=5}}));var volumeBtn=document.querySelector("#control-volume"),volumeSlider=document.querySelector(".volume-slider"),volumeFill=document.querySelector(".volume-filled"),lastVolume=1,syncVolume=function(e){e>.5?volumeBtn.textContent="volume_up":e<.5&&e>0?volumeBtn.textContent="volume_down":0===e&&(volumeBtn.textContent="volume_mute")};volumeBtn.addEventListener("click",(function(e){e.preventDefault(),reproductor.volume?(lastVolume=reproductor.volume,reproductor.volume=0,volumeBtn.textContent="volume_mute",volumeFill.style.width="0"):(reproductor.volume=lastVolume,syncVolume(reproductor.volume),volumeFill.style.width="".concat(100*reproductor.volume,"%"))})),volumeSlider.addEventListener("click",(function(e){var t=e.offsetX/volumeSlider.offsetWidth;t<.1&&(t=0),volumeFill.style.width="".concat(100*t,"%"),reproductor.volume=t,syncVolume(t),lastVolume=t}));
//# sourceMappingURL=index.75b719b7.js.map
