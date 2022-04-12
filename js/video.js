var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window")
	video = document.querySelector("#player1");
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
})

document.querySelector("#slower").addEventListener("click", function() {
	console.log("Slow Video"); //need to put the actual speed here
	video.playbackRate *= 0.95;
	console.log("speed is ", video.playbackRate)
})


document.querySelector("#faster").addEventListener("click", function() {
	console.log("Fast Video"); //need to put the actual speed here
	video.playbackRate /= .95;
	console.log("speed is ", video.playbackRate)
})

document.querySelector("#skip").addEventListener("click", function() {
	console.log("Skipping Ahead")
	video.currentTime += 15;
	if (video.currentTime >= video.duration){
		video.currentTime = 0
	}
	console.log("Video Current time is ", video.currentTime);
})

// mute
document.querySelector("#mute").addEventListener("click", function() {
	console.log("mute volume")
	if(video.muted){
		video.muted = false;
		mute.innerHTML = "Mute"}
	else{
		video.muted = true;
	mute.innerHTML ="Unmute";}

})

// volume slider

document.querySelector("#slider").addEventListener("click", function() {
	console.log("adjust volume")
	video.volume = this.value/100
	document.querySelector("#volume").innerHTML = video.volume * 100 + "%"
})


// old school
document.querySelector("#vintage").addEventListener("click", function() {
	console.log("old school")
	video.classList.add("oldSchool");
})


// original
document.querySelector("#orig").addEventListener("click", function() {
	console.log("original")
	video.classList.remove("oldSchool");
})
