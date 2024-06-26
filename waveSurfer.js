        
var playBtn= document.getElementById('play-btn1');
var playBtn2 = document.getElementById('play-btn2');
const wavesurfer = WaveSurfer.create({
  container: '#wave1',
  waveColor: '#f6f96f',
  progressColor: '#7a2338',
  url: 'songs/Filha Dnha Vizin feat Mc Acondize Arybeatz.mp3',//audio.mp3
  responsive: true,
  height: 60,
  barRadius: 4
})
const wave2 = WaveSurfer.create({
  container: '#wave2',
  waveColor: '#f6f96f',
  progressColor: '#7a2338',
  url: 'songs/Dexam Bua feat Sónia Sousa Helio Batalha.mp3', //audio.mp3
  responsive: true,
  height: 60,
  barRadius: 4
})

wavesurfer.on('interaction', () => {
  wavesurfer.play();
  playBtn.src = "/images/pause.svg";
});
wave2.on('interaction', () => {
  wave2.play();
  playBtn2.src = "/images/pause.svg";
});

wavesurfer.load('songs/Filha Dnha Vizin feat Mc Acondize Arybeatz.mp3');
wave2.load('songs/Dexam Bua feat Sónia Sousa Helio Batalha.mp3');


playBtn.onclick = function(){
    wavesurfer.playPause();
    if(playBtn.src.includes('play.svg')){
        playBtn.src = "/images/pause.svg";
    }else{
        playBtn.src = "/images/play.svg";
    }
    if(play = true){
        playBtn.src = "/images/pause.svg";
    }
    
}
playBtn2.onclick = function(){
    wave2.playPause();
    if(playBtn2.src.includes('play.svg')){
        playBtn2.src = "/images/pause.svg";
    }else{
        playBtn2.src = "/images/play.svg";
    }
    if(play = true){
        playBtn2.src = "/images/pause.svg";
    }
    
}
wavesurfer.on('finish', function(){
    playBtn.src = "/images/play.svg";
    wavesurfer.stop();
})
wave2.on('finish', function(){
    playBtn2.src = "/images/play.svg";
    wave2.stop();
})

//just one audio playing
document.addEventListener('play', function(e){
    const audios = document.querySelectorAll('.audio');
    for(let i = 0, len = audios.lenght; i < len ; i++){
        if(audios[i] != e.target){
            audios[i].pause();
        }
    }
})