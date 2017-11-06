//只是断开属性和宿主对象的联系。只能删除自有属性，不能删除继承属性。
delete book.author
delete book["main title"]

//删除成功或没有任何副作用，返回true； 删除后不是一个属性访问表达式，返回true
o = {x:1};
delete o.x;  //true
delete o.x;  //true
delete o.toString;  //true
delete 1;  //true



//delete不能删除可配置性为false的属性，严格模式下，删除一个不可配置属性会报类型错误
delete Object.prototype  //false

var x = 1;
delete this.x;  //false

function f() { }
delete this.f;  //false

