(function(win){
   function CArray(numElements){
     this.dataStore = [];
     this.pos = 0;
     this.numElements = numElements;
     for(var i = 0; i < numElements.length; ++i){
       this.dataStore[i] = i;
     }
   }

   CArray.prototype = {
     insert: insert,
     toString: toString,
     clear: clear,
     setData: setData,
     swap: swap,
     bubbleSort: bubbleSort
   }

   function bubbleSort(){
    
     var numElements = this.dataStore.length;
     var temp;
     for(var outer = numElements; outer >= 2; --outer){
       for(var inner = 0; inner <= outer -1; ++ inner){
         if(this.dataStore[inner] > this.dataStore[inner + 1]){
           swap(this.dataStore, inner, inner + 1);
         }
       }
       // console.log(this.toString());
     }

   }

   function setData(){
     for(var i = 0; i < this.numElements; ++i){
       this.dataStore[i] = Math.floor(Math.random() * (this.numElements + 1));
     }
   }

   function clear(){
     for(var i = 0; i < this.dataStore.length; ++i){
       this.dataStore[i] = 0;
     }
   }

   function insert(ele){
     this.dataStore[this.pos++] = ele;
   };

   function toString(){
     var restr = '';
     for(var i = 0; i < this.dataStore.length; ++i){
       restr += this.dataStore[i] + ', ';
       if(i > 0 & i % 10 == 0){
         restr += '\n';
       }
     }

     return restr;
   }

   function swap(arr, index1, index2){
     var temp = arr[index1];
     arr[index1] = arr[index2];
     arr[index2] = temp;
   }

   var numElements = 10;
   var myNums = new CArray(numElements);
   myNums.setData();
   
 
   
   myNums.bubbleSort();

   
  

})(window);