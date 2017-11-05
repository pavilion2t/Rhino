//有4种方式来调用函数

{/*   
🔥🔥🔥作为函数🌈🌈🌈
在ES3和非严格ES5对函数调用的规定，this的值是全局对象；严格模式下，this则是undefined
以函数形式调用的函数通常不使用this关键字，不过可以通过this来判断是否为严格模式。
*/}
printprops({x:1};
var total = distance(0,0,2,1) + distance(2,1,3,5);
var p = factorial(5)/factorial(13);

var strict = (function() {return !this; }());
console.log(!undefined);
 true
console.log(!window);
 false


{/*   
🔥🔥🔥作为方法🌈🌈🌈
方法是 保存在对象属性里的函数。
方法调用的this值是该对象。
*/}
var o = {
  m : function(){
        var self = this;
        console.log(this === o);
        f();
        function f(){
          console.log(this === o);
          console.log(self === o);
        }
      }
  };
o.m();


{/*   
🔥🔥🔥作为构造函数🌈🌈🌈
有关键字new，没有形参的调用可以省略圆括号
*/}
var o = new Object();
var o = new Object;



{/*   
🔥🔥🔥通过call()和apply()方法间接调用🌈🌈🌈
monkey-patching
*/}
function trace(o,m){
  var original = o[m];
  o[m] = function(){
    console.log(new Date(), "Entering:", m);
    var result = original.apply(this, arguments);
    console.log(new Date(), "Exiting:", m);
    return result;
  };
}
