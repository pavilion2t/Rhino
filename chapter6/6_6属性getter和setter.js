var p = {
  x:1.0,
  y:1.0,
  
  get(){ return Math.sqrt(this.x*this.x + this.y*this.y); }
  set r(newValue){ 
    var oldValue = Math.sqrt(this.x*this.x +this.y*this.y);
    var ratio = newvalue/oldvalue;
    this.x *= ratio;
    this.y *= ratio;
 },
 get theta(){ return Math.atan2(this.y, this.x); }
}
