//7_10.js
//ES5 Array.isArray()
var isArray = Function.isArray || function(o){
	return typeof o === "object" &&
	Object.prototype.toString.call(o) === "[object Array]";
}