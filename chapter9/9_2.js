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






























