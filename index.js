const videoPlayer = document.getElementById('videoPlayer')
const myVideo= document.getElementById('myVideo')
  
function stopVideo() {
  videoPlayer.style.display ='none'
  myVideo.pause();
        myVideo.currentTime = 0; 
}

function playVideo(file) {
  myVideo.src =file
  videoPlayer.style.display ='block'
  myVideo.play();
}
