/*
let closePlayer = document.querySelector('#close-player');
let buttonContainer = document.querySelector('.button-container');
let boxContainer = document.querySelector('.box-container');

closePlayer.onclick = () =>{
    closePlayer.classList.toggle('close-m-btn');
    buttonContainer.classList.toggle('active');
    boxContainer.classList.toggle('active');
   
}

let boxes = document.querySelectorAll('.box');

boxes.forEach(box =>{

    box.onclick = () =>{
        let src = box.getAttribute('data-src');
        let text = box.querySelector('.box-content h3').innerText;
        musicPlayer.classList.add('active');
        boxContainer.classList.add('active');
        closePlayer.classList.add('fa-caret-down');
        musicPlayer.querySelector('h3').innerText = text;
        musicPlayer.querySelector('audio').src = src;
        musicPlayer.querySelector('audio').play();
    }

});
*/

const wrapper = document.querySelector(".button-container"),
musicName = wrapper.querySelector(".m-name"),
musicArtist = wrapper.querySelector(".m-artist"),
playPauseBtn = wrapper.querySelector(".play-btn"),
mainAudio = document.getElementById("mp-song"),
progressArea = wrapper.querySelector(".progress-area"),
progressBar = wrapper.querySelector(".progress"),
musicList = wrapper.querySelector(".music-list");
const playIcon = document.getElementById('ctrlIcon');
const scrollLeft = document.querySelector(".scroll-left");
const scrollRight = document.querySelector(".scroll-right");
const heroDiv = document.querySelector(".hero-img");
const sectionContainer = document.querySelector(".music-section");
const bodyContainer = document.getElementById("tracks");
const emblemDiv = document.querySelector(".emblem");
const albumTitleSpan = document.querySelector(".album-title");
const texts = document.querySelectorAll(".text-track");
const albumNum = document.querySelector(".album-num");
const spotifyWidget = document.querySelector(".spotify-widget audio");
const closePlayer = document.querySelector('#close-player');
const buttonContainer = document.querySelector('.button-container');
const albums = [
	{
		album: "Music 1",
		emblem: "Played by DeeJay Nene",
		"bg-color": ["#0396FF", "#0D1827"],
		"accent-color": "#0396FF",
		url: "/images/music1.webp",
		spotify: "songs/music-1.mp3",
	},
    {
		album: "Music 2",
		emblem: "Played by DeeJay Nene",
		"bg-color": ["#3df5a7", "#0D1827"],
		"accent-color": "#3df5a7",
		url: "/images/music2.webp",
		spotify: "songs/music-2.mp3",
    },
	{
		album: "Music 3",
		emblem: "Played by DeeJay Nene",
		"bg-color": ["#f687ff", "#0D1827"],
		"accent-color": "#f687ff",
		url:"/images/music4.webp",
        spotify: "songs/music-4.mp3",
    },
    {
		album: "Music 4",
		emblem: "Played by DeeJay Nene",
		"bg-color": ["#f687ff", "#0D1827"],
		"accent-color": "#f687ff",
		url:"/images/music4.webp",
        spotify: "songs/music-4.mp3",
    },
    {
		album: "Music 5",
		emblem: "Played by DeeJay Nene",
		"bg-color": ["#f687ff", "#0D1827"],
		"accent-color": "#f687ff",
		url:"/images/music4.webp",
        spotify: "songs/music-4.mp3",
    },
    {
		album: "Music 6",
		emblem: "Played by DeeJay Nene",
		"bg-color": ["#f687ff", "#0D1827"],
		"accent-color": "#f687ff",
		url:"/images/music4.webp",
        spotify: "songs/music-4.mp3",
    },
];
closePlayer.onclick = () =>{
    closePlayer.classList.toggle('close-m-btn');
    buttonContainer.classList.toggle('active');
    
   
}
closePlayer.addEventListener('click', function(){
    closePlayer.classList.toggle('fa-caret-down');
    closePlayer.classList.toggle('fa-music');
})
//mp-player
const closeMusicList = document.getElementById('music-list');
const musicPlayerList = document.querySelector('.music-list');
closeMusicList.onclick = () =>{
    musicPlayerList.classList.toggle('close-m-btn');
    musicPlayerList.classList.toggle('active');
    
   
}
closeMusicList.addEventListener('click', function(){
    closeMusicList.classList.toggle('fa-angle-down');
    closeMusicList.classList.toggle('fa-angle-up');
});


let musicIndex = Math.floor((Math.random() * albums.length) + 1);
isMusicPaused = true;

window.addEventListener("load", ()=>{
  loadMusic(musicIndex);
  playingSong();  
});


function loadMusic(indexNumb){
    musicName.innerText = albums[indexNumb - 1].album;
    mainAudio.src = `${albums[indexNumb - 1].spotify}`;
  }
  
  //play music function
  function playMusic(){
    playPauseBtn.addEventListener('click', function(){
        playIcon.classList.add('fa-pause');
        playIcon.classList.remove('fa-play');
        playIcon.innerText = 'Pause'
    mainAudio.play();
    })
    
  }
  
  //pause music function
  function pauseMusic(){
    playPauseBtn.addEventListener('click', function(){
        playIcon.classList.add('fa-play');
        playIcon.classList.remove('fa-pase');
        playIcon.innerText = 'Play'
    mainAudio.pause();
  })
  }
  
  //prev music function
  function prevMusic(){
    musicIndex--; //decrement of musicIndex by 1
    //if musicIndex is less than 1 then musicIndex will be the array length so the last music play
    musicIndex < 1 ? musicIndex = albums.length : musicIndex = musicIndex;
    loadMusic(musicIndex);
    playMusic();
    playingSong(); 
  }
  
  //next music function
  function nextMusic(){
    musicIndex++; //increment of musicIndex by 1
    //if musicIndex is greater than array length then musicIndex will be 1 so the first music play
    musicIndex > albums.length ? musicIndex = 1 : musicIndex = musicIndex;
    loadMusic(musicIndex);
    playMusic();
    playingSong(); 
  }
  
  // play or pause button event
  playPauseBtn.addEventListener("click", ()=>{
    const isMusicPlay = wrapper.classList.contains("paused");
    //if isPlayMusic is true then call pauseMusic else call playMusic
    isMusicPlay ? pauseMusic() : playMusic();
    playingSong();
  });
  
  //prev music button event
  scrollLeft.addEventListener("click", ()=>{
    prevMusic();
  });
  
  //next music button event
  scrollRight.addEventListener("click", ()=>{
    nextMusic();
  });
  
  // update progress bar width according to music current time
  mainAudio.addEventListener("timeupdate", (e)=>{
    
    const currentTime = e.target.currentTime; //getting playing song currentTime
    const duration = e.target.duration; //getting playing song total duration
    let progressWidth = (currentTime / duration) * 100;
    progressArea.style.width = `${progressWidth}%`;
  
    let musicCurrentTime = wrapper.querySelector(".current-time"),
    musicDuration = wrapper.querySelector(".max-duration");
    mainAudio.addEventListener("loadeddata", ()=>{
      // update song total duration
      let mainAdDuration = mainAudio.duration;
      let totalMin = Math.floor(mainAdDuration / 60);
      let totalSec = Math.floor(mainAdDuration % 60);
      if(totalSec < 10){ //if sec is less than 10 then add 0 before it
        totalSec = `0${totalSec}`;
      }
    });
    // update playing song current time
    let currentMin = Math.floor(currentTime / 60);
    let currentSec = Math.floor(currentTime % 60);
    if(currentSec < 10){ //if sec is less than 10 then add 0 before it
      currentSec = `0${currentSec}`;
    }
  });
  
  // update playing song currentTime on according to the progress bar width
  progressArea.addEventListener("click", (e)=>{
    let progressWidth = progressArea.clientWidth; //getting width of progress bar
    let clickedOffsetX = e.offsetX; //getting offset x value
    let songDuration = mainAudio.duration; //getting song total duration
    
    mainAudio.currentTime = (clickedOffsetX / progressWidth) * songDuration;
    playMusic(); //calling playMusic function
    playingSong();
  });
  
 





  
  const ulTag = document.querySelector("#ul-tag");
  // let create li tags according to array length for list
  for (let i = 0; i < albums.length; i++) {
    //let's pass the song name, artist from the array
    let liTag = `<li li-index="${i + 1}">
                  <div class="row">
                    <span>${albums[i].album}</span>
                    <p>${albums[i].emblem}</p>
                  </div>
                  <span id="${albums[i].src}" class="audio-duration">00:00</span>
                  <audio class="${albums[i].src}" src="${albums[i].spotify}"></audio>
                </li>`;
    ulTag.insertAdjacentHTML("beforeend", liTag); //inserting the li inside ul tag
  
    let liAudioDuartionTag = ulTag.querySelector(`#${albums[i].src}`);
    let liAudioTag = ulTag.querySelector(`.${albums[i].src}`);
    liAudioTag.addEventListener("loadeddata", ()=>{
      let duration = liAudioTag.duration;
      let totalMin = Math.floor(duration / 60);
      let totalSec = Math.floor(duration % 60);
      if(totalSec < 10){ //if sec is less than 10 then add 0 before it
        totalSec = `0${totalSec}`;
      };
      liAudioDuartionTag.innerText = `${totalMin}:${totalSec}`; //passing total duation of song
      liAudioDuartionTag.setAttribute("t-duration", `${totalMin}:${totalSec}`); //adding t-duration attribute with total duration value
    });
  }
  
  //play particular song from the list onclick of li tag
  function playingSong(){
    const allLiTag = ulTag.querySelectorAll("li");
    
    for (let j = 0; j < allLiTag.length; j++) {
      let audioTag = allLiTag[j].querySelector(".audio-duration");
      
      if(allLiTag[j].classList.contains("playing")){
        allLiTag[j].classList.remove("playing");
        let adDuration = audioTag.getAttribute("t-duration");
        audioTag.innerText = adDuration;
      }
  
      //if the li tag index is equal to the musicIndex then add playing class in it
      if(allLiTag[j].getAttribute("li-index") == musicIndex){
        allLiTag[j].classList.add("playing");
        audioTag.innerText = "Playing";
      }
  
      allLiTag[j].setAttribute("onclick", "clicked(this)");
    }
  }
  
  //particular li clicked function
  function clicked(element){
    let getLiIndex = element.getAttribute("li-index");
    musicIndex = getLiIndex; //updating current song index with clicked li index
    loadMusic(musicIndex);
    playMusic();
    playingSong();
  }




scrollLeft.addEventListener("click", () => handleClickScroll(-1));
scrollRight.addEventListener("click", () => handleClickScroll(1));
heroDiv.addEventListener("animationend", () => {
	heroDiv.classList.remove("album-transition");
	document.addEventListener("keydown", handleKeyScroll);
	scrollLeft.disabled = false;
	scrollRight.disabled = false;
	scrollLeft.classList.remove("key-press-hover-left");
	scrollRight.classList.remove("key-press-hover-right");

	for (const text of texts) text.classList.add("show-texts");
});

const handleClickScroll = (val) => {
	if (index + val >= 0 && index + val < albums.length) {
		updateDisplay((index += val));
	}
};

const handleKeyScroll = (e) => {
	if (e.key == "ArrowLeft") {
		scrollLeft.classList.add("key-press-hover-left");
		handleClickScroll(-1);
        playMusic();
	}
	if (e.key == "ArrowRight") {
		scrollRight.classList.add("key-press-hover-right");
		handleClickScroll(1);
        playMusic();
	}
};
let index = 0;

const updateDisplay = (index) => {
	let DELIMITER = "";

	const album = albums[index];

	for (const text of texts) text.classList.remove("show-texts");
	emblemDiv.innerHTML = "";
	scrollLeft.disabled = true;
	scrollRight.disabled = true;
	document.removeEventListener("keydown", handleKeyScroll);

	sectionContainer.id = `hero-${album.album.toLowerCase().replace(" ", "-")}`;
	bodyContainer.style.background = `linear-gradient(180deg, ${album["bg-color"][0]} 0%, ${album["bg-color"][1]} 100%)`;
	heroDiv.style.backgroundImage = `url(${album.url})`;
	albumTitleSpan.textContent = album.album;
	//spotifyWidget.src = album.spotify;

	const number = index + 1;
	albumNum.innerText = number >= 10 ? number + "." : `0${number}.`;
	albumNum.style.color = album["accent-color"];

	//if (index === 3) scrollRight.classList.add("hide-arrow");
	//else scrollRight.classList.remove("hide-arrow");

	createEmblem(album.emblem, DELIMITER[0] || undefined).forEach((node) =>
		emblemDiv.append(node)
	);

	heroDiv.classList.add("album-transition");
};

const createEmblem = (string, delimiter = "•") => {
	const spans = [];

	string = string.trim().replaceAll(" ", delimiter) + delimiter;
	const numChars = string.length;
	const degVal = 90 / (numChars / 4);

	string.split("").forEach((char, idx) => {
		const span = document.createElement("span");
		span.innerText = char;
		span.style.transform = `rotate(${180 - degVal * idx}deg)`;
		if (char === delimiter) span.style.color = albums[index]["accent-color"];
		spans.push(span);
	});

	return spans;
};

updateDisplay(index);




/*--------------------------tubfeed*/

const main_video = document.querySelector('.main-video video');
const main_video_title = document.querySelector('.main-video .video-title');
const video_playlist = document.querySelector('.video-playlist .videos');

let data = [
    {
        'id': 'a1',
        'title': 'manipulate text background',
        'name': 'manipulate text background.mp4'
    },
    {
        'id': 'a2',
        'title': 'build gauge with css',
        'name': 'build gauge with css.mp4'
    },
    {
        'id': 'a3',
        'title': '3D popup card',
        'name': '3D popup card.mp4'
    },

    {
        'id': 'a4',
        'title': 'customize HTML5 form elements',
        'name': 'customize HTML5 form elements.mp4'
    },
    {
        'id': 'a5',
        'title': 'custom select box',
        'name': 'custom select box.mp4'
    },
    {
        'id': 'a6',
        'title': 'embed google map to contact form',
        'name': 'embed google map to contact form.mp4'
    },
    {
        'id': 'a7',
        'title': 'password strength checker javascript web app',
        'name': 'password strength checker javascript web app.mp4'
        
    },

    {
        'id': 'a8',
        'title': 'custom range slider',
        'name': 'custom range slider.mp4'
    },
    {
        'id': 'a9',
        'title': 'animated shopping cart',
        'name': 'animated shopping cart.mp4'
    },

];

data.forEach((video, i) => {
    let video_element = `
                <div class="video" data-id="${video.id}">
                    <img src="images/play.svg" alt="">
                    <p>${i + 1 > 9 ? i + 1 : '0' + (i + 1)}. </p>
                    <h3 class="v-title">${video.title}</h3>
                </div>
    `;
    video_playlist.innerHTML += video_element;
})

let videos = document.querySelectorAll('.video');
videos[0].classList.add('active');
videos[0].querySelector('img').src = 'images/pause.svg';

videos.forEach(selected_video => {
    selected_video.onclick = () => {

        for (all_videos of videos) {
            all_videos.classList.remove('active');
            all_videos.querySelector('img').src = 'images/play.svg';

        }

        selected_video.classList.add('active');
        selected_video.querySelector('img').src = 'images/pause.svg';

        let match_video = data.find(video => video.id == selected_video.dataset.id);
        main_video.src = 'videos/' + match_video.name;
        main_video_title.innerHTML = match_video.title;
    }
});