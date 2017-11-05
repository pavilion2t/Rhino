{/*   
🔥🔥🔥可选形参🌈🌈🌈
当调用时，实参比形参个数少，剩下的形参都设置为undefined
所以，应当给省略的参数赋一个合理的默认值。
a = a || [];前提是a必须先声明，这里a是作为形参传入，相当于var a
*/}
function getPropertyNames(o, /* optional */ a){
  a = a || [];
  for(var property in o) a.push(property);
  return a;
}

var a  = getPropertyNames(o);
getPropertyNames(p,a);


{/*   
🔥🔥🔥可变长的实参列表： 实参对象🌈🌈🌈
当调用时，实参比形参个数多，剩下的实参可以通过argument的数字下标访问
*/}
function max(){
  var max = Number.NEGATIVE_INFINITY;
  for(var i = 0; i < arguments.length; i++){
    if(arguments[i] > max) max = arguments[i];
    return max;
}
  var lergest = max(1,10,100,2,3,1000,4,5,10000);

  
{/*   
🔥🔥🔥将对象属性用做实参🌈🌈🌈

*/}
  
  
  {/*   
🔥🔥🔥类型🌈🌈🌈

*/}
  function sum(a){
    if(isArrayLike(a)){
      var total = 0;
      for(var i = 0; i < a.length; i++){
        var element = a[i];
        if(element == null) continue;
        if(isFinite(element)) total += element;
        else throw new Error("sum():elements must be finite numbers");
      }
    return total;
    }
   else throw new Error ("sum(): argument must be array-like");
  }
