function toDo (task,notes){
  this.task = task;
  this.notes = notes;
  this.complete = false;
}
function listArr(){
  this.list = [];
  this.currentId= 0;
}
list.prototype.addItem = function(item){
  item.id =this.assignId();
  this.list.push(id);
}
list.prototype.assignId()= function(){
  this.currentId += 1;
  return this.currentId;
}

list.prototype.removeItem = function(id) {
  for(let i = 0; i< this.list.length; i++){
    if(this.list[i]==id){
      delete this.list[i];
      return true;
    }
  }
  return false;
}
list.prototype.findItem = function(id){
  for(let i =0; i < this.list.length;i++){
    if(this.list[i].id==id){
      return this.list[i];
    }
  };
  return false;
}
list.prototype.complete = function(){
  
}