#### 1. getComputedStyle & currentStyle(IE9-)
```javascript
    function getStyle(ele){
    	return ele.currentStyle ? ele.currentStyle : getComputedStyle(ele, null);
    }
```
