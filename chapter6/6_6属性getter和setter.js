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


var serialnum = {
  $n: 0,
  get next(){ return this.$n++; }
  set next(n){
    if(n >= this.$n) this.$n = n;
    else throw "can not be smaller than current value";
  }
};

var random = {
  get octet(){ return Math.floor(Math.random()*256); },
  get unit16(){ return Math.floor(Math.random()*65536); },
  get init16(){ return Math.floor(Math.random()*65536)-32768; }
}
