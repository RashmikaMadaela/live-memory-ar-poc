
const scene = document.querySelector('a-scene');
const video = document.querySelector("#memory-video");
const target = document.querySelector("#mytarget");
const soundBtn = document.querySelector("#sound-btn");
const loader = document.querySelector("#loading-overlay");
const guide = document.querySelector("#scan-guide");

// 1. Dismiss Loader when AR is ready
scene.addEventListener("arReady", () => {
    loader.style.display = "none";
    console.log("AR System Ready");
});

// 2. Target Found Logic
target.addEventListener("targetFound", () => {
    console.log("Found");
    video.play();
    guide.style.borderColor = "#4CAF50"; // Turn border green
    guide.style.boxShadow = "none"; // Remove dimming
    soundBtn.style.display = "block"; // Show unmute button
});

// 3. Target Lost Logic
target.addEventListener("targetLost", () => {
    console.log("Lost");
    video.pause();
    guide.style.borderColor = "rgba(255, 255, 255, 0.5)"; // Reset border
    guide.style.boxShadow = "0 0 0 9999px rgba(0, 0, 0, 0.5)"; // Dim again
    soundBtn.style.display = "none";
});

// 4. Unmute Logic
soundBtn.addEventListener("click", () => {
    video.muted = false;
    soundBtn.innerText = "Playing... 🎵";
    soundBtn.style.background = "rgba(76, 175, 80, 0.9)";
    setTimeout(() => { soundBtn.style.display = "none" }, 2000);
});
