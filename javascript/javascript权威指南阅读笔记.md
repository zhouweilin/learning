##PartI javascript语言核心
###Charpter3 类型、值和变量
javascript的数据类型分为两类：`原始类型`（primitive type）和`对象类型`（object type）：　

#####1.  primitive type
   * number
   * string
   * boolean
   * null      (typeof null === 'object')
   * undefined ( typeof undefined === 'undefined' )　

#####2.  除了`primitive type`之外的都是`object type`，javascript提供了几种内建的对象（引用类型） 　

  * Array      （数组对象）
  * Function   （函数对象）
  * Object     （对象对象）
  * String     （字符串对象）
  * Number     （数值对象）
  * Date       （日期对象）
  * RegExp     （正则对象）
  * Math    　 （数学对象）  

Javascript变量是无类型的（untyped），变量可以被赋予任何类型的值，同样的一个变量也可以重新赋予不同类型的值。不在任何函数内声明的变量
  被称做全局变量（global　variable），它在javascript程序中的任何地方都是课件的。在函数内声明的变量具有函数作用域（function scope），并且
　只在函数内课件。
