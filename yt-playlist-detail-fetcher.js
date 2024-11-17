const ves = document.querySelectorAll("#items ytd-playlist-panel-video-renderer");

const textContents = [];
let totalTimeInSeconds = 0;

function timeToSeconds(time) {
    const parts = time.split(":").map(Number).reverse(); 
    let seconds = 0;
    if (parts[0]) seconds += parts[0]; 
    if (parts[1]) seconds += parts[1] * 60; 
    if (parts[2]) seconds += parts[2] * 3600; 
    return seconds;
}

ves.forEach((videoElement, index) => {
    const thumbnailElements = videoElement.querySelectorAll("ytd-thumbnail-overlay-time-status-renderer");
    thumbnailElements.forEach((thumbnail) => {
        let text = thumbnail.textContent.split("\n")[0].trim();
        const seconds = timeToSeconds(text); 
        totalTimeInSeconds += seconds; 
        text = "Video Number " + (index + 1) + " -> " + text;
        textContents.push(text);
    });
});

function secondsToTime(seconds) {
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return [hrs, mins, secs]
        .map((val) => val.toString().padStart(2, "0"))
        .filter((val, i) => i > 0 || val !== "00") 
        .join(":");
}

console.log(textContents);
console.log("Total Time:", secondsToTime(totalTimeInSeconds));
