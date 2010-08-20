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
		
		cursor = new Cursor(p, p.mouseX, p.mouseY);
		sun = new Sun(p, X, Y);
		
		for(var i=0;i<numOfStars;i++){
		  while(true){
		    var randomPositionX = Math.random() * width;
  		  var randomPositionY = Math.random() * height;
  		  var star = new Star(p,randomPositionX, randomPositionY);
  		  if(!star.isWithin(sun,10)){
  		    star.calculateThetaOffset(sun);
  		    stars.push(star);
  		    break;
  		  }
		  }
		}
	}
	
	p.mouseMoved = function(){
	  cursor.moveTo(p.mouseX,p.mouseY)
	}
	
	p.draw = function(){
	  p.background(0);
	  
	  sun.draw();
	  
	  for(var i=0;i<numOfStars;i++){
	    var object = stars[i];
	    
	    if(object.isHoveredBy(cursor)){ 
	      object.focus(); 
	    } else { 
	      object.blur(); 
	    }
	    object.nextPointInArcFor(sun);
	    
	    object.draw();
    }
	}
	
	p.init();
});