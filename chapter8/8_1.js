//8.1函数语句和表达式  2种方式定义函数

//输出o的每个属性的值，返回undefined
function printprops(o){
  for(var p in o){
    console.log(p+ ": " + o[p] + "\n")
    }
  }
