//通过原型链继承创建一个新对象
function inherit(){
  if(p == null) throw TypeError();
  if(Object.create)
    return Object.create(p);
  var t = typeof p;
  if(t !== "Object" && t !== "function") throw TypeError();
  function f(){ };
  f.prototype = p;
  return new f();
}

var o = { x: "don't change this value" };
library_function(inherit(o));
  
