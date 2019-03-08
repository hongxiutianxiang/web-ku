;(function($){
	function initer($elem,hiddenCb){
		if($elem.is(':hidden')){
			$elem.data('status','hidden');
			typeof hiddenCb == 'function' && hiddenCb();
		}else{
			$elem.data('status','shown')
		}
	}
	function shower($elem,cb){
		if($elem.data('status') == 'shown') return;
		if($elem.data('status') == 'showing') return;//防止显示过程点击
		$elem.data('status','showing').trigger('showing');
		cb();
	}
	function hider($elem,cb){
		if($elem.data('status') == 'hidden') return;
		if($elem.data('status') == 'hiding') return;
		$elem.data('status','hiding').trigger('hiding');
		cb()
	}

	var slient = {
		init:initer,
		show:function($elem){
			shower($elem,function(){
				$elem.show();
				$elem.trigger('shown').data('status','shown');
			})
			
		},

		hide:function($elem){
			hider($elem,function(){
				$elem.hide();
				$elem.trigger('hided').data('status','hidden');
			})

		}
	}

	var jser={
		fade:{
			init:function($elem){
				jser._init($elem)
			},
			show:function($elem){
				jser._show($elem,'fadeIn');
			},
			hide:function($elem){
				jser._hide($elem,'fadeOut');
			}
		},
		slideDownUp:{
			init:function($elem){
				jser._init($elem)
			},
			show:function($elem){
				jser._show($elem,'slideDown');
			},
			hide:function($elem){
				jser._hide($elem,'slideUp');
			}
		},
		slideLeftRight:{
			init:function($elem){
				jser._customInit($elem,{
						width:0,
						paddingLeft:0,
						paddingRight:0,
						borderLeftWidth:0,
						borderRightWidth:0
					});
				},
			show:function($elem){
				jser._customShow($elem);
			},
			hide:function($elem){
				jser._customHide($elem,{
					width:0,
					paddingLeft:0,
					paddingRight:0,
					borderLeftWidth:0,
					borderRightWidth:0
				});
			}
		},
		FadeSlideLeftRight:{
			init:function($elem){
				jser._customInit($elem,{
						width:0,
						paddingLeft:0,
						paddingRight:0,
						borderLeftWidth:0,
						borderRightWidth:0,
						opacity:0,
					});
				},
			show:function($elem){
				jser._customShow($elem);
			},
			hide:function($elem){
				jser._customHide($elem,{
					width:0,
					paddingLeft:0,
					paddingRight:0,
					borderLeftWidth:0,
					borderRightWidth:0,
					opacity:0,
				});
			}
		},
	}

	jser._init = function($elem){
		$elem.removeClass('transition');
		initer($elem);
	}
	jser._show = function($elem,mode){
		shower($elem,function(){
			$elem.stop();
			$elem[mode](function(){
				$elem.trigger('shown').data('status','shown');
			});
		});
	}
	jser._hide = function($elem,mode){
		hider($elem,function(){
			$elem.stop();
			$elem[mode](function(){
				$elem.trigger('hided').data('status','hidden');
			});
		})
	}
	jser._customInit = function($elem,options){
		$elem.removeClass('transition');
		// initer($elem);
		//1.保存原始值
		var styles = {};

		for(var key in options){
			styles[key] = $elem.css(key)
		}

		$elem.data('stylesbb',styles);
		
		//2.如果是隐藏的话，把水平方向的值改为0
		initer($elem,function(){
			$elem.css(options)
		})
	}
	jser._customShow = function($elem){
		shower($elem,function(){
			$elem.show();//display = block
			$elem.stop()
			.animate($elem.data('stylesbb'),function(){
				$elem.trigger('shown').data('status','shown');
			});
		});
	}
	jser._customHide = function($elem,options){
		hider($elem,function(){
			$elem.stop()
			.animate(options,function(){
				$elem.hide();//display = none
				$elem.trigger('hided').data('status','hidden');
			})
		})
	}

	function getShowHide($elem,options){
		var showHideFn = slient;
		if(options.jser){
			showHideFn = jser[options.mode];
		}

		showHideFn.init($elem);
		return {
			show:showHideFn.show,
			hide:showHideFn.hide
		}
	}

	var DEFAULTS = {
		jser:true,
		mode:'slideDownUp'
	}
	//注册插件
	$.fn.extend({
		showHide:function(options){
			// console.log(this)
			//1.隐式迭代
			return this.each(function(){
				//console.log(this)  DOM对象
				var $elem = $(this);

				var showHideObj = $elem.data('showHideObj');

				if(!showHideObj){
					options = $.extend({},DEFAULTS,options);
					showHideObj = getShowHide($elem,options);
					$elem.data('showHideObj',showHideObj);
				}

				if(typeof showHideObj[options] =='function'){
					showHideObj[options]($elem);
				}
			

			});
		}
	});

})(jQuery);