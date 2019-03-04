
;(function($){

function Carousel($elem,options){
	//1.罗列属性
	this.$elem = $elem;
	this.options = options;
	this.now = this.options.activeIndex;
	this.$carouselItem = this.$elem.find('.carousel-item');
	this.$btns = this.$elem.find('.btn-item');
	this.$controlBtns = this.$elem.find('.control');
	//2.初始化
	this.init();
}
Carousel.prototype = {
	constructor:Carousel,
	init:function(){
		if(this.options.slide){//划入划出

		}else{//淡入淡出
			//隐藏所有页面
			this.$elem.addClass('fade');
			//显示默认的第一张
			this.$carouselItem.eq(this.now).show();
			//显示默认的指示按钮
			this.$btns.eq(this.now).addClass('active');
			//初始化显示隐藏插件
			this.$carouselItem.showHide(this.options);
			//监听事件
			this.$elem
			.hover(function(){//显示隐藏左右按钮
				// this.$controlBtns.show();
			}.bind(this),function(){
				// this.$controlBtns.hide();
			}.bind(this))
			.on('click','.control-left',function(){
				this._fade(this.now-1)
			}.bind(this))
			.on('click','.control-right',function(){
				this._fade(this.now+1)
			}.bind(this))
		}
	},
	_fade:function(index){
		//index 代表即将显示的
		//隐藏当前的
		this.$carouselItem.eq(this.now).showHide('hide');
		//显示即将显示的
		this.$carouselItem.eq(index).showHide('show');
		//处理底部指示按钮
		this.$btns.eq(this.now).removeClass('active');
		this.$btns.eq(index).removeClass('active');

		this.now = index;
	}
}
Carousel.DEFAULTS = {
	jser:true,
	mode:'fade',
	slide:false,
	activeIndex:0,
}


$.fn.extend({
	carousel:function(options){
		//console.log(this)
		return this.each(function(){
			var $elem = $(this);
			var carousel = $elem.data('carousel');
			if(!carousel){
				options = $.extend({},Carousel.DEFAULTS,options);
				carousel = new Carousel($elem,options);
				$elem.data('carousel',carousel);
			}
			if(typeof carousel[options] == 'function'){
				carousel[options]();
			}

			
		});
	}
})
	
})(jQuery);







