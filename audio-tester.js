let player;

// Create the YouTube player object
function onYouTubeIframeAPIReady() {
    player = new YT.Player('youtube-video', {
        events: {
            'onReady': onPlayerReady
        }
    });
}

// When the player is ready, set up initial conditions
function onPlayerReady(event) {
    console.log("Player ready");
}

// Change the video URL in the iframe
function changeVideo(newURL) {
    player.loadVideoByUrl(newURL);
}

// Play/Pause the video
function togglePlayPause() {
    if (player.getPlayerState() === YT.PlayerState.PLAYING) {
        player.pauseVideo();
    } else {
        player.playVideo();
    }
}