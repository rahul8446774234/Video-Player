let videoName = document.querySelector("h2");
let video = document.querySelector("video");
let videoDurationBtn = document.querySelectorAll("input")[0];
let videoVolumeBtn = document.querySelectorAll("input")[1];
let previousBtn = document.querySelector(".fa-backward");
let pauseBtn = document.querySelector(".fa-pause");
let playBtn = document.querySelector(".fa-play");
let nextBtn = document.querySelector(".fa-forward");
let favBtn = document.querySelector(".fa-heart");

let storage = [
    {
        name: "Phir Mulaqat",
        videoSrc : "./video/video1.mp4"
    },
    {
        name : "Aaj Bhi",
        videoSrc : "./video/video2.mp4"
    },
    {
        name : "HUSN",
        videoSrc : "./video/video3.mp4"
    }
]

pauseBtn.style.display = "none";
let index = 0;
let realTime = 0;

function playVideo(){
    videoName.innerHTML = storage[index].name;
    video.src = storage[index].videoSrc;
    video.currentTime = realTime;
    video.play();
    pauseBtn.style.display = "block";
    playBtn.style.display = "none";
}
playBtn.addEventListener("click",playVideo);
pauseBtn.addEventListener("click",()=>{
    video.pause();
    pauseBtn.style.display = "none";
    playBtn.style.display = "block";
    realTime = video.currentTime;
})

nextBtn.addEventListener("click",()=>{
    index = (index + 1) % storage.length;
    realTime = 0;
    playVideo();
})

previousBtn.addEventListener("click",()=>{
    index = (index - 1 + storage.length) % storage.length;
    realTime = 0;
    playVideo();
})

videoVolumeBtn.addEventListener("input",()=>{
    video.volume = videoVolumeBtn.value / 100;
})

videoDurationBtn.addEventListener("input",()=>{
    video.currentTime = videoDurationBtn.value * video.duration / 100;
})

video.addEventListener("ended",()=>{
    index = (index + 1) % storage.length;
    realTime = 0;
    playVideo();
})

favBtn.addEventListener("click",()=>{
    favBtn.style.color = "red";
})