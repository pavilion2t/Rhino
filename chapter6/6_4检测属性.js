🐯🐯🐯🐯🐯in运算符，左侧属性名，右侧对象，如果是对象自有属性或继承属性则返回true
var o = { x:1 }
"x" in o; //true
"y" in o; //false
"toString" in o;  //true  o继承toString属性



🐯🐯🐯🐯🐯hasOwnProperty()方法，检测对象自有属性，如果是对象的继承属性返回false
var o ={ x:1 }
o.hasOwnProperty("x");  //true
o.hasOwnProperty("y");  //false
o.hasOwnProperty("toString");  //false
