function controller(value) {
    const player = document.querySelector('video.video-stream.html5-main-video');
    player.playbackRate = value;
}



controller(5.5)