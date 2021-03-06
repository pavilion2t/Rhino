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

//person1 2分别保存着Person的一个不同实例，这两个对象都有一个constructor属性，指向Person：
alert(person1.constructor == Person);  //true
alert(person2.constructor == Person);  //true

//问题是创建了完成同样任务的多个Function实例
alert(person1.sayName == person2.sayName); //false

//可以把sayName()函数定义转移到构造函数外部解决，但是就没有封装性了
function Person(name,age,job){
  this.name = name;
  this.age = age;
  this.job = job;
  this.sayName = sayName;
}
function sayName(){ alert(this.name); }







//原型模式：创建的每个构造函数都有一个原型属性，这个属性是一个指针，指向一个对象。这个对象包含特定类型的所有实例共享的属性和方法。
//使用原型对象的好处是，不必在构造函数中定义对象实例信息，而是可以将这些信息直接添加到原型对象中。
  function Person(){
  }

  Person.prototype.name = "Nicholas";
  Person.prototype.age = 29;
  Person.prototype.job = "freelance";
  Person.prototype.sayName = function(){ alert(this.name); };  

  var person1 = new Person();
  person1.sayName();

  var person2 = new Person();
  person2.sayName();

  alert(person1.sayName == person2.sayName);

//可以通过isPrototypeOf()来确定a是否为b的原型
alert(Person.prototype.isPrototypeOf(person1));
alert(Person.prototype.isPrototypeOf(person2));

//ES5增加了新方法，Object.getPrototypeOf()，利用它可以方便地取得一个对象的原型，这在利用原型实现继承的情况下非常重要
alert(Object.getPrototypeOf(person1) == Person.prototype);
alert(Object.getPrototypeOf(person1).name);

//可以通过对象实例访问保存在原型中的值，但不能通过对象实例重写原型中的值
//使用hasOwnProperty()方法可以检测一个属性存在实例中还是原型中
  function Person(){
  }

  Person.prototype.name = "Nicholas";
  Person.prototype.age = 29;
  Person.prototype.job = "freelance";
  Person.prototype.sayName = function(){ alert(this.name); };  

  var person1 = new Person();
  var person2 = new Person();
  alert(person1.hasOwnProperty("name"));  //false

  person1.name = "zhu";
  alert(person1.name);  //"zhu"  来自实例
  alert(person1.hasOwnProperty("name")); //true

  alert(person2.name);  //"Nicholas"  来自原型
  alert(person2.hasOwnProperty("name")); //false

  delete person1.name;
  alert(person1.name);  //"Nicholas"  来自原型
  alert(person1.hasOwnProperty("name")); //false
  


//更简单的原型语法
function Person(){ };

Person.prtototype = {
  name: "zhu",
  age: 20,
  job: "journalism",
  sayName :function(){ alert(this.name); }
}

//原型模式的问题
function Person(){ };

Person.prototype = {
  constructor: Person,
  name: "zhu",
  friends : ["Shelby", "Court"],
  sayName: function(){ alert(this.name); }

}
  var person1 = new Person();
  var person2 = new Person();
  
person1.friends.push("Van");
alert(person1.friends);
alert(person2.friends);
alert(person1.friends === person2.friends); //true
alert(person1.sayName === person2.sayName); //true

//组合使用构造函数模式和原型模式
function Person(name,age,job){
  this.name = name;
  this.age = age;
  this.job = job;
  this.friends = ["Shelby", "Court"];
}
Person.prototype = {
  constructor: Person,
  sayName: function(){ alert(this.name); }
}
var person1 = new Person("Nicholas",29,"Software Engineer");
var person2 = new Person("Greg",27,"Doctor");

person1.friends.push("Van");
alert(person1.friends);//Shelby,Court,Van
alert(person2.friends);//Shelby,Court
alert(person1.friends === person2.friends); //false
alert(person1.sayName === person2.sayName); //true
