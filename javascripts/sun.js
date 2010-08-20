var Sun = function(p,x,y){
  this.processing = p;
  this.attributes = {
    x: x,
    y: y,
    radius: 250.0
  }
}

Sun.prototype.draw = function(){
  // Set fill-color to blue  
  this.processing.fill(255, 255, 0);  

  // Set stroke-color white  
  this.processing.noStroke();
  
  this.processing.ellipse( this.attributes.x, this.attributes.y, this.attributes.radius, this.attributes.radius );
}