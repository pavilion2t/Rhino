//8.7.4
function f(y){
	return this.x + y;
}//待绑定的函数
var o = {x:1};//将要绑定的对象
var g = f.bind(o);//通过调用g来调用o.f()
g(2);

//e.g 8-5
if(!Function.prototype.bind){
	Function.prototype.bind = function(o){
		var self = this, boundArgs = arguments;
		return function(){
			var args = [],i;
			for(i=1;i<boundArgs.length;i++) args.push(boundArgs[i]);
			for(i=0;i<arguments.length;i++) args.push(arguments[i]);
				return self.apply(0,args);
		}
	}
}