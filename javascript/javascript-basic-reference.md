### Browser compatibility
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