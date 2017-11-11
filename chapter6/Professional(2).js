//factory
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
