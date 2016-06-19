##Kangax的Javascript谜题

####1
```javascript
(function(){
   return typeof arguments; //返回值是什么
})();

```
   
> 解析    
> `arguments`对象是一个类数组，没传参数时，arguments.length = 0;   
> 所以`typeof arguments === 'object' `  
 
####2
```javascript
var f = function g(){
  return 23;
};

typeof g();  //输出什么
```
> 解析:   
> 根据标准，命名函数表达式的函数名只对函数体内可见  
> 因此报错

####3
```javascript
  (function(x){
    delete x;
    return x; //返回什么
  })(1)
```

> 解析:   
> 参数不可删除    
> 1

####4
```javascript
    var y = 1, x = y = typeof x;
    x; //输出什么
```

> 解析:   
> 声明两个变量x与y，y最初赋为1,x没有赋值，默认赋给window的一个属性undefined，   
> 因此typeof undefined为"undefined",最后x= y= "undefined"   

####5
```javascript
   (function f(f){
   
    return typeof f(); //返回什么
    
    })( function(){ return 1; } );
```
> 解析：
> 函数名被优先级更高的参数名覆盖了 
> (function (f){    
> return typeof f();   
> })(function(){ return 1; });    
> typeof 1 ---> "number"  
   
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
> 解析:   
> 我们把下面那个自动执行函数分解一下   
> var a = function(){  
> return typeof arguments[0]();   
> };   
> a(foo.bar)  
> 执行完arguments[0]()，即得到this.baz   
> 由于this变量在此绑定失效，它指向window，window有bax变量吗？   
> 没有，返回"undefined"   

####7
```javascript
  var foo = {
      bar: function(){ return this.baz; },
      baz: 1
    }
  typeof (f = foo.bar)();  //输出什么
```
> 解析：   
> 我们把最后一行分解一下   
> window.f   
> f= foo.bar   
> f()    
> typeof f()   
> 返回"undefined"

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
> 解析:   
> 首先要理解分组选择符，最后a会赋给什么呢？   
> var a = (1,2,3);    
> alert(a) ---> 3  
> 那么这就简单了，f = function(){return 2};  
> typeof f() ---> number  

####9
```javascript
  var x = 1;
   if (function f(){}) {
     x += typeof f;
   }
   x;//问x的值
```
> 解析：
> 函数声明只能裸露于全局作用域下或位于函数体中。   
> 从句法上讲，它们不能出现在块中，例如不能出现在   
> if、while 或 for 语句中。因为块只能包含语句，   
> 因此if()中的f函数不能当做函数声明，当成表达式使用   
> 可能在预编译阶段做了如下处理   
> if((XXX = function(){}))   
> 因此我们是找不到f的   
> 1undefined   

####10
```javascript
  var x = [typeof x, typeof y][1];
  typeof typeof x; //输出什么
```
> 解析:   
> 数组其实就是这个样子["undefined","undefined"]   
> "string"

####11

```javascript
  (function(foo){
    return typeof foo.bar;
  })({ foo: { bar: 1 } });
```

> 解析：   
> 分解一下   
> var bb = { foo: { bar: 1 } }     
> (function(j){   
> return typeof j.bar    
> })(bb)    
> "undefined"   
> 注意那个对象只有foo属性，没有bar属性 

####12
```javascript
(function f(){
      function f(){ return 1; }
      return f();
      function f(){ return 2; }
})();
```
> 解析：
> 函数声明会在预编译阶段被提前   
> 2

####13

```javascript

function f(){ return f; }

 new f() instanceof f;//问这一行的值
 
```

> 解析：   
> 由于函数f会返回自身，这个new 就形同虚设  
> 如果f的形式为 function f(){return this}或function f(){}就不一样   
> false
