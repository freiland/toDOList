function listArr(){
  this.items = [];
  this.currentId= 0;
}

function item (task){
  this.task = task;
  //this.notes = notes;
  this.complete = false;
}

listArr.prototype.addItem = function(task){
  task.id =this.assignId();
  this.items.push(task);
}

listArr.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
}


listArr.prototype.removeItem = function(id) {
  for(let i = 0; i< this.items.length; i++){
    if(this.items[i]){
      if(this.items[i].id == id){
        delete this.items[i];
        return true;
      }
    }
  };
  return false;
}
listArr.prototype.findItem = function(id){
  for(let i =0; i < this.items.length;i++){
    if(this.items[i].id==id){
      return this.items[i];
    }
  };
  return false;
}
listArr.prototype.complete = function(){
  this.complete = true;
}


let newList = new listArr()
$(document).ready(function(){
  $('form#question').submit(function(event){
    event.preventDefault();
    let newTask = $("#item").val();
    let tasks = new item(newTask);
    newList.addItem(tasks);
    console.log(newList);
    
  })

})


