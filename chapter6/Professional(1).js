var person = new Object();
person.name = "misstakau";
person.age = 17;
person.job = "freelance";

person.sayName = function(){
  alert(this.name);
}

var person = {
  name: "misstakau",
  age: 17,
  job: "freelance",
  sayName: function(){
    alert(this.name);
  }
}

//数据属性和访问器属性
