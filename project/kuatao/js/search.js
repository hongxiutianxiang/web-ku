/*
Copy
*/
;(function($){

function Search($elem,options){
	//1.罗列属性
	this.$elem = $elem;
	this.options = options;
	//2.初始化
	this.init();
}
Search.prototype = {
	constructor:Search,
	init:function(){

	},
}
Search.DEFAULTS = {
	
}



$.fn.extend({
	search:function(options){
		//console.log(this)
		return this.each(function(){
			var $elem = $(this);
			var search = $elem.data('search');
			if(!search){
				options = $.extend({},Search.DEFAULTS,options);
				drapdown = new Search($elem,options);
				$elem.data('search',search);
			}
			if(typeof search[options] == 'function'){
				search[options]();
			}

			
		});
	}
})
	
})(jQuery);







