
;(function($){

function Set($elem,options){
	//1.罗列属性
	this.$elem = $elem;
	this.options = options;
	this.$button = this.$elem.find('button');
	// this.$box2 = this.$elem.find('.box2');
	this.$box2 = $(this.options.aaa);
	
	//2.初始化
	this.init();
}
Set.prototype = {
	constructor:Set,
	init:function(){
		//监听事件
		this.$button.on('click',function(){
			// console.log(this.$elem)
			this.$box2.css({'display':'block'});
			this.$box2.css({'width':this.options.width});
			this.$box2.css({'height':this.options.height});
		}.bind(this));

		this.$box2.on('click',function(){
			console.log('123',this.$box2)
			this.$box2.css({'left':this.options.left});
			this.$box2.css({'top':this.options.top});
			// this._back();
		}.bind(this));
		
	},
	_back:function(){
		var firstLeft = parseFloat(this.$box2.css('left'));
		var firstTop = parseFloat(this.$box2.css('top'));
		console.log(firstLeft)
		if(firstLeft != 0){
			this.$box2.css('left',0)
			this.$box2.css('top',0)
		}

	}

}
Set.DEFAULTS = {
	jser:true,
	width:200,
	height:200,
	left:1000,
	top:600,
}

$.fn.extend({
	set:function(options){
		// console.log(this)
		return this.each(function(){
			var $elem = $(this);
			// console.log($elem)
			var set = $elem.data('set');
			if(!set){
				options = $.extend({},Set.DEFAULTS,options);
				set = new Set($elem,options);
				$elem.data('set',set);
			}
			if(typeof set[options] == 'function'){
				set[options]();
			}

		});
	}
})
	
})(jQuery);







