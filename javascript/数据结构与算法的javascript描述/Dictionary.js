(function(win){

   /*
   * 字典 -> 以 键-值 对形式存储的数据结构
   * 字典的抽象类型定义：

   * Property:
   * 1.dataStore: array                   |   底层数据结构
   
   * Method:
   * 1. add(key, value): fn               |   新增一个键值对
   * 2. find(key): fn                     |   查找一个键的相应的值
   * 3. remove(key): fn                   |   删除一个键及相关联的值
   * 4. showAll(): fn                     |   显示字典中所有键值对
   * 5. count(): fn                       |   返回字典的元素个数
   * 6. clear(): fn                       |   返回栈顶元素
   */

   function Dictionary(){
     this.dataStore = []; //array 做为字典的底层数据类型
   }

   Dictionary.prototype = {
     add: add,
     find: find,
     remove: remove,
     showAll: showAll,
     count: count,
     clear: clear
   }


})(window);