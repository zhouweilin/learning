(function(win){

   /*
   * Binary search tree(BST)
   * 二叉查找树的结构：
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
   
   function Node(data, left, right){
     this.data = data;
     this.left = left;
     this.right = right;
   }

   Node.prototype.show = function(){
     return this.data;
   }

   function BinarySearchTree(){
       this.root = null;
   }

   BinarySearchTree.prototype = {
     insert: insert,
     inOrder: inOrder,   //遍历
     getMin: getMin,
     getMax: getMax,
     find: find
   }

   function insert(data){
     var node = new Node(data, null, null);
     if(this.root === null){
       this.root = node;
     }else{
       var current = this.root;
       var parent;
       while(true){
         parent =  current;
         if(data < current.data){
           current = current.left;
           if(current == null){
             parent.left = node;
             break;
           }
         }else{
           current = current.right;
           if(current == null){
             parent.right = node;
             break;
           }
         } 
       }
     }
   }


   //中序遍历
   function inOrder(node){
     if(node !== null){
       inOrder(node.left);
       console.log(node.data);
       inOrder(node.right);
     }
   }

   //先序遍历
   function preOrder(node){
     if(!(node == null)){
       console.log(node.data);
       preOrder(node.left);
       preOrder(node.right);
     }
   }

   //后序序遍历
   function postOrder(node){
     if(!(node == null)){
       preOrder(node.left);
       preOrder(node.right);
       console.log(node.data);
     }
   }

   //查找最小值
   function getMin(){
     var current = this.root;
     while(!(current.left === null)){
       current = current.left;
     }

     return current.data;
   }

   function getMax(){
     var current = this.root;
     while(!(current.right === null)){
       current = current.right;
     }
     return current.data;
   }

   function find(data){
     var current = this.root;
     while(current != null){
       if(current.data == data){
         return current;
       }else if(data < current.data){
         current = current.left;
       }else {
         current = current.right;
       }
     }

     return null;
   }

})(window);