###No1. Set
####1. Set
  Set是ES6的新的数据结构，与数组类似，但其元素都是唯一的、不重复的。通过 `new Set(param)`来构造一个Set的对象
* __Set的属性__
>  * Set.prototype.constructor     //构造函数Set()函数
>  * Set.size                      //Set的成员个数

* __Set的方法__
>  * 操作方法：
>    * Set.prototype.add(ele)                   //添加元素，    返回：添加后的Set对象
>    * Set.prototype.delete(ele)                //删除元素，    返回：布尔值，表示是否删除成功
>    * Set.prototype.has(ele)                   //判断是否具有某个属性    返回：布尔值
>    * Set.prototype.clear()                    //清楚Set中的所有元素     返回：空
>  * 遍历方法：
>    * Set.prototype.keys()                     //返回一个包含Set键的遍历器
>    * Set.prototype.values()                   //返回一个包含Set value 的遍历器
>    * Set.prototype.entries()                  //返回一个包含Set key and value 的遍历器
>    * Set.prototype.forEach(callback)          //通过回调函数遍历每个成员

