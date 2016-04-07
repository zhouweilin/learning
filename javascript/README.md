##Basic
* [ECMAScript 2015入门 ---- 阮一峰](http://es6.ruanyifeng.com/)
* [JavaScript 标准参考教程 ---- 阮一峰](http://javascript.ruanyifeng.com/advanced/ecmascript6.html)
* [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript)
* [JSCS — JavaScript Code Style](http://jscs.info/)
* [How Browsers Work: Behind the scenes of modern web browsers](http://www.html5rocks.com/en/tutorials/internals/howbrowserswork/)


##Blogs
* [Jerry Qu(很多原创技术文章)](https://imququ.com/archives.html)

##Kangax的Javascript谜题
####1
```javascript
(function(){
   return typeof arguments; //返回值是什么
})();

```
####2
```javascript
var f = function g(){
  return 23;
};

typeof g();  //输出什么
```

####3
```javascript
  (function(x){
    delete x;
    return x; //返回什么
  })(1)
```

####4
```javascript
    var y = 1, x = y = typeof x;
    x; //输出什么
```
####5
```javascript
   (function f(f){
   
    return typeof f(); //返回什么
    
    })( function(){ return 1; } );
```
####6
```javascript
    var foo = { 
      bar: function() { return this.baz; }, 
      baz: 1
    };
    
    (function(){ 
      return typeof arguments[0]();  //返回什么
    })(foo.bar);
```

####7
```javascript
  var foo = {
      bar: function(){ return this.baz; },
      baz: 1
    }
  typeof (f = foo.bar)();  //输出什么
```
####8
```javascript
 var f = (function f(){
      return "1"; 
      }, 
      function g(){
      return 2;
      })();
      
  typeof f; //输出什么
```
####9
```javascript
  var x = 1;
   if (function f(){}) {
     x += typeof f;
   }
   x;//问x的值
```
####10
```javascript
  var x = [typeof x, typeof y][1];
  typeof typeof x; //输出什么
```
####11
```javascript
  (function(foo){
    return typeof foo.bar;
  })({ foo: { bar: 1 } });
```
####12
```javascript
(function f(){
      function f(){ return 1; }
      return f();
      function f(){ return 2; }
})();
```
####13
```javascript

function f(){ return f; }

 new f() instanceof f;//问这一行的值
 
```
