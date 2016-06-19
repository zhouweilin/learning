##Basic
* [ECMAScript 2015入门 ---- 阮一峰](http://es6.ruanyifeng.com/)
* [JavaScript 标准参考教程 ---- 阮一峰](http://javascript.ruanyifeng.com/advanced/ecmascript6.html)
* [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript)
* [JSCS — JavaScript Code Style](http://jscs.info/)
* [How Browsers Work: Behind the scenes of modern web browsers](http://www.html5rocks.com/en/tutorials/internals/howbrowserswork/)


##Blogs
* [Jerry Qu(很多原创技术文章)](https://imququ.com/archives.html)
* [函数声明和函数表达式](http://www.cnblogs.com/Xdoable/archive/2011/09/08/2171512.html)
* [javascript探秘](http://www.nowamagic.net/librarys/veda/detail/1630)

###jQuery 插件前面加`';'`号的原因
```javascript
var a = 5
(function(){})()  
//Uncaught TypeError: 5 is not a function
//这句话执行会存在问题，实际上js引擎会这样解析

var a = 5(function(){})();
//所以js会尝试把5当作函数来调用
//因此必须在变量声明表达式后面加上分号以避免错误
var a = 5;
(function(){
  console.log(5);
})();

```

*这应该是js里面没有加分号最危险的陷阱了*

1. Fibonacci algorithm
```javascript
function getNthFibonacci(num){
  if(num < 2) return 1;
  var first = 1,
      second = 1,
      third;
  for(var i = 2;i <= num;i ++){
    third = first + second;
    first = second;
    second = third;
  }
  console.log(third);
  return third;
}
```
