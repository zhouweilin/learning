(function(win){
	var base, util, coll, events, mlib;

	var toString = Object.prototype.toString;

	function property(key) {
	  return function(obj) {
	    return obj == null ? void 0 : obj[key];
	  };
	};

	// Helper for collection methods to determine whether a collection
	// should be iterated as an array or as an object
	// Related: http://people.mozilla.org/~jorendorff/es6-draft.html#sec-tolength
	// Avoids a very nasty iOS 8 JIT bug on ARM-64. #2094
	var MAX_ARRAY_INDEX = Math.pow(2, 53) - 1;
	var getLength = property('length');
	function isArrayLike(collection) {
	  var length = getLength(collection);
	  return typeof length == 'number' && length >= 0 && length <= MAX_ARRAY_INDEX;
	};

	function each(obj, iteratee){
		var i, length;

		if(isArrayLike(obj)){
			for( i = 0, length = obj.length;  i < length; i++){
				iteratee(obj[i], i, obj);
			}
		}else{
			for(var key in obj){
				iteratee(obj[key], key, obj);
			}
		}

		return obj;
	};

	var isArray = Array.isArray || function(obj){
		return Object.prototype.toString.call(obj) === '[object Array]';
	}

	//Is a given value a DOM element?
	function isElement(obj){
		return !!(obj && obj.nodeType === 1);
	}

	//Is a given value a json object?
	function isJson(obj){
		return typeof obj === 'object' && toString.call(obj) === '[object Object]' && !('length' in obj);
	}

	function toArray(arrayLike){
		var array = [];
		each(arrayLike, function(item){
			array.push(item);
		});
		return array;				
	}

	function extend(){
		if(isArray(arguments[0])){
			var newArray = [];
			each(arguments, function(item){
				each(item, function(data){
					newArray.push(data);
				})
			});

			return newArray;
		}else{
			var newObj = {};
			each(arguments, function(item){
				each(item, function(value, key){
					if(!(key in newObj)){
						newObj[key] = value;
					}
				});
			});

			return newObj;
		}
	};

	function mergeJson(){
		var newObj = {};
		each(arguments, function(item){
			each(item, function(value, key){	
				newObj[key] = value;
			});
		});
		return newObj;
	}

	/*+++++++++++++++++++

	* base collection

	+++++++++++++++++++++*/
	base = {
		each: each,
		isArrayLike: isArrayLike,
		toArray: toArray,
		extend: extend,
		isArray: isArray,
		isElement: isElement,
		isJson: isJson,
		mergeJson: mergeJson,

		getStyle: function(ele){
					return  ele.currentStyle ? ele.currentStyle : getComputedStyle(ele, null);
				}
		
	};

	each(['Arguments', 'Function', 'String', 'Number', 'Date', 'RegExp', 'Error'], function(name){
		base['is' + name] = function(obj){
			return Object.prototype.toString.call(obj) === '[object '+ name +']';
		}
	});


	/*+++++++++++++++++++

	* util collection

	+++++++++++++++++++++*/
	util = {};

	/*+++++++++++++++++++

	* coll collection

	+++++++++++++++++++++*/
	coll = {};

	/*+++++++++++++++++++

	* event collection

	+++++++++++++++++++++*/
	events = {
		on: function(targetElement, type, handler){
			 ele.addEventListener(type, handler, false) || ele.attachEvent('on' + type, handler);
		},
		off: function(targetElement, type, handler){
			if(!document.removeEventListener){
			  ele.detachEvent('on' + type, handler);
			} 
			ele.removeEventListener(type, handler, false);
		},
		drag: function(targetElement, options){
			var _this = this,
			    pos = {
			      startX: null,
			      startY: null, 
			      currX: null,
			      currY: null,
			      endX: null,
			      endY: null
			    };

			this.on(targetElement, 'touchstart', touchStart);

			function touchStart(event){
			    event.preventDefault();

			    var touch = event.changedTouches[0],
			        left = targetElement.offsetLeft,
			        top = targetElement.offsetTop;
			    
			    pos.startX = touch.pageX - left;
			    pos.startY = touch.pageY - top;

			    if(options && !!(typeof options.onTouchStart === 'function')){
			      options.onTouchStart(event, pos);
			    }
			    
			    _this.on(document, 'touchmove', touchMove);      
			    _this.on(document, 'touchend', touchEnd);
			}
			
			function touchMove(event){
			  event.preventDefault();

			  var touch = event.changedTouches[0];
			  pos.currX = touch.pageX - pos.startX;
			  pos.currY = touch.pageY - pos.startY;

			  ele.style.left = pos.currX + 'px';
			  ele.style.top = pos.currY + 'px';

			  if(options && !!(typeof options.onTouchMove === 'function')){
			      options.onTouchMove(event, pos);
			  }
			}

			function touchEnd(event){
			  var touch = event.changedTouches[0];
			  pos.endX = touch.pageX;
			  pos.endY = touch.pageY;

			  if(options && !!(typeof options.onTouchEnd === 'function')){
			    options.onTouchEnd(event, pos);
			  }
			  _this.off(document, 'touchmove', touchMove);
			  _this.off(document, 'touchend', touchEnd);
			}
		}
	};

	mlib = {
		base: base,
		util: util,
		coll: coll,
		event: event
	}

	mlib = extend(mlib, base, util, coll, event);
	win.mlib = mlib;

	return mlib;

})(window);
