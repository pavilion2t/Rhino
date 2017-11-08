Object.defineProperty(Object.prototype,"extends",{
  writable:true,
  enumerable:false,
  configurable:true,
  value:function(o){
    var names = Object.getOwnPropertyNames(o);
    for(var i = 0; i < names.length; i++){
      if(name[i] in this) continue;
      var desc = Object.getOwnPropertyDescriptor(o,names[i]);
      Object.defineProperty(this,names[i],desc);
    }
   }
  });
