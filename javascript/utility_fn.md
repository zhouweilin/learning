### 产生随机数
```javascript
// 1. 产生不包含最大值，但包含最小值的随机数
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
} 
// 2. 产生包含最大值和最小值的数
function getRandomIntInclusive(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// 3. 产生指定数量不重复的数
// 还可以考虑用Set
/**
* @param {Int} min 随机数的最小值
* @param {Int} max 随机数的最大值
* @param {Int} count 要产生的不重复数的数量
* @return {Array} 返回有不重复数数的数组
*/
function deDouble (min , max, count) {
    const arr = []
    while(arr.length < count) {
        let num = getRandomIntInclusive(min, max)
        if (!arr.includs(num)) {
            arr.push(num)
        }
    }
    return arr
}
```
