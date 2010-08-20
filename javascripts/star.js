var Star = function(p,startX,startY){
  this.processing = p;
  this.attributes = {
    radius: 1.0,
    focusedRadius: 10.0,
    focused: false,
    currentX: startX,
    currentY: startY,
    theta: 0,
    speed: 0.01,
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

Star.prototype.distanceFrom = function(object){
  var differenceX = this.attributes.currentX - object.attributes.currentX;
  var differenceY = this.attributes.currentY - object.attributes.currentY;
  
  var distance = Math.sqrt((differenceX * differenceX) + (differenceY * differenceY));
  return distance
}

Star.prototype.isHoveredBy = function(cursor){
  if(this.distanceFrom(cursor) <= (this.attributes.radius*2)){
    return true;
  } else {
    return false;
  }
}

Star.prototype.focus = function(){
  if(this.attributes.focused === false){
    this.attributes.focused = true;
    this.resize(this.attributes.focusedRadius);
  }
}

Star.prototype.blur = function(){
  if(this.attributes.focused === true){
    console.log("Bluring!");
    this.attributes.focused = false;
    this.resize(this.attributes.radius);
  }
}

Star.prototype.isWithin = function(object, padding){
  if(this.distanceFrom(object) <= (object.attributes.radius+padding)/2){
    return true;
  } else {
    return false;
  }
}

Star.prototype.isWithinInfluenceOf = function(cursor){
  if(this.distanceFrom(cursor) < cursor.attributes.influence){ 
    return true;
  } else {
    return false;
  }
}

Star.prototype.calculateThetaOffset = function(object){
  var differenceX = this.attributes.currentX - object.attributes.currentX;
  var differenceY = this.attributes.currentY - object.attributes.currentY;
  this.attributes.theta = (180/Math.PI) * Math.atan2(differenceX,differenceY);
}

Star.prototype.nextPointInArcFor = function(object){
  var radius = this.distanceFrom(object);
  
  var x = object.attributes.currentX + radius * Math.cos(this.attributes.theta);
  var y = object.attributes.currentY + radius * Math.sin(this.attributes.theta);
  
  this.moveTo(x,y);
  
  this.attributes.theta += this.attributes.speed;
  
  if(this.attributes.theta === 360){ this.attributes.theta = 0; }
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