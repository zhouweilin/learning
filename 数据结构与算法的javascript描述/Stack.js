(function(){
 /*
 * 栈 -> 先进后出
 * 栈的抽象类型定义：
 * top: number             |      
 * push: fn                |   新增一个元素
 * length: fn              |   返回栈的元素个数
 * toString: fn            |   返回列表的所有元素
 * clear: fn               |   清空栈的所有元素
 * peek: fn                |   返回栈顶元素
 * pop: fn                 |   删除并返回栈顶元素
 */

   function Stack(){ 
     this.top = 0;
     this.dataStore = []; //以数组作为存储数据的底层数据结构
   }

   Stack.prototype = {
     push: push,
     pop: pop,
     peek: peek,
     clear: clear,
     length: length
   }

   function push(ele){
     this.dataStore[this.top++] = ele;
   }

   function pop(){
     return  this.dataStore[--this.top];
   }

   function peek(){
     return this.dataStore[this.top - 1];
   }

   function clear(){
     this.top = 0;
   }

   function length(){
     return this.top;
   }

   window.Stack = Stack;

})();