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
      numOfStars = 1000,
      stars = [],
      sun,
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
		
		//cursor = new Cursor(p, p.mouseX, p.mouseY);
		sun = new Sun(p, X, Y);
		
		for(var i=0;i<numOfStars;i++){
		  randomPositionX = Math.random() * width;
		  randomPositionY = Math.random() * height;
		  stars.push(new Star(p,randomPositionX, randomPositionY));
		}
	}
	
	p.mouseMoved = function(){
	  //cursor.moveTo(p.mouseX,p.mouseY)
	}
	
	p.draw = function(){
	  p.background(0);
	  
	  //cursor.draw();
	  sun.draw();
	  
	  for(var i=0;i<numOfStars;i++){
	    var object = stars[i];
	    
	    //if(object.isWithinInfluenceOf(cursor)){ object.decay(cursor); }
	    object.draw();
    }
	}
	
	p.init();
});