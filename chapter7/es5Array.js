//es5Array.js
//forEach(arr[i],index,array)
var data = [1,2,3,4,5];
var sum = 0;
data.forEach(function(value){ sum += value });
sum //15

data.forEach(function(v,i,a){ a[i]=v+1 });
data //[2,3,4,5,6]

//map()
a = [1,2,3];
b = a.map(function(x){ return x*x; });//[1,4,9]

//filter()
//every() some()
//reduce() reduceRight()
//indexOf() lastIndexOf()