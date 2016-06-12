(function(win){
  
  function Node(ele){
    this.element = ele;
    this.next = null;
  }


  function LinkedList(){
    this.head = new Node('head');
  }

  LinkedList.prototype = {
    find: find,
    insert: insert,
    remove: remove,
    display: display,
    findPrevious: findPrevious
  }

  function find(ele){          
    var currNode = this.head;
    while(currNode.element !== ele){
      currNode = currNode.next;
    }
    return currNode;
  }

  function insert(newEle, ele){
    var newNode = new Node(newEle);
    var curr = this.find(ele);
    newNode.next = curr.next;
    curr.next = newNode;
  }

  function remove(){

  }

  function display(){
    var currNode = this.head;

    while(!(currNode.next == null)){
      console.log(currNode.next.element);
      currNode = currNode.next;
    }
  }

  function findPrevious(ele){
    var currNode = this.head;
    while(!(currNode.next == null) && (currNode.next.element != ele)){
      currNode = currNode.next;
    }
    return currNode;
  }

  function remove(ele){
    var prevNode = this.findPrevious(ele);
    if(!(prevNode.next) == null){
      prevNode.next = prevNode.next.next;
    }
  }


})(window);