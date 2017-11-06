//属性的查询和设置
var author = book.author;
var name = author.name;
var title = book["main title"];

book.edition = 7;
book["main title"] = "ECMAScript";

es3  o["class"]
es5  o.class

//作为关联数组的对象
var addr = "";
for(i = 0; i < 4; i++){
  addr += customer["address" + i] + '\n';
  }
  
//数组 & 字符串表达式来访问对象属性
function addstock(){
  portfolio[stockname] = shares;
}

function getValue(portfolio){
  var total = 0.0;
  for(stock in portfolio){
    var shares = portfolio[stock];
    var price = getquote(stock);
    total += shares * prices;
 }
 return total;
}
