//drawing stuff
var clickX = new Array();
var clickY = new Array();
var clickDrag = new Array();
var paint;

//colour stuff
var colorPurple = "#cb3594";
var colorGreen = "#659b41";
var colorYellow = "#ffcf33";
var colorBrown = "#986928";
var curColor = colorPurple;
var clickColor = new Array();

//functions!
function myMousedown(e){
	  var mouseX = e.pageX - this.offsetLeft;
	  var mouseY = e.pageY - this.offsetTop;
	
	  paint = true;
	  addClick(e.pageX - this.offsetLeft, e.pageY - this.offsetTop);
	  redraw();
}

function myMousemove(e){
	  if(paint){
	    addClick(e.pageX - this.offsetLeft, e.pageY - this.offsetTop, true);
	    redraw();
	  }
}

function myMouseup(){
	  paint = false;
}

function myMouseleave(){
	  paint = false;
}

function redraw(){
	context = document.getElementById('myCanvas').getContext("2d");
	  //context.clearRect(0, 0, context.canvas.width, context.canvas.height); // Clears the canvas
	  
	  context.strokeStyle = "#df4b26";
	  context.lineJoin = "round";
	  context.lineWidth = 5;
				
	  for(var i=0; i < clickX.length; i++) {		
	    context.beginPath();
	    if(clickDrag[i] && i){
	      context.moveTo(clickX[i-1], clickY[i-1]);
	     }else{
	       context.moveTo(clickX[i]-1, clickY[i]);
	     }
	     context.lineTo(clickX[i], clickY[i]);
	     context.closePath();
	     context.strokeStyle = clickColor[i];
	     context.stroke();
	  }
}

function addClick(x, y, dragging){
  clickX.push(x);
  clickY.push(y);
  clickDrag.push(dragging);
  clickColor.push(curColor);
}

function loadImage() {
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    var img = document.getElementById("scream");
    ctx.drawImage(img,10,10);
}
