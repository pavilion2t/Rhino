//非函数式编程风格 计算元素的平均值和标准差
var data = [1,1,3,5,5];
var total = 0;
for(var i = 0; i < data.length; i++) total += data[i];
var mean = total/data.length;

total = 0;
for(var i = 0; i < data.length; i++){
  var deviation = data[i] - mean;
  total += deviation*deviation;
}
var stddev = Math.sqrt(total/(data.length-1));

//可以使用数组方法map() reduce()来实现同样的计算
var sum = function(x,y) { return x+y; }
var square = function(x) { return x*x; }

var data = [1,1,3,5,5,];
var mean = data.reduce(sum)/data.length;
var deviations = data.map( function(x) { return x-mean; });
var stddev = Math.sqrt(deviations.map(square).reduce(sum)/(data.length-1));


//基于ES3实现map() reduce()
var map = Array.prototype.reduce 
    ?function(a,f,initial){
      if(arguments.lenght > 2) 
       return a.reduce(f,initial);
       else return a.reduce(f);
    }
    :function(a,f,initial){
      var i = 0, len = a.length,accumulator;
      if(arguments.length > 2) accumulator = initial;
      else { 
        if (len == 0) throw TypeError();
        while(i < len){
          if(i in a){
            accumulator = a[i++];
            break;
          }
          else i++;
        }
        if{ i == len) throw TypeError();
   }
    
  while (i<len){
    if(i in a)
      accumulator = f.call(undefined,accumulator,a[i],i,a);
      i++;
  }
    return accumulator;
 }

