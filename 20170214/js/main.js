(function() {
	function init () {
		var playBtn =document.getElementById("play_btn");
		var player =new Player("薛之谦 - 刚刚好.mp3");
		playBtn.onclick =function(){
			if (this.textContent =="播放") {
				this.textContent="暂停";
				player.play();
			} else{
				player.pause();
				this.textContent="播放";
			}
		}
	}
	init();
})()
