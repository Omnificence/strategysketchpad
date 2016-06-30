!function(t,i,s,e){"use strict";var n=t.asSwitch=function(i,s){this.$element=t(i).wrap("<div></div>"),this.$wrap=this.$element.parent();var e={disabled:this.$element.prop("disabled"),checked:this.$element.prop("checked")};this.options=t.extend({},n.defaults,s,e,this.$element.data()),this.namespace=this.options.namespace,this.classes={skin:this.namespace+"_"+this.options.skin,on:this.namespace+"_on",off:this.namespace+"_off",disabled:this.namespace+"_disabled"},this.$wrap.addClass(this.namespace),this.options.skin&&this.$wrap.addClass(this.classes.skin),this.checked=this.options.checked,this.disabled=this.options.disabled,this.initialized=!1,this._click=!0,this._trigger("init"),this.init()};n.prototype={constuctor:n,init:function(){var i=this.options;this.$inner=t('<div class="'+this.namespace+'-inner"></div>'),this.$innerBox=t('<div class="'+this.namespace+'-inner-box"></div>'),this.$on=t('<div class="'+this.namespace+'-on">'+i.onText+"</div>"),this.$off=t('<div class="'+this.namespace+'-off">'+i.offText+"</div>"),this.$handle=t('<div class="'+this.namespace+'-handle"></div>'),this.$innerBox.append(this.$on,this.$off),this.$inner.append(this.$innerBox),this.$wrap.append(this.$inner,this.$handle);var s=this.$on.width(),e=this.$handle.width();this.distance=s-e/2,this.options.clickable===!0&&this.$wrap.on("click.asSwitch touchstart.asSwitch",t.proxy(this.click,this)),this.options.dragable===!0&&(this.$handle.on("mousedown.asSwitch touchstart.asSwitch",t.proxy(this.mousedown,this)),this.$handle.on("click.asSwitch",function(){return!1})),this.set(this.checked,!1),this.initialized=!0,this._trigger("ready"),this.disabled&&this.disable()},_trigger:function(t){var i=Array.prototype.slice.call(arguments,1),s=[this].concat(i.concat);this.$element.trigger("asSwitch::"+t,s),t=t.replace(/\b\w+\b/g,function(t){return t.substring(0,1).toUpperCase()+t.substring(1)});var e="on"+t;"function"==typeof this.options[e]&&this.options[e].apply(this,i)},animate:function(t,i){return this.initialized===!1?(this.$innerBox.css({marginLeft:t}),this.$handle.css({left:this.distance+t}),"function"==typeof i&&i(),!1):(this.$innerBox.stop().animate({marginLeft:t},{duration:this.options.animation,complete:i}),void this.$handle.stop().animate({left:this.distance+t},{duration:this.options.animation}))},getDragPos:function(t){return t.pageX||(t.originalEvent.changedTouches?t.originalEvent.changedTouches[0].pageX:0)},move:function(t){t=Math.max(-this.distance,Math.min(t,0)),this.$innerBox.css({marginLeft:t}),this.$handle.css({left:this.distance+t})},click:function(){if(!this._click)return this._click=!0,!1;if(!this.disabled)return this.checked?this.set(!1):this.set(!0),!1},mousedown:function(s){var e,n=this,a=this.getDragPos(s);if(!this.disabled)return this.mousemove=function(t){var i=this.getDragPos(t);return e=this.checked?i-a>0?0:i-a<-this.distance?-this.distance:i-a:0>i-a?-this.distance:i-a>this.distance?0:-this.distance+i-a,this.move(e),this.$handle.off("mouseup.asSwitch"),!1},this.mouseup=function(){var s=parseInt(this.$innerBox.css("margin-left"),10);return Math.abs(s)>=this.distance/2&&this.set(!1),Math.abs(s)<this.distance/2&&this.set(!0),t(i).off(".asSwitch"),this.$handle.off("mouseup.asSwitch"),!1},t(i).on({"mousemove.asSwitch":t.proxy(this.mousemove,this),"mouseup.asSwitch":t.proxy(this.mouseup,this),"touchmove.asSwitch":t.proxy(this.mousemove,this),"touchend.asSwitch":t.proxy(this.mouseup,this)}),this.options.clickable&&this.$handle.one("mouseup.asSwitch touchend.asSwitch",function(){n.checked?n.set(!1):n.set(!0),t(i).off(".asSwitch")}),!1},check:function(){return this.checked!==!0&&this.set(!0),this},uncheck:function(){return this.checked!==!1&&this.set(!1),this},set:function(t,i){var s=this;return this.checked=t,t===!0?this.animate(0,function(){s.$wrap.removeClass(s.classes.off).addClass(s.classes.on)}):this.animate(-this.distance,function(){s.$wrap.removeClass(s.classes.on).addClass(s.classes.off)}),i!==!1&&(this.$element.prop("checked",t),this.$element.trigger("change"),this._trigger("change",t,this.options.name,"asSwitch")),this},get:function(){return this.$element.prop("checked")},val:function(t){return t?void this.set(t):this.get()},enable:function(){return this.disabled=!1,this.$element.prop("disabled",!1),this.$wrap.removeClass(this.classes.disabled),this},disable:function(){return this.disabled=!0,this.$element.prop("disabled",!0),this.$wrap.addClass(this.classes.disabled),this},destroy:function(){this.$wrap.off(".asSwitch"),this.$handle.off(".asSwitch")}},n.defaults={namespace:"asSwitch",skin:null,dragable:!0,clickable:!0,disabled:!1,onText:"ON",offText:"OFF",checked:!0,animation:200},t.fn.asSwitch=function(i){if("string"!=typeof i)return this.each(function(){t.data(this,"asSwitch")||t.data(this,"asSwitch",new n(this,i))});var s=i,e=Array.prototype.slice.call(arguments,1);if(/^\_/.test(s))return!1;if(!(/^(get)$/.test(s)||"val"===s&&0===e.length))return this.each(function(){var i=t.data(this,"asSwitch");i&&"function"==typeof i[s]&&i[s].apply(i,e)});var a=this.first().data("asSwitch");return a&&"function"==typeof a[s]?a[s].apply(a,e):void 0}}(jQuery,document,window);