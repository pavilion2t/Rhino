//range.js

function(from,to){
	var r = inherit(range.methods);

	r.from = from;
	r.to = to;

	return r;

	range.methods = {
		includes:function(x){
			return this.from <= x && x <= this.to;
		},
		foreach:function(f){
			for(var x = Math.ceil(this.form);x<=this.to;x++)  f(x);
		},
	    toString:function(){
	    	return "(" +this.from+ "..."+this.to+")";
	    }
	}
};

var r = range(1,3);
r.includes(2);
r.foreach(console.log);
console.log(r);


//range2.js

function Range(from,to){
	this.from = from;
	this.to = to;
}

Range.prototype = {
	includes:function(x){
		return this.from <= x && x <= this.to;
	},
	foreach:function(f){
		for(var x = Math.ceil(this.form);x<=this.to;x++)  f(x);
	},
	toString:function(){
		return "(" +this.from+ "..."+this.to+")";
	}
};


var r = range(1,3);
r.includes(2);
r.foreach(console.log);
console.log(r);


//一个用以定义简单类的函数
function defineClass(constructor,methods,statics){
	if(methods) extends(constructor.prototype,methods);
	if(statics) extends(constructor,statics);
	return constructor;
}

//Range类的另一个实现
var simpleRange = defineClass(
	function(f,t){
	this.f=f;
	this.t=t;
},{includes:function(x) {
	return this.f<=x&&x<=this.t;
},
  toString:function(){return this.f+"..."+this.t;}
  },
  {
  	upto:function(t){
  		return new SimpleRange(o,t);
  	}
  }
  );



























