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
  // Do Nothing
}