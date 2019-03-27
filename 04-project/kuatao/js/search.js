/*
Copy
*/
;(function($){

function Search($elem,options){
	//1.罗列属性
	this.$elem = $elem;
	this.options = options;
	this.$searchBtn = $elem.find('.serch-button');
	this.$searchInput = $elem.find('.input-box');
	this.$searchLayer = $elem.find('.serch-hide');
	//2.初始化
	this.init();
}
Search.prototype = {
	constructor:Search,
	init:function(){
		//1.绑定事件
		this.$searchBtn.on('click',$.proxy(this.submit,this));//????啥意思
	},
	submit:function(){
		if(this.getInputVal() == ''){
			return false;
		}
	},
	getInputVal:function(){
		return $.trim(this.$searchInput.val());//????????
	},
	autocomplete:function(){
		//1.监听输入框input事件
		this.$searchInput.on('input',$.proxy(this.getDate,this));

		// this.$searchLayer.showHide(this.options)
	},
	getDate:function(){
		console.log('will get data....')
	}

}
Search.DEFAULTS = {
	autocomplete:true,
	jser:true,
	mode:"slideUpDown",
}



$.fn.extend({
	search:function(options){
		//console.log(this)
		return this.each(function(){
			var $elem = $(this);
			var search = $elem.data('search');
			if(!search){
				options = $.extend({},Search.DEFAULTS,options);
				search = new Search($elem,options);
				$elem.data('search',search);
			}
			if(typeof search[options] == 'function'){
				search[options]();
			}

			
		});
	}
})
	
})(jQuery);







