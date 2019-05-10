class view{

	constructor(){
		// don't hardcode canvas!!! just for testings
		this.canvas = document.getElementById('ZOOAPP');
		this.x = 30;
		this.y = 30;
		setInterval(this.drawtest.bind(this), 1000);
		//this.drawtest();
	}

	renderpage(){
		if(!$(toplayer).length){};
			// or
		var myElem = document.getElementById('myElementId');
		if (myElem === null) alert('does not exist!');
	}

	drawtest(){
		let view = this.canvas.getContext("2d");
		view.fillStyle = "red";
		//view.fillRect(10, 10, 100, 50);
		//view.circle(100, 150);
		var monkey = document.getElementById("monkey");
		monkey.width = monkey.width/4;
		monkey.height = monkey.height/4;

		this.x = this.x + Math.round(Math.random()) * 2 - 1;
		this.y = this.y + Math.round(Math.random()) * 2 - 1;

		// view.clearRect(0, 0, view.width, view.height);
		view.clearRect(0, 0, 600, 300);
		view.drawImage(monkey,this.x, this.y, 32 , 32);
		
		// foreach this.monkey.array
	}

	prepareCanvas(){
		//canvas = document.createElement('canvas');
		canvas.setAttribute('width', canvasWidth);
		canvas.setAttribute('height', canvasHeight);
		canvas.setAttribute('id', 'canvas');
		canvasDiv.appendChild(canvas);
		if(typeof G_vmlCanvasManager != 'undefined') {
			canvas = G_vmlCanvasManager.initElement(canvas);
		}

		let context = canvas.getContext("2d");
		context.fillStyle = "red";
		context.fillRect(10, 10, 100, 50);
	}


}
