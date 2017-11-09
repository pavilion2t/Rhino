function Product(name,price){
  this.name = name;
  this.price = price;
}

function Food(name,price){
  Product.call(this,name,price);
  this.category = "food";
}
var cheese = new Food('feta', 5);

//Food {name: "feta", price: 5, category: "food"}


function Toy(name,price){
  Product.call(this,name,price);
  this.category = 'toy';
}
var fun = new Toy('robot', 40);

//Toy {name: "robot", price: 40, category: "toy"}
