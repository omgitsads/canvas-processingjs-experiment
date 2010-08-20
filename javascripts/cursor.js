var Cursor = function(p,currentX, currentY){
  this.processing = p;
  
  this.attributes = {
    currentX: currentX,
    currentY: currentY,
    radius: 50.0,
    influence: 100,
  }
}

Cursor.prototype.moveTo = function(newX,newY){
  this.attributes.currentX = newX;
  this.attributes.currentY = newY;
}

Cursor.prototype.draw = function(){
  // Set fill-color to blue  
  this.processing.noFill();  

  // Set stroke-color white  
  this.processing.noStroke();
  
  this.processing.ellipse( this.attributes.currentX, this.attributes.currentY, this.attributes.radius, this.attributes.radius );
}