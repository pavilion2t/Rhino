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



