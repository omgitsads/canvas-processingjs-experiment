jQuery(function($){
  var el = document.getElementById("app"),
      width = window.innerWidth,
      height = window.innerHeight,
      p = Processing(el),
      X = width/2,
      Y = height/2,
      nX = X,
      nY = Y,
      delay = 16,
      numOfCircles = 1000,
      circles = [],
      cursor;
  
  // setup processing object
	p.setup = function() {
		p.size(width, height);
		p.noStroke();
		p.frameRate( 60 );
		p.fill(0, 0, 0);
    
    nX = width/2;
    nY = height/2;
		startedAt = new Date();
		
		cursor = new Cursor(p, p.mouseX, p.mouseY);
		
		for(var i=0;i<numOfCircles;i++){
		  randomPositionX = Math.random() * width;
		  randomPositionY = Math.random() * height;
		  circles.push(new Circle(p,randomPositionX, randomPositionY));
		}
	}
	
	p.mouseMoved = function(){
	  cursor.moveTo(p.mouseX,p.mouseY)
	}
	
	p.draw = function(){
	  p.background(0);
	  
	  cursor.draw();
	  
	  for(var i=0;i<numOfCircles;i++){
	    var object = circles[i];
	    
	    if(object.isWithinInfluenceOf(cursor)){ object.decay(cursor); }
	    object.draw();
    }
	}
	
	p.init();
});