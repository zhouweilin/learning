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
* [String.replace(reg, '$1,')的原理](http://www.cnblogs.com/skywang/articles/2051052.html)

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

2. Frequently used regular express
```javascript
 regex = {
    uname : '^[\u4E00-\u9FA5\a-zA-Z]{2,15}$',
    cell : '^(13[0-9]{9}|15[012356789][0-9]{8}|18[0-9][0-9]{8}|147[0-9]{8}|17[0678][0-9]{8})$',
    tel : '^(0\\d{2,3})?(\\d{7,8})$',
    phone : `^(13[0-9]{9}|15[012356789][0-9]{8}|18[0-9][0-9]{8}|147[0-9]{8}|17[0678][0-9]{8}|(0\\d{2,3})?(\\d{7,8}))$`,
    email : '^\\w+((-\\w+)|(\\.\\w+))*\\@[A-Za-z0-9]+((\\.|-)[A-Za-z0-9]+)*\\.[A-Za-z0-9]+$',
    hex : '^([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$',
    date : '^\\d{4}-\\d{2}-\\d{2}$',
    year : '^\\d{4}$',
    integer : '^\\d+$',
    chinese : '^[\\u4E00-\\u9FA5]+$'
  }
```

3. 由 1、2、3、4 组成的没有重复字的三位数 有多少，是哪些
```javascript
function nums(){
    var arr = [1, 2, 3, 4],
        items = 1;
    arr.forEach(i => {
        arr.forEach(j => {
            arr.forEach(k => {
                if(i != j && j != k && i != k){
                    console.log(`${items}: ${i}${j}${k}`);
                    items ++;
                }
            });
        })
    });
}
```

4. 冒泡排序，从小到大
```javascript
sort(){
    let arr = Array.from(arguments),
        len = arr.length;
    for(let i = len - 1; i > 1; i -- ){
        for(let j = 0; j < i; j ++ ){
            if(arr[j] > arr[j + 1]){
                swap(arr, j, j + 1);
            }
        }
    }
}

swap(arr, prev, next){
    let temp = arr[prev];
    arr[prev] = arr[next];
    arr[next] = temp;
    console.log(arr);
}
```
