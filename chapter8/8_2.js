//有4种方式来调用函数

{/*   
🔥🔥🔥作为函数🌈🌈🌈
在ES3和非严格ES5对函数调用的规定，this的值是全局对象；严格模式下，this则是undefined
*/}
printprops({x:1};
var total = distance(0,0,2,1) + distance(2,1,3,5);
var p = factorial(5)/factorial(13);

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

*/}



{/*   
🔥🔥🔥通过call()和apply()方法间接调用🌈🌈🌈

*/}
