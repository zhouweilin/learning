#### 1. getComputedStyle & currentStyle(IE)
```javascript
    function getStyle(ele){
    	return ele.currentStyle ? ele.currentStyle : getComputedStyle(ele, null);
    }
```
