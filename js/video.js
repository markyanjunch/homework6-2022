var video = document.querySelector('#player1');

window.addEventListener("load", function() {
	console.log("Good job opening the window")
	video.autoplay = false;
	video.loop = false;
});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
	document.querySelector("#volume").innerHTML = video.volume * 100 + "%";
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
});

document.querySelector("#slower").addEventListener("click", function() {
	console.log("Slow down video");
	video.playbackRate *= 0.95;
	console.log("New speed is", video.playbackRate);
});

document.querySelector("#faster").addEventListener("click", function() {
	console.log("Speed up video");
	video.playbackRate /= 0.95;
	console.log("New speed is", video.playbackRate);
});

document.querySelector("#skip").addEventListener("click", function() {
	console.log("Original location", video.currentTime);
	video.currentTime += 15;
	if (video.currentTime >= video.duration) {
		video.currentTime = 0;
		console.log("Going back to beginning");
	}
	console.log("New location", video.currentTime);
});

document.querySelector("#mute").addEventListener("click", function(e) {
	if (!video.muted) {
		video.muted = true;
		e.target.textContent = "Unmute";
	} 
	else {
		video.muted = false;
		e.target.textContent = "Mute";
	}
});

document.querySelector("#slider").addEventListener("change", function(e) {
	video.volume = e.target.value / 100;
	document.querySelector("#volume").innerHTML = video.volume * 100 + "%";
	console.log(video.volume);
});

document.querySelector("#vintage").addEventListener("click", function() {
	video.classList.add("oldSchool");
});

document.querySelector("#orig").addEventListener("click", function() {
	video.classList.remove("oldSchool");
});
