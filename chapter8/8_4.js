//作为值的函数

function add(x,y){ return x+y; }
function subtract(x,y){ return x-y;}
function multiply(x,y) { return x*y; }
function devide(x,y){ return x/y;}

function operate(operator, operand1, operand2){
  return operator( operand1, operand2 );
}
