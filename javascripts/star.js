var Star = function(p,startX,startY){
  this.processing = p;
  this.attributes = {
    radius: 1.0,
    currentX: startX,
    currentY: startY,
    colour: {red: 255, green: 255, blue: 255},
    offsetX: (Math.random() * 1000),
    offsetY: (Math.random() * 1000)
  }
}

Star.prototype.moveTo = function(newX, newY){
  this.attributes.currentX = newX;
  this.attributes.currentY = newY;
}

Star.prototype.resize = function(newRadius){
  this.attributes.radius = newRadius;
}

Star.prototype.isWithinInfluenceOf = function(cursor){
  var differenceX = this.attributes.currentX - cursor.attributes.currentX;
  var differenceY = this.attributes.currentY - cursor.attributes.currentY;
  
  var distance = Math.sqrt((differenceX * differenceX) + (differenceY * differenceY));
  
  if(distance < cursor.attributes.influence){ 
    return true;
  } else {
    return false;
  }
}

Star.prototype.decay = function(cursor){
  var distanceX = this.attributes.currentX - cursor.attributes.currentX;
  var distanceY = this.attributes.currentY - cursor.attributes.currentY;
  var newX, newY;
  
  if(distanceX > 0){
    newX = this.attributes.currentX-2;
  } else {
    newX = this.attributes.currentX+2;
  }
  
  if(distanceY > 0){
    newY = this.attributes.currentY-2;
  } else {
    newY = this.attributes.currentY+2;
  }
  
  this.moveTo(newX, newY);
}

Star.prototype.draw = function(){
  // Set fill-color to blue  
  this.processing.fill( this.attributes.colour.red, this.attributes.colour.green, this.attributes.colour.blue );  

  // Set stroke-color white  
  this.processing.noStroke();
  
  // Draw circle  
  this.processing.ellipse( this.attributes.currentX, this.attributes.currentY, this.attributes.radius, this.attributes.radius );
}