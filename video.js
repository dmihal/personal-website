// 2. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var container;

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
var player;
function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
    height: '540',
    width: '960',
    videoId: 'oovHQAH0SEI',
    playerVars: { 'autoplay': 1, 'controls': 0, loop: 1, modestbranding: 0, showinfo: 0},
    events: {
      'onReady': onPlayerReady,
      'onStateChange': onPlayerStateChange
    }
  });
  console.log(player);
}

// 4. The API will call this function when the video player is ready.
function onPlayerReady(event) {
  event.target.playVideo();
}

// 5. The API calls this function when the player's state changes.
//    The function indicates that when playing a video (state=1),
//    the player should play for six seconds and then stop.
function onPlayerStateChange(event) {
  console.log(event.data)
  if (event.data == YT.PlayerState.PLAYING) {
    document.querySelector('#fastoverlay').style.display = 'none';
    document.querySelector('#fadeoverlay').style.opacity = 0;
  }
  if (event.data == YT.PlayerState.ENDED) {
    document.querySelector('#fastoverlay').style.display = 'block';
    setTimeout(()=>player.playVideo(),1000); 
  }
}
