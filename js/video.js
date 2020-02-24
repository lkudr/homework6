var video;

function getVid(){
	video = document.querySelector("#myVideo");
}

function playVid() {
	video.play();
	let vol = document.querySelector("#volume");
	vol.innerHTML = video.volume*100 + "%";
	console.log("Play Video");
}

function pauseVid() {
	video.pause();
	console.log("Pause Video");
}

function decreaseSpeed() {
	video.playbackRate *= .8;
  console.log("Speed is "+ video.playbackRate);
}

function increaseSpeed() {
	video.playbackRate *= 1.25;
	console.log("Speed is "+ video.playbackRate);
}

function skipAhead() {
	video.currentTime += 60;
	if (video.currentTime >= video.duration){
		video.currentTime = 0;
		video.playbackRate = 1;
	}
	console.log("Current location is "+ video.currentTime);
}

function mute() {
	let button = document.querySelector("#mute");
	if (video.muted) {
		video.muted = false;
		button.innerHTML = "Mute";
		console.log("Unmuted");
	}
	else{
		video.muted = true;
		button.innerHTML = "Unmute";
		console.log("Muted");
	}
}

function changeVolume() {
	video.volume = volumeSlider.value/100
	let vol = document.querySelector("#volume");
	vol.innerHTML = video.volume*100 + "%";
	console.log("Volume is " +volumeSlider.value+"%");
}


function gray() {
	video.className = "grayscale";
	console.log("In grayscale")
}

function color() {
	video.className = "";
	console.log("In color")
}
