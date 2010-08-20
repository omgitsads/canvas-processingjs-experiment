var Sun = function(p,x,y){
  this.processing = p;
  this.attributes = {
    currentX: x,
    currentY: y,
    radius: 250.0,
    influence: 600
  }
}

Sun.prototype.draw = function(){
  // Set fill-color to blue  
  this.processing.fill(255, 255, 0);  

  // Set stroke-color white  
  this.processing.noStroke();
  
  this.processing.ellipse( this.attributes.currentX, this.attributes.currentY, this.attributes.radius, this.attributes.radius );
}