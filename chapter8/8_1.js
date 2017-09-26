//8_6.js
var scope = "global scope";
function checkscope(){
	var scope = "local scope";
	function f(){return scope;}
	return f();
}
checkscope(); //"local scope"

var scope = "global scope";
function checkscope(){
	var scope = "local scope";
	function f(){return scope;}
	return f;
}
checkscope(); //f(){return scope;}



function counter(){
	var n = 0;
	return {
		count: function(){return n++;},
		reset: function(){ n =0;}
	};
}
var c = counter(), d = counter();
c.count();
d.count();
c.reset();
c.count();
d.count();


function constfuncs(){
	var funcs = [];
	for(var i = 0; i < 10; i++ ){
		funcs[i] = function(){return i;}
	}
	
	return funcs;
}
var funcs = constfuncs();
funcs[5](); //10