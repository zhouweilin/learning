###作用域
####1. 以下代码将会打印出什么
```javascript
(function(){
  var a = b = 5;
})()
console.log(b);   //5
```
