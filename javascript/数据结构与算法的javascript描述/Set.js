(function(win){
  /*
   * Set: 集合
   * 集合中的元素只能出现一次
   *
  */
   function Set(){
     this.dataStore = [];
   }

   Set.prototype = {
     add: add,
     remove: remove,
     size: size,
     union: union,
     intersect: intersect,
     // subset: subset,
     // difference: difference,
     show: show,
     contains: contains
   }

   function size(){
     return this.dataStore.length;
   }

   function add(data){
     if(this.dataStore.indexOf(data) < 0){
       this.dataStore.push(data);
       return true;
     }

     return false;
   }

   function remove(data){
     var pos = this.dataStore.indexOf(data);
     if(pos > -1){
       this.dataStore.splice(pos, 1);
       return true;
     }
     return false;
   }

   function show(){
     return this.dataStore;
   }

   function contains(data){
     if(this.dataStore.indexOf(data) > -1) return true;
     return false;
   }

   function union(set){
     var tempSet = new Set();
     for(var i = 0; i < this.dataStore.length; ++i){
       tempSet.add(this.dataStore[i]);
     }

     for(var i = 0; i < set.dataStore.length; ++i){
       if(!tempSet.contains(set.dataStore[i])){
         tempSet.dataStore.push(set.dataStore[i]);
       }
     }
     return tempSet;
   }

   function intersect(set){
     var tempSet = new Set();

     for(var i = 0; i < this.dataStore.length; ++i){
       if(set.contains(this.dataStore[i])){
         tempSet.add(this.dataStore[i]);
       }
     }
     return tempSet;
   }

})(window);