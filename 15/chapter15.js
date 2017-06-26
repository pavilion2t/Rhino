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


/*15.3
parentNode
childNodes
firstChild lastChild
nextSibling previousSibling
nodeType
nodeValue
nodeName
*/
function parent(e,n){
  if(n===undefined){n=1;}
  while(n--&&e){n=1;}
  if(!e||e.nodeType!==1){return null;}
  return e;
}

function sibling(e,n){
  while(e&&n!==0){
    if(n>0){
      if(e.nextElementSibling){
        e=e.nextElementSibling;
      }else{
        for(e=e.nextElementSibling;e&&e.nodeType!==1;e=e.nextSibling)
             /*空循环*/
      }
      n--;
    }else{
      
    }
  }
}



















