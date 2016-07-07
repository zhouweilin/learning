(function(factory){
    if (typeof define === 'function' && define.amd) {

      // AMD. Register as an anonymous module.
      define(['jquery'], function ($) {
        return factory($);
      });
    } else if (typeof module === 'object' && typeof module.exports === 'object') {
      // Node-like environment
      module.exports = factory(require('jquery'));
    } else {

      // Browser global
      factory(window.jQuery);
    }

}(function($){

    function validSubmit(param){
      var self = validSubmit;

      self.form = this;
      
      validSubmit.param = param;
      validSubmit.init();

      return validSubmit;
    }

    $.extend(validSubmit, {
      init: function(){
        this.getInputer();
        console.log('begin');
        this.submit();
      },

      getInputer: function(){
        var self = this;

        $.each(this.param.rules, function(key, val){
           $.extend(val, {
              inputer: self.form.find('[name='+ key +']'),
              info: false
           });

           self.focus.call(self, val);
        });
      },

      focus: function(val){
        var self = this;
        val.inputer.on('focus', function(){
         
          if(val.info && ('infoEle' in val)){ 
             console.log(this);

              val.infoEle.remove(); 
              val.info = false;

              delete val.infoEle;
          }
        });
      },

      submit: function(){
        var submit = this.submitBtn = this.form.find('.submit'),
            nodeName = submit.get(0).nodeName.toLowerCase(),
            self = this;

        submit.on('click', function(e){
          if(nodeName == 'input' || nodeName == 'a' || nodeName == 'button') e.preventDefault();
          self.valid.call(self);

          if($.isPlainObject(self.param.ajax)) $.ajax(self.param.ajax);
        });

      },

      valid: function(){
        var rules = this.param.rules,
            self = this;
       
        $.each(rules, function(key, val){
           if(val.info){return;}
           var ele = self.form.find('[name=' + key +']');
           self.info(ele, key, val);
           val.info = true;
        });

      },

      info: function(after, key, val){
        var ele = $('<b class="input-error '+ key +'-msg"><i>'+ val.message +'</i></b>');
        ele.insertAfter(after);
        val.infoEle = ele;
      }
    });

    $.fn.validSubmit = validSubmit;
  
}));
