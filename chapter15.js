var section1 = document.getElementById("section1");

//15.1
function getElements(/*ids...*/){
  var elements = {};
  for(var i=0;i<arguments.length;i++){
    var id = arguments[i];
    var elt = document.getElementById(id);
    if(elt == null){
      throw new Error("No element with id:"+id);
    }
    elements[id] = elt;
  }
  return elements;
}

//15.2.3
var fistpara = document.getElementsByTagName("p")[0];

var snapshot = Array.prototype.slice.call(nodelist,0);


