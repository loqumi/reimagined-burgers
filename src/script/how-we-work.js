const video_player = document.querySelector('#video_player');
const mainVideo = video_player.querySelector('#main_video');
const controls = video_player.querySelector('.controls');
const progress_area = video_player.querySelector('.progress-area');
const progress_bar = video_player.querySelector('.progress-bar');
const play_pause = video_player.querySelector('.play');
const volume = video_player.querySelector('.volume');
const volume_range = video_player.querySelector('.volume_range');

function playVideo() {
    play_pause.title = "pause";
    video_player.classList.add('paused')
    document.getElementById("play-pause").src="images/icons/pause.svg";
    mainVideo.play();
}

function pauseVideo() {
    play_pause.title = "play";
    video_player.classList.remove('paused')
    document.getElementById("play-pause").src="images/icons/play.svg";
    mainVideo.pause();
}

[play_pause, mainVideo].forEach((elem)=>{

    elem.addEventListener("click", () => {

        const isVideoPaused = video_player.classList.contains('paused');
    
        isVideoPaused ? pauseVideo() : playVideo();
    })
})

mainVideo.addEventListener('timeupdate', (e) => {
    let currentVideoTime = e.target.currentTime;
    let videoDuration = e.target.duration
    let progressWidth = (currentVideoTime / videoDuration) * 100;
    progress_bar.style.width = `${progressWidth}%`
});

progress_area.addEventListener('click', (e) => {
    let videoDuration = mainVideo.duration;
    let progressWidthval = progress_area.clientWidth;
    let ClickOffsetX = e.offsetX;
    mainVideo.currentTime = (ClickOffsetX / progressWidthval) * videoDuration;
});

function changeVolume() {
    mainVideo.volume = volume_range.value / 100;
}

volume_range.addEventListener('change', () => {
    changeVolume();
});

video_player.addEventListener('mouseover', () => {
    controls.classList.add('active');
})

video_player.addEventListener('mouseleave', ()=>{
    if (video_player.classList.contains('paused')){
        controls.classList.remove('active');
    } else {
        controls.classList.add('active');
    }

})

video_player.addEventListener('touchstart', () => {
    controls.classList.add('active');
    setTimeout(() => {
        controls.classList.remove('active')
    }, 8000);
})

video_player.addEventListener('touchmove', ()=>{
    if (video_player.classList.contains('paused')){
        controls.classList.remove('active');
    } else {
        controls.classList.add('active');
    }

})