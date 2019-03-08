;(function($){
	function init($elem){
		this.$elem = $elem;
		this.$elem.removeClass('transition');//防止过渡影响
		this.currentX = parseFloat(this.$elem.css('left'));
		this.currentY = parseFloat(this.$elem.css('top'));
	}

	function To(x,y,cb){
		x = (typeof x == 'number') ? x : this.currentX;
		y = (typeof y == 'number') ? y : this.currentY;//啥用？？？？？？？？？？没有也行
		//防止到达目标后继续执行
		if(this.currentX == x && this.currentY == y) return;
		this.$elem.trigger('move');

		typeof cb == 'function' && cb();

		this.$elem.css({
			left:x,
			top:y,
		});
		this.$elem.trigger('moved');
		this.currentX = x;
		this.currentY = y;
	}

	function Slient($elem){
		init.call(this,$elem)//???????????????????不懂call
	}

	Slient.prototype = {
		constructor:Slient,
		to:function(x,y){
			To.call(this,x,y,function(){
				this.$elem.css({
					left:x,
					top:y,
				});
				this.$elem.trigger('moved');
			}.bind(this));
		},
		x:function(x){
			this.to(x);
		},
		y:function(y){
			this.to(null,y)
		}
	}




	function Js($elem){
		init.call(this,$elem)
	}

	Js.prototype = {
		constructor:Js,
		to:function(x,y){
			To.call(this,x,y,function(){
				this.$elem
				.stop()
				.animate({
					left:x,
					top:y
				},function(){
					this.$elem.trigger('moved');
				}.bind(this));
			}.bind(this));
		},
		x:function(x){
			this.to(x);
		},
		y:function(y){
			this.to(null,y)
		}
	}

	function getMove($elem,options){
		var move = null;
		if(options.js){
			move = new Js($elem);
		}else{
			move = new Slient($elem);
		}
		//return move;

		// return{
		// 	to:move.to.bind(move),
		// 	x:move.x.bind(move),
		// 	y:move.y.bind(move),
		// }

		return{
			to:$.proxy(move.to,move),
			x:$.proxy(move.x,move),
			y:$.proxy(move.y,move),
		}
	}

    var DEFAULTS = {
		js:true,
	}
	//注册插件
	$.fn.extend({
		move:function(options,n1,n2){
			return this.each(function(){
				var $elem = $(this);
				var moveObj = $elem.data('moveObj');

				if(!moveObj){
					options = $.extend({},DEFAULTS,options);
					moveObj = getMove($elem,options);
					$elem.data('moveObj',moveObj);
				}

				if(typeof moveObj[options] =='function'){
					moveObj[options](n1,n2);
				}
			

			});
		}
	});

})(jQuery);