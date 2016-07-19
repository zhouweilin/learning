(function(factory){
  if(typeof define === 'function'){
    define(['jquery'], factory);
  }else if(typeof module === 'object' && module.exports){
    module.exports = factory(require('jquery'));
  }else{
    factory(jQuery);
  }
})(function($){

  var defaults = {
      width: 200,                     //内容容器(layer-container)的宽度
      height: 200,                    //内容容器的高度
      left: null,                     //内容容器的left值, 如果设置，必须同时设置top值，否则会居中定位 
      top: null,                      //内容容器的top值, 如果设置，必须同时设置left值，否则会居中定位  
      preventScroll: false,           //为false 则显示滚动条
      eventType: 'click',             //触发弹窗的事件类型
      onShow: null,                   //弹窗显示后的回调
      onDestroyed: null,              //弹窗销毁后的回调
      extraClass: null,               //添加到 (layer-wrap) 上的类名
      animate: 'scale'                //动画类型[scale/flip]
  };

  function Layer(trigger, options){
    this._body = $('body');
    this.opts = $.extend(defaults, options);
    this.con =$( this.opts.content || '<p>请通过第一个参数传要展示的内容!</p>');
    this.mask = null;
    this.wrap = null;
    this.container = null;
    this.close = null;
    this.content = null;
    this.maxIndex = 20;

    this.init(trigger);
  }

  Layer.prototype = {
    init: function(trigger){

      this.getTopIndex();
      this.show($(trigger), this.opts.eventType);
    },
    create: function(){

      this.preventScroll(); 
      this.createDom();   //初始化结构
      this.closeLayer();  //移除弹层
    },
    getTopIndex: function(){
       var maxIndex = 1;
       this._body.children().each(function(index, item){
          var nodeName = item.nodeName.toLowerCase();
          if(nodeName !== 'script' && nodeName !== 'br' && nodeName !== 'style' 
            && nodeName !== 'button'){
              var zIndex = parseInt($(item).css('zIndex'));
              zIndex = isNaN(zIndex) ? 0 : zIndex;

              if(zIndex > maxIndex){
                maxIndex = zIndex  + 1;
              }
          }
       });

       this.maxIndex = this.maxIndex > maxIndex ? this.maxIndex : maxIndex;
    },
    createDom: function(){
      var _wrap = this.wrap = $('<div class="layer-wrap">' + 
                     '<div class="layer-mask"></div>' + 
                     '<div class="layer-container">' +
                        '<span class="layer-close"></span>' + 
                         '<div class="layer-content"></div>' +
                      '</div>' +
                  '</div>'),
          _this = this;

      if(this.opts.extraClass && (typeof extraClass === 'string')){
          _wrap.addClass(this.opts.extraClass);
      }

      _wrap.css({
        zIndex: this.maxIndex
      });
      this.mask = _wrap.find('.layer-mask');
      this.container = _wrap.find('.layer-container');
      this.close = this.container.find('.layer-close');
      this.content = this.container.find('.layer-content');

     
      this.anims[this.opts.animate + 'Init'].call(this, this.container);
     
      _wrap.fadeIn(400, function(){
         _this.setContainerStyle();
      });  

      this._body.append(_wrap);      
    },

    setcss3tyle:function(element, style){
        $.each(style, function(key, val){
            var skey = key.charAt(0).toUpperCase().concat(key.substr(1)),
                ms = 'ms' + skey,
                moz = 'moz' + skey,
                webkit = 'webkit' + skey;
                
            $.extend(style, {
              ms: val,
              moz: val,
              webkit: val
            });
        });

        element.css(style);
    },
    setContainerStyle: function(){
      var opts = this.opts, _this = this;

      this.container.css({
        width: opts.width,
        height: opts.height
      }).find('.layer-content').append(this.con);

      if(!(opts.left === null) && !(opts.top === null)){
        this.container.css({
          left: opts.left,
          right: opts.top
        });
      }else{
        this.container.css({
          left: '50%',
          top: '50%',
          marginLeft: - opts.width/2,
          marginTop: - opts.height/2
        });
      }

      setTimeout(function(){
        
        _this.anims[_this.opts.animate + 'Anim'].call(_this, _this.container);

        if(typeof opts.onShow == 'function'){
            opts.onShow.call(_this, _this);
        }

      }, 0);
    },

    preventScroll: function(){
      if(this.opts.preventScroll){
        this._body.css('overflow', 'hidden');
      }
    },

    destroy: function(){
      var _this = this;
        
        this.anims[this.opts.animate + 'Remove'].call(this, this.container);

        setTimeout(function(){
          _this.wrap.fadeOut(function(){
            _this.container.remove();
            _this.wrap.remove();

            if(_this.opts.preventScroll){
              _this._body.css('overflow', 'auto');
            }

            if(typeof _this.opts.onDestroyed === 'function'){
              _this.opts.onDestroyed.call(_this, _this);
            }
          });
        }, 300);
    },

    closeLayer: function(){
      var _this = this;

      this.container.click(function(event){
        event.stopPropagation();
      });

      $.each([this.mask, this.close], function(i, item){
        $(item).on('click', function(){
           _this.destroy();
        });
      });
    },

    show: function(element, eventType){
      var _this = this;
      $(element).on(eventType, function(e){
        e.stopPropagation();
        e.preventDefault();

        _this.create();
      });
    }

  }

  Layer.prototype.anims = {
      //scale
      scaleInit: function(container){
          // container.addClass('scale-init');
          var styles = ['transform .4s, opacity .4s', 'scale(0)'];

          this.setcss3tyle(container, {
            transform: styles[1],
            transition: styles[0]
          });
      },
      scaleAnim: function(container){
          container.css({ 
            opacity: 1
          });

          this.setcss3tyle(container, {
            transform: 'scale(1)'
          });
      },
      scaleRemove: function(container){
          this.setcss3tyle(container, {
            transform: 'scale(0.1)'
          });
          container.css({
            opacity: 0
          });
      },

      //flip
      flipInit: function(container){

        this.setcss3tyle(container.parent(), {
          perspective: '800px'
        });

        container.addClass('flip-init');
      },

      flipAnim: function(container){

        this.setcss3tyle(container, {
          transform: 'rotateX(0)'
        });

        container.css({opacity: 1});
      },
      flipRemove: function(container){
       
        this.setcss3tyle(container, {
          transform: 'rotateX(90deg)'
        });

        container.css({
          opacity: 0
        });

      }

    }
  
  window.layer = Layer;
});