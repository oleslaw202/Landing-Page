//========================================
// Volume
//========================================
const volumeIcon = document.getElementById("volume_icon");
const volumeRangePanel = document.getElementById("volume_range_panel");
const volumeRange = document.getElementById("volume_range");
const audioFiles = document.querySelectorAll("audio");
volumeIcon.addEventListener("mouseup", () => {
    volumeRangePanel.toggleAttribute("hidden");
})

function volumeChange(value) {
    audioFiles.forEach(audioFile => {
        audioFile.volume = value;
    });
}