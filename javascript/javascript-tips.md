###作用域
####1. 以下代码将会打印出什么
```javascript
(function(){
  var a = b = 5;
})()
console.log(b);   //5
```
`note:` **a**被声明为局部变量，但**b**被声明为全局变量，所以在函数体外是可以访问到**b**的。如果这里采用严格模式，则外部就访问不到**b**
###2. 变量声明提升
```javascript
var foo = 1;
+function(){
  console.log(foo); //undefind
  var foo = 2;
  console.log(foo); //2
}()
```
`note:`javascript引擎在解析代码时，先在本函数内寻找关键字**var**，找到之后给**var**声明的变量分配内存并赋值为__*undefined*__，直到执行
赋值语句时才将指定的值赋值给变量。在上面的代码中，在函数体内有关键字**var**，于是先给**foo**分配内存，并初始化为__*undefined*__，但在
执行第一个`console.log(foo)`时，尚未运行赋值语句，所以**foo**的值依旧为__*undefind*__，当执行到第二个`console.log(foo)`时已经执行了赋值
语句，所以会是**2**
