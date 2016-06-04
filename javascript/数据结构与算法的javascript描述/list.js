(function(){

    /*
    * 列表的抽象类型定义：
    * listSize: number        |   列表的元素个数   
    * pos: number             |   列表的当前位置
    * length: fn              |   返回列表的元素个数
    * clear: fn               |   清空列表的所有元素
    * toString: fn            |   返回列表的所有元素
    * insert: fn              |   在现有元素后插入新的元素
    * getElement: fn          |   返回当前位置的元素
    * append: fn              |   在列表的末尾添加新元素
    * remove: fn              |   从列表中删除元素
    * front: fn               |   将列表的当前位置移动到第一个元素
    * end: fn                 |   将列表的当前位置移动到最后一个元素
    * prev: fn                |   将当前位置后移一位
    * next: fn                |   将当前位置前移一位
    * currPos: fn             |   返回当前位置
    * moveTo: fn              |   将当前位置移动到指定位置
    */


    function List(){
      this.listSize = 0;
      this.pos = 0;
      this.dataStore = [];
     
    }

    List.prototype = {
      clear: clear,
      find: find,
      toString: toString,
      insert: insert,
      append: append,
      remove: remove,
      front: front,
      end: end,
      prev: prev,
      next: next,
      length: length,
      currPos: currPos,
      moveTo: moveTo,
      getElement: getElement,
      contains: contains
    }

    function append(ele){
      this.dataStore[this.listSize++] = ele;
    }

    function remove(ele){
      var foundAt = this.find(ele);
      if(foundAt > -1){
        this.dataStore.splice(foundAt, 1);
        --this.listSize;
        return true;
      }
      return false;
    }

    function find(ele){
      for(var i = 0; i <  this.dataStore.length; i++){
        if(this.dataStore[i] === ele){
          return i;
        }
      }
      return -1;
    }

    function length(){
      return this.listSize;
    }

    function toString(){
      return this.dataStore;
    }

    function insert(ele, after){
       var insertPos = this.find(after);
       if(insertPos > -1){
        this.dataStore.splice(insertPos + 1, 0, ele);
        this.listSize ++;
        return true;
       }
       return false;
    }

    function clear(){
      delete this.dataStore;
      this.dataStore = [];
      this.listSize = this.pos = 0;
    }

    function contains(ele){
      var foundAt = this.find(ele);
      if(foundAt > -1){
        return ture;
      }

      return false;
    }

    function front(){
      this.pos = 0;
    }

    function end(){
      this.pos = this.listSize - 1;
    }

    function prev(){
      if(this.pos > 0){
        --this.pos;
      }
    }

    function next(){
      if(this.pos < this.listSize - 1){
        ++ this.pos;
      }
    }

    function currPos(){
      return this.pos;
    }

    function moveTo(position){
      this.pos = position;
    }

    function getElement(){
      return this.dataStore[this.pos];
    }

    window.List = List;

})();