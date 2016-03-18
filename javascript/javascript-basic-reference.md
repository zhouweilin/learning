### Browser compatibility
#### No.1 addEventListener & attachEvent(IE8- only)

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

#### No.2 event.pageX(在IE8- 下为undefined), event.screenX , event.clientX
在**IE8-**以下 `event.pageX`为 `undefined`，在**IE8**下`event.screenX - event.clientX = 2`，其他情况下    
`pageX = screenX = clientX` ，所以选`clientX`为佳
