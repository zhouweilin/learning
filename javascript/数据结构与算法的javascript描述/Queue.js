(function(win){

  function Queue(){
    this.dataStore = [];
  }

  Queue.prototype = {
    enqueue: enqueue,
    dequeue: dequeue,
    front: front,
    back: back,
    toString: toString,
    empty: empty
  }

  function enqueue(ele){
    this.dataStore.push(ele);
  } 

  function dequeque(){
    return this.dataStore.shift();
  }

  function front(){
    return this.dataStore[0];
  }

  function back(){
    return this.dataStore[this.dataStore.length - 1];
  }

  function toString(){
    var str = '';
    for(var i = 0; i < this.dataStore.length; i++){
      str += this.dataStore[i] + '\n';
    }
    return str;
  }
  
  function empty(){
    if(this.dataStore.length === 0) return true;
    return false;
  }

  win.Queue = Queue;
})(window);