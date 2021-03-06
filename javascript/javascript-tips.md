1 以下代码将会打印出什么
```javascript
(function(){
  var a = b = 5;
})()
console.log(b);   //5
```
`note:` **a**被声明为局部变量，但**b**被声明为全局变量，所以在函数体外是可以访问到**b**的。如果这里采用严格模式，则外部就访问不到**b**
2 变量声明提升
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
3 100!的阶乘
```javascript
var n = 1,
    m = 1;
function mult(max){
  m *= n;
  n ++;
  if(n <= max){
    mult(max);
  }
  return m;
}
```
4 输出乘法表
```javascript
function multTable(){
  for(var i = 1; i <= 9; i++){
    for(var j = 1; j <= i; j++){
      document.write(i + ' * ' + j + ' = ' + i * j + '&nbsp;');
    }
    document.write('<br/>');
  }
}
```
5 数组去重
* 方法一：

```javascript
function unique(arr){
  let newArr = [];
  newArr[0] = arr[0];
  for(let i = 1; i < arr.length; i++){
    if(!newArr.some(item) => item === arr[i])) newArr.push(arr[i]);  //使用原生的Array.some()方法
  }
  return newArr;
}
```
* 方法二：

```javascript
function unique(arr){
  let newArr = [];
  newArr[0] = arr[0];
  for(var i = 1; i < arr.length; i++){
    if(compare(newArr, arr[i])) newArr.push(arr[i]);
  }
}
//遍历arr中的每一个值，看是否有与val相等的值
function compare(arr, val){
  var bool = true;
  for(var i = 0; i < arr.length; i++){
    if(arr[i] === val) return bool = false;
  }
  return bool;
}
```
* 方法三: 利用扩展运算符__(...)__ 和 __Set__

```javascript
var newArr = [...new Set(arr)];
```

* 方法四：利用__Array.from__函数 和 __Set__

```javascript
function unique(arr){
  return Array.from(new Set(arr));
}
```
6 去除字符串两边的空格
```javascript
function trim(str){
  var reg = /^\s+|\s+$/g;
  return str.replace(reg, '');
}
```
7 获取两个整数间的随机整数
```javascript
function getRandom(min, max){
  var range = max -min,
      random = Math.random();
  return min + Math.round(random * range);
}
```
8 rgb色值转换成16进制色值表示，如rgb(0,0,0) -> #000000
```javascript
function rgbTohex(rgb){
  let st = rgb.replace(/\s/g, ''),
      reg = /^rgb|\(|\)/g,
      arr = st.replace(reg, '').split(',');
  arr = arr.map(function(item, index){
    let numStr = parseInt(item).toString(16);
    return numStr = numStr.length === 1 ? `0${numStr}` : numStr;
  });    
  return `#${arr.join('')}`;
}
```
9 不使用循环语句和遍历函数，逐个输出数组的每个元素
* 方法一:

```javascript
function showItem(arr){
  if(arr.length){
    console.log(arr.pop());
    showItem(arr);
  }
}
```
* 方法二：

```javascript
  var a = 0;
  function showItem(arr){
    if(a < arr.length){
      console.log(arr[a]);
      showItem(arr);
    }
  }
```
9 加千分符号
```javascript
console.log('99999999999'.replace(/\d{1,3}(?=(\d{3})+$)/g, '$&,'));
console.log('123123211312.333333'.replace(/(?=(?!^)(?:\d{3})+(?:\.|$))(\d{3}(\.\d+$)?)/g, ',$1'));
```
10 格式化时间
```javascript
//获取 xxxx-xx-xx xx:xx:xx格式的时间
//date = new Date(time); time 为要转换的日期的时间戳
function   formatDate(now){
   var year = now.getFullYear(),
       month = now.getMonth() + 1,
       date = now.getDate(),
       hour = now.getHours(),
       minute = now.getMinutes(),
       second = now.getSeconds();
       month = month > 10 ? month : '0' + month;
       date = date > 10 ? date : '0' + date;
       hour = hour > 10 ? hour : '0' + hour;
       minute = minute > 10 ? minute : '0' + minute;
       second = second > 10 ? second : '0' + second;
   return   year + "-" + month + "-" + date
            + " " + hour + ":" + minute + ":" + second;
}
```
