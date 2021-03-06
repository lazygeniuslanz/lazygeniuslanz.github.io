var vid = document.getElementById("bgvid");
var pauseButton = document.querySelector("#btn-pause-vid");

if (window.matchMedia('(prefers-reduced-motion)').matches) {
    vid.removeAttribute("autoplay");
    vid.pause();
    pauseButton.innerHTML = "Paused";
}

function vidFade() {
  vid.classList.add("stopfade");
}

vid.addEventListener('ended', function()
{
	// only functional if "loop" is removed 
	vid.pause();
	// to capture IE10
	vidFade();
}); 


pauseButton.addEventListener("click", function() {
  vid.classList.toggle("stopfade");
  if (vid.paused) {
    vid.play();
    //pauseButton.innerHTML = "Pause Video";
	$('#icon-pause').removeClass('fa-play');
	$('#icon-pause').addClass('fa-pause');
	Materialize.toast('Background Video Resumed', 2000);
  } else {
    vid.pause();
    //pauseButton.innerHTML = "Paused";
	$('#icon-pause').removeClass('fa-pause');
	$('#icon-pause').addClass('fa-play');
	Materialize.toast('Background Video Paused', 2000);
  }
})
