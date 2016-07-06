## javascript basic

### 类型、值和变量
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
  * JSON       （JSON对象）

Javascript变量是无类型的（untyped），变量可以被赋予任何类型的值，同样的一个变量也可以重新赋予不同类型的值。不在任何函数内声明的变量
被称做全局变量（global　variable），它在javascript程序中的任何地方都是课件的。在函数内声明的变量具有函数作用域（function scope），并且
只在函数内可见。



## Browser compatibility
1 addEventListener & attachEvent(IE8- only)

* addEventListener
```javscript
ele.addEventListener(type, listener, useCapture)   
type: string               //不含'on',如：click, mousedown   
listener: function         //事件发生时，执行的函数   
useCapture: bool
```
可以使用 `removeEventListener(type, listener, useCapture)` 来移除事件的绑定

* attachEvent
```javscript
ele.attachEvent(type, listener)  
type: string               //需要加上'on', 如：onclick, onmousedown   
listener: function         //事件发生时执行的函数 
```
可以使用 `detachEvent(type, listener)` 来移除事件绑定  


2 event.pageX(在IE8- 下为undefined), event.screenX , event.clientX
在*IE8-*以下 `event.pageX`为 `undefined`，在*IE8*下`event.screenX - event.clientX = 2`，其他情况下    
`pageX = screenX = clientX` ，所以选`clientX`为佳  

3 window.scrollY/window.pageYOffset/document.documentElement.scrollTop
```javascript
window.scrollY         //IE不支持
window.pageYOffset     //IE7,8   不支持
document.body.parentNode.scrollTop & document.documentElement.scrollTop  //chrome,edge 不支持 IE,FF支持
document.body.scrollTop  //chrome,edge支持，IE,FF不支持
```
兼容各浏览器的写法  

```javascript
var scrollY = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.body || document.documentElement || document.body.parentNode).scrollTop;
```

4 what is result of the following code and why
```javascript
 function Foo(){
   getName = function(){ console.log(1); };
   return this;
 }
 Foo.getName = function(){ console.log(2); };
 Foo.prototype.getName = function(){ console.log(10); };
 var getName = function(){ console.log(8); };
 function getName(){ console.log(5) };

 Foo.getName();  // 2
 getName();      // 8
 Foo().getName(); //  error
 new Foo.getName(); // 2 
 new Foo().getName(); // 10
 new new Foo().getName(); // 10
```

5 getComputedStyle & currentStyle(IE9-)
```javascript
    function getStyle(ele){
    	return ele.currentStyle ? ele.currentStyle : getComputedStyle(ele, null);
    }
```



