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
