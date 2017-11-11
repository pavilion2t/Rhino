//factory 解决了创建多个相似对象的问题，但是没有解决对象识别问题
function createPerson(name,age,job){
  var o = new Object();
  o.name = name;
  o.age = age;
  o.job = job;
  o.sayName = function(){ alert(this.name); };
  return o;
}
var person1 = createPerson("Nicholas",29,"Software Engineer");
var person2 = createPerson("Judy",19,"freelance");


//构造函数模式，重写。不同之处有三：没有显式创建对象；直接将属性和方法赋给了this对象；没有返回语句
function Person(name,age,job){
  this.name = name;
  this.age = age;
  this.job = job;
  this.sayName = function(){ alert(this.name); }
}
var person1 = new Person("Nicholas",29,"Software Engineer");
var person2 = new Person("Judy",19,"freelance");

