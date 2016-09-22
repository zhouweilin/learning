(function(win){
   function CArray(numElements){
     this.dataStore = [];
     this.pos = 0;
     this.numElements = numElements;
     this.gaps = [5, 3, 1];
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
     bubbleSort: bubbleSort,             //冒泡排序
     selectionSort: selectionSort,       //选择排序
     insertionSort: insertionSort,       //插入排序
     setGaps: setGaps,
     shellSort: shellSort                //希尔排序
   }

   function setGaps(arr){
     this.gaps = arr;
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

   //希尔排序
   function shellSort(){
     for(var g = 0; g < this.gaps.length; ++g){
       for(var i = this.gaps[g]; i < this.dataStore.length; ++i){
         var temp = this.dataStore[i];
         for(var j = i; j >= this.gaps[g] && 
           this.dataStore[j - this.gaps[g]] > temp; 
           j -= this.gaps[g]){

           this.dataStore[j] = this.dataStore[j - this.gaps[g]];
         }
         this.dataStore[j] = temp;
        
       }
       console.log(this.toString());
     }

   }

   //插入排序
   function insertionSort(){
     var temp, index;
     for(var outer = 1; outer <= this.dataStore.length - 1; ++outer){
       temp = this.dataStore[outer];
       inner = outer;
       while(inner > 0 && (this.dataStore[inner - 1] >= temp)){
         this.dataStore[inner] = this.dataStore[inner - 1];
         --inner;
       }
       this.dataStore[inner] = temp;    //把最小的放在最左边，把大的往右边移动
       // console.log(this.toString());
     }
   }

   //选择排序
   function selectionSort(){
     var min;
     for(var outer = 0; outer <= this.dataStore.length - 2; ++ outer){
       min = outer;
       for(var inner = outer + 1;
            inner <= this.dataStore.length - 1; ++inner){
         if(this.dataStore[inner] < this.dataStore[min]){
           min = inner;
         }
       }
       swap(this.dataStore, outer, min);
       // console.log(this.toString());
     }

   }

   //冒泡排序
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


   //快速排序
   //快速排序算法非常适用于大型数据集合，在处理小数据集时性能反而会下降
   function quikSort(list){
     if(list.length == 0){
       return [];
     }
     var lesser = [];
     var greater= [];
     var pivot = list[0];
     for(var i = 1; i < list.length; i++){
       if(list[i] < pivot){
         lesser.push(list[i]);
       }else{
         greater.push(list[i]);
       }
     }
     return quikSort(lesser).concat(pivot, quikSort(greater));
   }

   

   var numElements = 10000;
   var myNums = new CArray(numElements);

   myNums.setData();
  
   // myNums.shellSort();
   
})(window);
