(function() {
	//创建播放器的类
	function Player(url) {
		//定义audioContent
		this.audioContext = new AudioContext();
		//创建次元缓冲区对象
		this.bufferSource = this.audioContext.createBufferSource();
		//创建频谱分析仪对象
		this.analyser =this.audioContext.createAnalyser();
		//获取canvas，创建绘画环境
		this.canvasContext =document.getElementById("canvas").getContext("2d");
		
		this.playerInit(url);
	}
	Player.prototype.draw =function() {
		var self = this;
		var array = this.loadAnalyserArray();
		this.canvasContext.clearRect(0,0,800,600);
		var itemWidth = 10;//设置音频条的宽度
		var itemSpace = 5;//音频条之间的间距
		var Width = 800;
		var Height =600;
		var canDrawNum = Width/(itemSpace+itemWidth);//计算可以画多少音频
		var step =parseInt(array.length/canDrawNum);//每个多少条训一个数
		var r = Math.floor(Math.random()*256);
		var g = Math.floor(Math.random()*256);
		var b = Math.floor(Math.random()*256);
		for (var i=0;i<canDrawNum;i++) {
			var itemHeight =array[i*step];
			self.canvasContext.fillStyle="rgb("+r+","+g+","+b+")";
			self.canvasContext.fillRect((itemSpace+itemWidth)*i,Height-itemHeight,itemWidth,itemHeight);
		}
		setTimeout(function(){
			self.draw();
		},100)
	}
	
	//创建频谱分析组
	Player.prototype.loadAnalyserArray =function() {
		this.analyser.fillSize =1024;
		var array = new Uint8Array(this.analyser.frequencyBinCount);
		this.analyser.getByteTimeDomainData(array);
		console.log(array);
		return array;
	}
	//添加一个加载播放器的方法
	Player.prototype.loadAudio = function(url,callback) {
		var request =new XMLHttpRequest();
		request.responseType = "arraybuffer";
		request.open("GET",url);
		request.onload = function() {
			if (callback) {
				callback(request.response);
			}
		}
		request.send();
	}
	//初始化函数
	Player.prototype.playerInit=function(url) {
		var self =this;
		this.loadAudio(url,function(arrayBuffer) {
			self.audioContext.decodeAudioData(arrayBuffer,function(buffer) {
				self.bufferSource.buffer = buffer;
				//self.bufferSource.connect(self.audioContext.destination);
				//链接频谱仪
				self.bufferSource.connect(self.analyser);
				self.analyser.connect(self.audioContext.destination);
			})
		})
	}
	//播放暂停的方法
	Player.prototype.play =function() {
		if(this.audioContext.state !="suspended"){//state他的一个状态
			this.bufferSource.start()
		}else{
			this.audioContext.resume();
		}
		this.draw();
	}
	
	
	Player.prototype.pause = function() {
		this.audioContext.suspend();//暂停
	}
	
	
	
	//留一个同意的接口
	window.Player=Player;
})()
