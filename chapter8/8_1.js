//8.1函数语句和表达式  2种方式定义函数

//输出o的每个属性的值，返回undefined
function printprops(o){
  for(var p in o){
    console.log(p+ ": " + o[p] + "\n")
    }
  }

{/*
计算两个笛卡尔坐标之间的距离
笛卡尔坐标系 (Cartesian coordinates) 就是直角坐标系和斜角坐标系的统称。
e.g  distance(3,3,9,8)
7.810249675906654
*/}
function  distance(x1,y1,x2,y2){
  var dx = x2-x1;
  var dy = y2-y1;
  return Math.sqrt(dx*dx + dy*dy);
}

{/*
计算阶乘的递归函数
factorial(5)  
120
factorial(0)
1
*/}
function factorial(x){
  if(x<=1) return 1;
  return x * factorial(x-1);
}

{/* 函数表达式，注意把它赋值给了一个变量 */}
var square = function(x){
  return x * x;
}



{/*  */}

{/*  */}

{/*  */}
